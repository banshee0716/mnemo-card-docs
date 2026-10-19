import { expect, test } from '@playwright/test';
import { BASE, searchFor, tabUntil } from './helpers';

const FIRST_USE = 'first-use/';
const REVIEW = 'review-and-manage/';
const ABOUT_SKILL = 'skills/mnemo-study-cards/';
const GETTING_STARTED = 'skills/mnemo-study-cards/getting-started/';

/** spec R8、spec-slice4 R30：各頁的上一篇／下一篇（null 表示沒有）。 */
const PAGINATION: { path: string; prev: [string, string] | null; next: [string, string] | null }[] = [
	{ path: FIRST_USE, prev: null, next: ['之後的複習與管理', REVIEW] },
	{ path: REVIEW, prev: ['第一次使用 Mnemo-Card', FIRST_USE], next: ['認識 mnemo-study-cards', ABOUT_SKILL] },
	{ path: ABOUT_SKILL, prev: ['之後的複習與管理', REVIEW], next: ['安裝並第一次產卡', GETTING_STARTED] },
	{ path: GETTING_STARTED, prev: ['認識 mnemo-study-cards', ABOUT_SKILL], next: null },
];

for (const { path, prev, next } of PAGINATION) {
	test(`AC4：${path} 的上一篇／下一篇符合 R8`, async ({ page }) => {
		await page.goto(path);
		for (const [rel, expected] of [
			['prev', prev],
			['next', next],
		] as const) {
			const link = page.locator(`.pagination-links a[rel="${rel}"]`);
			if (expected === null) {
				await expect(link).toHaveCount(0);
			} else {
				await expect(link.locator('.link-title')).toHaveText(expected[0]);
				await expect(link).toHaveAttribute('href', `${BASE}${expected[1]}`);
			}
		}
	});
}

for (const path of [FIRST_USE, REVIEW, ABOUT_SKILL, GETTING_STARTED]) {
	test(`AC4：${path} 在桌機有文章目錄（至少兩個二級標題）`, async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 800 });
		await page.goto(path);
		const tocLinks = page.locator('starlight-toc nav a');
		expect(await tocLinks.count()).toBeGreaterThanOrEqual(3); // 「概述」加兩個以上二級標題
		await expect(tocLinks.first()).toBeVisible();
	});
}

test('AC4：側欄依 R6 排列：開始使用、mnemo-study-cards', async ({ page }) => {
	await page.goto(FIRST_USE);
	const groups = page.locator('#starlight__sidebar .top-level > li > details');
	await expect(groups.nth(0).locator('> summary')).toHaveText('開始使用');
	await expect(groups.nth(1).locator('> summary')).toHaveText('mnemo-study-cards');
	const skillLinks = groups.nth(1).locator('a');
	await expect(skillLinks).toHaveText(['認識 mnemo-study-cards', '安裝並第一次產卡']);
	await expect(skillLinks.nth(0)).toHaveAttribute('href', `${BASE}${ABOUT_SKILL}`);
	await expect(skillLinks.nth(1)).toHaveAttribute('href', `${BASE}${GETTING_STARTED}`);
});

test('AC5：搜「卡包」找得到 mnemo-study-cards 的文章', async ({ page }) => {
	const hrefs = await searchFor(page, '卡包');
	expect(hrefs.some((h) => h.startsWith(`${BASE}${ABOUT_SKILL}`))).toBe(true);
});

test('AC17：搜「卡包」的結果含第二篇本身', async ({ page }) => {
	const hrefs = await searchFor(page, '卡包');
	expect(hrefs.some((h) => h.split('#')[0] === `${BASE}${ABOUT_SKILL}`)).toBe(true);
	// Pagefind 對中文逐字比對，單靠搜尋擋不住「卡包」被刪光；直接斷言正文含這個詞（spec-slice2 R15 第 3 點）。
	await page.goto(ABOUT_SKILL);
	await expect(page.locator('.sl-markdown-content')).toContainText('卡包');
});

test('AC18：第三篇第 4 節列出三種結果狀態', async ({ page }) => {
	await page.goto(GETTING_STARTED);
	const text = await page.locator('.sl-markdown-content').innerText();
	for (const status of ['PASS', 'BLOCKED', 'UNVERIFIED']) expect(text).toContain(status);
});

/** spec-slice2 AC14：owner 同意的文案定稿的六個 h2，依序。 */
const ABOUT_SKILL_H2 = ['怎麼判斷主題與牌組', '怎麼拆分內容', '怎麼生成卡片', '哪些事會問你', '怎麼檢查整理結果', '下一步'];

test('AC14：第二篇的 h2 恰為定稿的六個、四種卡型都在、連到第一篇與第三篇', async ({ page }) => {
	await page.goto(ABOUT_SKILL);
	const content = page.locator('.sl-markdown-content');
	const h2 = (await content.locator('h2').allInnerTexts()).map((t) => t.trim());
	expect(h2).toEqual(ABOUT_SKILL_H2);
	const text = await content.innerText();
	for (const type of ['基礎概念卡', '深入解析卡', '關聯整合卡', '範例應用卡']) expect(text).toContain(type);
	const paths = await content.locator('a[href]').evaluateAll((as) => as.map((a) => new URL((a as HTMLAnchorElement).href).pathname));
	expect(paths).toContain(`${BASE}${GETTING_STARTED}`);
	expect(paths).toContain(`${BASE}${FIRST_USE}`);
});

test('AC15：第二篇沒有實作細節與操作語句（回歸防護網，主要判斷在 S3）', async ({ page }) => {
	await page.goto(ABOUT_SKILL);
	const content = page.locator('.sl-markdown-content');
	const description = (await page.locator('meta[name="description"]').getAttribute('content')) ?? '';
	const text = `${await content.innerText()}\n${description}`;
	expect(text).not.toMatch(/\b(concept|comparison|procedure|application)\b/i);
	for (const banned of ['L1', 'L2', 'L3', 'L4', 'PASS', 'BLOCKED', 'UNVERIFIED', '.json', '.mjs', 'pack.md', '按「', '點選「', '選擇「', '輸入「', '拖入', '上傳']) {
		expect(text, banned).not.toContain(banned);
	}
	await expect(content.locator('pre, code')).toHaveCount(0);
});

test('AC10：第三篇的下載段落沒有連結或程式碼區塊，全文沒有「待補」「待確認」', async ({ page }) => {
	await page.goto(GETTING_STARTED);
	const content = page.locator('.sl-markdown-content');
	const text = await content.innerText();
	expect(text).not.toMatch(/待補|待確認/);
	const download = await page.evaluate(() => {
		const heading = [...document.querySelectorAll('.sl-markdown-content h2')].find((h) =>
			h.textContent?.includes('下載與安裝'),
		);
		if (!heading) return null;
		// Starlight 把標題包在 .sl-heading-wrapper 裡；段落內容是它之後、下一個 h2 之前的兄弟元素。
		const start = heading.closest('.sl-heading-wrapper') ?? heading;
		const parts: Element[] = [];
		for (let el = start.nextElementSibling; el && !el.querySelector('h2') && el.tagName !== 'H2'; el = el.nextElementSibling) {
			parts.push(el);
		}
		return {
			text: parts.map((p) => p.textContent?.trim()).join(''),
			links: parts.reduce((n, p) => n + p.querySelectorAll('a').length + (p.tagName === 'A' ? 1 : 0), 0),
			code: parts.reduce((n, p) => n + p.querySelectorAll('pre, code').length + (/^(PRE|CODE)$/.test(p.tagName) ? 1 : 0), 0),
		};
	});
	expect(download).not.toBeNull();
	// spec-slice2 AC18：owner 同意的兩段，取代 slice 1 的「目前尚未開放下載。」
	expect(download!.text).toBe(
		'mnemo-study-cards 是一組給 AI 工具使用的指示與檢查程式。安裝到支援技能的 AI 工具後，工具會依照它的規則，把你提供的來源整理成可以匯入 Mnemo-Card 的卡包。' +
			'技能檔由研究者提供給符合條件的受試者。',
	);
	expect(download!.links).toBe(0);
	expect(download!.code).toBe(0);
});

test.describe('第一次使用 Mnemo-Card', () => {
	test('AC5：搜「熟悉度」找得到本篇', async ({ page }) => {
		const hrefs = await searchFor(page, '熟悉度');
		expect(hrefs.some((h) => h.startsWith(`${BASE}${FIRST_USE}`))).toBe(true);
	});

	test('AC7：手機寬度下文章目錄能用鍵盤展開', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 800 });
		await page.goto(FIRST_USE);
		const details = page.locator('#starlight__mobile-toc');
		await expect(details).not.toHaveAttribute('open');
		expect(await tabUntil(page, '#starlight__on-this-page--mobile')).toBe(true);
		await page.keyboard.press('Enter');
		await expect(details).toHaveAttribute('open');
		await page.keyboard.press('Tab');
		const inToc = await page.evaluate(
			() => !!document.activeElement?.closest('#starlight__mobile-toc a'),
		);
		expect(inToc).toBe(true);
	});
});

// spec R9、spec-slice4 R34：帳號規則套用到「開始使用」兩篇（佔位文字也在正文裡，一併掃描）。
for (const path of [FIRST_USE, REVIEW]) {
	test(`AC10、AC32：${path} 沒有驗證信，也沒有教讀者按「建立帳號」或「忘記密碼？」`, async ({ page }) => {
		await page.goto(path);
		const content = page.locator('.sl-markdown-content');
		const text = await content.innerText();
		expect(text).not.toContain('驗證信');
		// 不論用哪個動詞，都不得引導讀者使用「忘記密碼？」。
		expect(text).not.toContain('「忘記密碼？」');
		// 談到忘記或重設密碼的句子，只允許 owner 核准的那一句（spec R9）。
		const approved = '如果忘記密碼，請聯絡提供帳號給你的研究者';
		const aboutPassword = text
			.split(/[。！？\n]/)
			.map((s) => s.trim())
			.filter((s) => /忘[記了]密碼|重設密碼|密碼重設/.test(s));
		expect(aboutPassword.filter((s) => s !== approved)).toEqual([]);
		// 提到「建立帳號」只允許 owner 核准的提醒句：同一句必須寫明不開放使用。
		const sentences = text.split(/[。！？\n]/).filter((s) => s.includes('「建立帳號」'));
		expect(sentences.filter((s) => !s.includes('不開放使用'))).toEqual([]);
		const steps = await content.locator('li').allInnerTexts();
		expect(steps.filter((s) => /建立帳號|忘記密碼/.test(s))).toEqual([]);
	});
}
