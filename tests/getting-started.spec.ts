import { expect, test } from '@playwright/test';
import { BASE, searchFor } from './helpers';

/**
 * spec-slice4：「開始使用」拆成兩篇。h2 與佔位數是 owner 同意的文案定稿（AC30、AC31）。
 */
const GETTING_STARTED_PAGES = [
	{
		slug: 'first-use/',
		label: '第一次使用 Mnemo-Card',
		h2: ['1 登入並進入工作區', '2 認識工作區', '3 建立第一副牌組', '4 新增第一張卡片', '5 開始第一次練習', '6 讀一張卡，再試著自己說出來', '7 記錄熟悉度並完成這一輪', '8 安排下一次練習', '接下來'],
		placeholders: 8,
	},
	{
		slug: 'review-and-manage/',
		label: '之後的複習與管理',
		h2: ['1 到期時回來複習', '2 還沒到期也可以額外練習', '3 走完一輪之後', '4 管理牌組與卡片', '5 匯入與匯出', '6 登出', '7 遇到狀況時', '換成自己的學習內容'],
		placeholders: 4,
	},
];

/** spec-slice4 R34：第一篇介紹「設定」的核准句。 */
const SETTINGS_SENTENCE = '帳號相關的功能目前不開放，有需要請聯絡提供帳號給你的研究者。';

test('AC28：側欄「開始使用」恰為兩篇，依 R29 順序', async ({ page }) => {
	await page.goto('first-use/');
	const group = page.locator('#starlight__sidebar .top-level > li > details').first();
	await expect(group.locator('> summary')).toHaveText('開始使用');
	const links = group.locator('a');
	await expect(links).toHaveText(GETTING_STARTED_PAGES.map((p) => p.label));
	for (const [i, p] of GETTING_STARTED_PAGES.entries()) {
		await expect(links.nth(i)).toHaveAttribute('href', `${BASE}${p.slug}`);
	}
});

for (const p of GETTING_STARTED_PAGES) {
	test(`AC30：${p.slug} 的 h2 恰為定稿標題`, async ({ page }) => {
		await page.goto(p.slug);
		const h2 = (await page.locator('.sl-markdown-content h2').allInnerTexts()).map((t) => t.trim());
		expect(h2).toEqual(p.h2);
	});

	test(`AC31：${p.slug} 的圖片佔位格式、連號，每個 h2 區段最多兩個`, async ({ page }) => {
		await page.goto(p.slug);
		const placeholders = page.locator('.sl-markdown-content .figure-placeholder');
		await expect(placeholders).toHaveCount(p.placeholders);
		const texts = (await placeholders.allInnerTexts()).map((t) => t.trim());
		for (const [i, text] of texts.entries()) {
			expect(text.startsWith(`〔附圖 ${i + 1}：`), text).toBe(true);
			expect(text).toContain('示範資料');
		}
		for (let i = 0; i < p.placeholders; i++) {
			await expect(placeholders.nth(i)).toHaveAttribute('data-pagefind-ignore');
		}
		// 依文件順序，數每個 h2 之後（到下一個 h2 前）的佔位數。
		const perSection = await page.evaluate(() => {
			const counts: number[] = [0];
			const nodes = document.querySelectorAll('.sl-markdown-content h2, .sl-markdown-content .figure-placeholder');
			for (const node of nodes) {
				if (node.tagName === 'H2') counts.push(0);
				else counts[counts.length - 1]++;
			}
			return counts;
		});
		expect(Math.max(...perSection)).toBeLessThanOrEqual(2);
	});

	test(`AC32：${p.slug} 不教帳號功能，也不寫手機版`, async ({ page }) => {
		await page.goto(p.slug);
		const text = await page.locator('.sl-markdown-content').innerText();
		for (const banned of ['變更密碼', '登出所有裝置', '手機', '窄版']) expect(text, banned).not.toContain(banned);
	});
}

test('AC32：第一篇介紹「設定」時用核准句', async ({ page }) => {
	await page.goto('first-use/');
	await expect(page.locator('.sl-markdown-content li', { hasText: '設定' })).toContainText(SETTINGS_SENTENCE);
});

test('AC33：首頁「先讀哪一篇」依序恰有兩張卡片連到兩篇', async ({ page }) => {
	await page.goto('');
	const paths = await page.evaluate(() => {
		const heading = [...document.querySelectorAll('.sl-markdown-content h2')].find((h) => h.textContent?.trim() === '先讀哪一篇');
		if (!heading) return null;
		const result: string[] = [];
		for (let el = (heading.closest('.sl-heading-wrapper') ?? heading).nextElementSibling; el; el = el.nextElementSibling) {
			if (el.tagName === 'H2' || el.querySelector('h2')) break;
			for (const a of el.querySelectorAll('a[href]')) result.push(new URL((a as HTMLAnchorElement).href).pathname);
			if (el.tagName === 'A') result.push(new URL((el as HTMLAnchorElement).href).pathname);
		}
		return result;
	});
	expect(paths).toEqual(GETTING_STARTED_PAGES.map((p) => `${BASE}${p.slug}`));
});

test('AC33a：搜「重置排程」的結果含〈之後的複習與管理〉', async ({ page }) => {
	const hrefs = await searchFor(page, '重置排程');
	expect(hrefs.some((h) => h.split('#')[0] === `${BASE}review-and-manage/`)).toBe(true);
});
