import { expect, test } from '@playwright/test';
import { BASE, searchFor } from './helpers';

const FIRST_USE = 'first-use/';

test.describe('第一次使用 Mnemo-Card', () => {
	test('AC4：側欄「開始使用」群組含本篇', async ({ page }) => {
		await page.goto('');
		const group = page.locator('#starlight__sidebar .top-level > li > details').first();
		await expect(group.locator('summary')).toHaveText('開始使用');
		await expect(group.locator('a')).toHaveText(['第一次使用 Mnemo-Card']);
		await expect(group.locator('a')).toHaveAttribute('href', `${BASE}${FIRST_USE}`);
	});

	test('AC4：桌機有文章目錄（至少兩個二級標題）', async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 800 });
		await page.goto(FIRST_USE);
		const tocLinks = page.locator('starlight-toc nav a');
		expect(await tocLinks.count()).toBeGreaterThanOrEqual(3); // 「概述」加兩個以上二級標題
		await expect(tocLinks.first()).toBeVisible();
	});

	test('AC4：沒有上一篇', async ({ page }) => {
		await page.goto(FIRST_USE);
		await expect(page.locator('.pagination-links a[rel="prev"]')).toHaveCount(0);
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
