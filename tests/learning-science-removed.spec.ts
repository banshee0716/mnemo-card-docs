import { expect, test } from '@playwright/test';
import { BASE, searchFor } from './helpers';

/**
 * slice 6：學習科學分區已搬到另一個專案，本站整區刪除，不留說明頁、不轉址（owner 2026-10-19）。
 * 舊網址必須是一般的 404，而不是轉址或說明頁。
 */
const OLD_PATHS = [
	'learning-science/',
	'learning-science/retrieval-practice/',
	'learning-science/spaced-practice/',
	'learning-science/generative-learning/',
	'learning-science/self-explanation/',
	'learning-science/cognitive-load/',
	'learning-science/kli-framework/',
];

for (const path of OLD_PATHS) {
	test(`slice 6：${path} 回 404，不轉址`, async ({ page }) => {
		const res = await page.goto(path);
		expect(res?.status()).toBe(404);
		expect(new URL(page.url()).pathname).toBe(`${BASE}${path}`);
		await expect(page.locator('meta[http-equiv="refresh" i]')).toHaveCount(0);
	});
}

test('slice 6：側欄只剩「開始使用」與「mnemo-study-cards」', async ({ page }) => {
	await page.goto('first-use/');
	const groups = page.locator('#starlight__sidebar .top-level > li > details');
	await expect(groups.locator('> summary')).toHaveText(['開始使用', 'mnemo-study-cards']);
	await expect(page.locator(`#starlight__sidebar a[href*="learning-science"]`)).toHaveCount(0);
});

test('slice 6：首頁沒有「學習科學」區塊或連結', async ({ page }) => {
	await page.goto('');
	await expect(page.locator('.sl-markdown-content h2', { hasText: '學習科學' })).toHaveCount(0);
	await expect(page.locator('a[href*="learning-science"]')).toHaveCount(0);
	await expect(page.locator('meta[name="description"]')).not.toHaveAttribute('content', /學習科學/);
});

test('slice 6：搜「檢索練習」不會出現學習科學頁', async ({ page }) => {
	const hrefs = await searchFor(page, '檢索練習');
	expect(hrefs.filter((h) => h.includes('learning-science'))).toEqual([]);
});
