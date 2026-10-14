import { expect, test } from '@playwright/test';
import { BASE, searchFor } from './helpers';

const FIRST_USE = 'first-use/';
const ABOUT_SKILL = 'skills/mnemo-study-cards/';
const GETTING_STARTED = 'skills/mnemo-study-cards/getting-started/';

/** spec R8：各頁的上一篇／下一篇（null 表示沒有）。 */
const PAGINATION: { path: string; prev: [string, string] | null; next: [string, string] | null }[] = [
	{ path: FIRST_USE, prev: null, next: ['認識 mnemo-study-cards', ABOUT_SKILL] },
	{ path: ABOUT_SKILL, prev: ['第一次使用 Mnemo-Card', FIRST_USE], next: ['安裝並第一次產卡', GETTING_STARTED] },
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

for (const path of [FIRST_USE, ABOUT_SKILL, GETTING_STARTED]) {
	test(`AC4：${path} 在桌機有文章目錄（至少兩個二級標題）`, async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 800 });
		await page.goto(path);
		const tocLinks = page.locator('starlight-toc nav a');
		expect(await tocLinks.count()).toBeGreaterThanOrEqual(3); // 「概述」加兩個以上二級標題
		await expect(tocLinks.first()).toBeVisible();
	});
}

test('AC4：側欄依 R6 排列：開始使用、mnemo-study-cards、Mnemo-Card', async ({ page }) => {
	await page.goto('');
	const groups = page.locator('#starlight__sidebar .top-level > li > details');
	await expect(groups.locator('> summary')).toHaveText(['開始使用', 'mnemo-study-cards', 'Mnemo-Card']);
	const skillLinks = groups.nth(1).locator('a');
	await expect(skillLinks).toHaveText(['認識 mnemo-study-cards', '安裝並第一次產卡']);
	await expect(skillLinks.nth(0)).toHaveAttribute('href', `${BASE}${ABOUT_SKILL}`);
	await expect(skillLinks.nth(1)).toHaveAttribute('href', `${BASE}${GETTING_STARTED}`);
});

test('AC5：搜「卡包」找得到 mnemo-study-cards 的文章', async ({ page }) => {
	const hrefs = await searchFor(page, '卡包');
	expect(hrefs.some((h) => h.startsWith(`${BASE}${ABOUT_SKILL}`))).toBe(true);
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
	expect(download!.text).toBe('目前尚未開放下載。');
	expect(download!.links).toBe(0);
	expect(download!.code).toBe(0);
});

test.describe('第一次使用 Mnemo-Card', () => {
	test('AC4：側欄「開始使用」群組含本篇', async ({ page }) => {
		await page.goto('');
		const group = page.locator('#starlight__sidebar .top-level > li > details').first();
		await expect(group.locator('summary')).toHaveText('開始使用');
		await expect(group.locator('a')).toHaveText(['第一次使用 Mnemo-Card']);
		await expect(group.locator('a')).toHaveAttribute('href', `${BASE}${FIRST_USE}`);
	});

	test('AC5：搜「熟悉度」找得到本篇', async ({ page }) => {
		const hrefs = await searchFor(page, '熟悉度');
		expect(hrefs.some((h) => h.startsWith(`${BASE}${FIRST_USE}`))).toBe(true);
	});

	test('AC7：手機寬度下文章目錄能用鍵盤展開', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 800 });
		await page.goto(FIRST_USE);
		const details = page.locator('#starlight__mobile-toc');
		await expect(details).not.toHaveAttribute('open');
		await page.locator('#starlight__on-this-page--mobile').focus();
		await page.keyboard.press('Enter');
		await expect(details).toHaveAttribute('open');
		await page.keyboard.press('Tab');
		const inToc = await page.evaluate(
			() => !!document.activeElement?.closest('#starlight__mobile-toc a'),
		);
		expect(inToc).toBe(true);
	});

	test('AC10：沒有驗證信，也沒有教讀者按「建立帳號」或「忘記密碼？」', async ({ page }) => {
		await page.goto(FIRST_USE);
		const content = page.locator('.sl-markdown-content');
		const text = await content.innerText();
		expect(text).not.toContain('驗證信');
		expect(text).not.toMatch(/按「(建立帳號|忘記密碼？)」/);
		const steps = await content.locator('li').allInnerTexts();
		expect(steps.filter((s) => /建立帳號|忘記密碼/.test(s))).toEqual([]);
	});
});
