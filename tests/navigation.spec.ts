import { expect, test } from '@playwright/test';
import { BASE, tabUntil } from './helpers';

const sidebar = '#starlight__sidebar';
const articleLink = `${sidebar} a[href="${BASE}first-use/"]`;

test.describe('側欄（AC4）', () => {
	test('側欄只有站內文章，沒有外部連結', async ({ page }) => {
		await page.goto('');
		const hrefs = await page.locator(`${sidebar} a`).evaluateAll((els) => els.map((a) => a.getAttribute('href') ?? ''));
		expect(hrefs.length).toBeGreaterThan(0);
		expect(hrefs.filter((h) => !h.startsWith(BASE))).toEqual([]);
	});

	test('首頁不在側欄', async ({ page }) => {
		await page.goto('');
		await expect(page.locator(`${sidebar} a[href="${BASE}"]`)).toHaveCount(0);
	});
});

test.describe('鍵盤操作（AC7）', () => {
	test('第一次 Tab 聚焦跳轉連結；Enter 後網址變 #_top，下一次 Tab 停在 main 裡', async ({ page }) => {
		await page.goto('');
		await page.keyboard.press('Tab');
		const skip = page.locator(':focus');
		await expect(skip).toHaveText('跳到內容');
		await page.keyboard.press('Enter');
		await expect(page).toHaveURL(/#_top$/);
		await page.keyboard.press('Tab');
		const inMain = await page.evaluate(() => !!document.activeElement?.closest('main'));
		expect(inMain).toBe(true);
	});

	test('桌機寬度下 Tab 能走到側欄的文章連結', async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 800 });
		await page.goto('');
		expect(await tabUntil(page, articleLink)).toBe(true);
	});

	test('手機寬度下 Enter 打開選單、Tab 到側欄的文章連結、Esc 關閉', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 800 });
		await page.goto('');
		expect(await tabUntil(page, '.sl-menu-button')).toBe(true);
		await page.keyboard.press('Enter');
		await expect(page.locator(`${sidebar}:popover-open`)).toHaveCount(1);
		expect(await tabUntil(page, articleLink, 20)).toBe(true);
		await page.keyboard.press('Escape');
		await expect(page.locator(`${sidebar}:popover-open`)).toHaveCount(0);
	});

	test('能用鍵盤打開搜尋', async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 800 });
		await page.goto('');
		// Pagefind 的輸入框載入後才存在；開啟搜尋時 Starlight 會把焦點移到它。
		await page.locator('.pagefind-ui__form').waitFor({ state: 'attached' });
		expect(await tabUntil(page, 'site-search button[data-open-modal]')).toBe(true);
		await page.keyboard.press('Enter');
		await expect(page.locator('site-search dialog[open]')).toHaveCount(1);
		await expect(page.locator('.pagefind-ui__search-input')).toBeFocused();
	});
});
