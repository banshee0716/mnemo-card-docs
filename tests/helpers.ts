import AxeBuilder from '@axe-core/playwright';
import { expect, type Page } from '@playwright/test';

export const BASE = '/mnemo-card-docs/';

/** 測試涵蓋的頁面（相對於 base）。後續工作票在此加入新頁面。 */
export const PAGES: { path: string; title: string }[] = [{ path: '', title: 'Mnemo-Card 文件' }];

export type Theme = 'light' | 'dark';

/** 以 Starlight 的佈景主題設定開啟頁面，並確認主題已套用。 */
export async function gotoWithTheme(page: Page, path: string, theme: Theme) {
	await page.addInitScript((t) => {
		localStorage.setItem('starlight-theme', t);
	}, theme);
	await page.goto(path);
	await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
}

/** 收集頁面上所有 href／src，回傳站內網址（絕對網址）與漏掉 base 的站內網址。 */
export async function collectInternalUrls(page: Page) {
	const raw = await page.evaluate(() =>
		[...document.querySelectorAll('[href], [src]')].map(
			(el) => el.getAttribute('href') ?? el.getAttribute('src') ?? '',
		),
	);
	const origin = new URL(page.url()).origin;
	const internal = new Set<string>();
	const missingBase: string[] = [];
	for (const value of raw) {
		if (!value || value.startsWith('#') || /^(mailto|tel|data|javascript):/i.test(value)) continue;
		const url = new URL(value, page.url());
		if (url.origin !== origin) continue;
		if (!url.pathname.startsWith(BASE)) missingBase.push(value);
		url.hash = '';
		internal.add(url.href);
	}
	return { internal: [...internal], missingBase };
}

/** AC3：頁面上的站內連結與資源都在 base 之下且回 200。 */
export async function expectInternalLinksOk(page: Page, path: string) {
	await page.goto(path);
	const { internal, missingBase } = await collectInternalUrls(page);
	expect(missingBase, '站內連結漏掉 base 前綴').toEqual([]);
	expect(internal.length).toBeGreaterThan(0);
	const failures: string[] = [];
	for (const url of internal) {
		const res = await page.request.get(url);
		if (res.status() !== 200) failures.push(`${res.status()} ${url}`);
	}
	expect(failures, '非 200 的站內網址').toEqual([]);
}

/** AC8：axe 沒有 serious 或 critical 違規。 */
export async function expectNoSeriousA11yViolations(page: Page, path: string, theme: Theme) {
	await gotoWithTheme(page, path, theme);
	const results = await new AxeBuilder({ page }).analyze();
	const serious = results.violations
		.filter((v) => v.impact === 'serious' || v.impact === 'critical')
		.map((v) => `${v.impact} ${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`);
	expect(serious).toEqual([]);
}

/** AC6：指定寬度下沒有橫向捲動。 */
export async function expectNoHorizontalScroll(page: Page, path: string, width = 375) {
	await page.setViewportSize({ width, height: 800 });
	await page.goto(path);
	const { scrollWidth, clientWidth } = await page.evaluate(() => ({
		scrollWidth: document.documentElement.scrollWidth,
		clientWidth: document.documentElement.clientWidth,
	}));
	expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
}

/** Starlight 已知的英文預設字串；出現代表該字串落回英文（AC9）。 */
const ENGLISH_FALLBACKS = [
	'Section titled',
	'Skip to content',
	'On this page',
	'Overview',
	'Search',
	'Menu',
	'Select theme',
	'Previous',
	'Next',
	'Built with Starlight',
];

/** AC9：介面文字是繁體，沒有簡體「搜索」，也沒有落回英文的 Starlight 字串。 */
export async function expectTraditionalUi(page: Page, path: string) {
	await page.goto(path);
	// Pagefind 的搜尋表單在頁面載入後才插入，等它出現再檢查字串。
	await page.locator('.pagefind-ui__form').waitFor({ state: 'attached' });
	const html = await page.content();
	expect(html).toContain('搜尋');
	expect(html).not.toContain('搜索');
	const uiText = await page.evaluate(() => {
		const parts: string[] = [document.body.innerText];
		for (const el of document.querySelectorAll('[aria-label], [title], [placeholder]')) {
			for (const attr of ['aria-label', 'title', 'placeholder']) {
				const v = el.getAttribute(attr);
				if (v) parts.push(v);
			}
		}
		return parts.join('\n');
	});
	const found = ENGLISH_FALLBACKS.filter((s) => new RegExp(`\\b${s}\\b`).test(uiText));
	expect(found, '落回英文的介面字串').toEqual([]);
}

/** 反覆按 Tab，直到目前焦點元素符合 selector；回傳是否找到。 */
export async function tabUntil(page: Page, selector: string, maxTabs = 60) {
	for (let i = 0; i < maxTabs; i++) {
		await page.keyboard.press('Tab');
		if (await page.evaluate((s) => document.activeElement?.matches(s) ?? false, selector)) return true;
	}
	return false;
}

/** 側欄的外部連結（spec R6）。 */
export const PRODUCT_LINKS = [
	{ text: '開啟 Mnemo-Card', href: 'https://mnemo-card.vercel.app/app' },
	{ text: '產品首頁', href: 'https://mnemo-card.vercel.app/' },
];
