import { expect, test, type Page } from '@playwright/test';
import { BASE, searchFor } from './helpers';

/**
 * spec-slice3：學習科學分區。只列已上線的頁面，依側欄順序（R19）。
 * h2 是 owner 同意的文案定稿標題（AC20）；product 表示有產品段（R25），值為產品段 h2。
 */
export const LEARNING_SCIENCE: {
	slug: string;
	label: string;
	h2: string[];
	isIndex?: boolean;
	product?: string;
	noMnemoCard?: boolean;
	noCardTypes?: boolean;
}[] = [];

const REFERENCES = '參考文獻';
const FURTHER_READING = '延伸閱讀';

/** h2「from」之後、下一個 h2 之前的兄弟元素（h2 順序由 AC20 鎖定）。Starlight 把 h2 包在 .sl-heading-wrapper 裡。 */
async function section(page: Page, from: string) {
	return page.evaluate(
		(from) => {
			const headings = [...document.querySelectorAll('.sl-markdown-content h2')];
			const start = headings.find((h) => h.textContent?.trim() === from);
			if (!start) return null;
			const parts: Element[] = [];
			for (let el = (start.closest('.sl-heading-wrapper') ?? start).nextElementSibling; el; el = el.nextElementSibling) {
				if (el.tagName === 'H2' || el.querySelector('h2')) break;
				parts.push(el);
			}
			const items = parts.flatMap((p) => [...p.querySelectorAll('li')]);
			return {
				text: parts.map((p) => p.textContent ?? '').join('\n'),
				items: items.map((li) => ({
					links: [...li.querySelectorAll('a[href]')].map((a) => a.getAttribute('href') ?? ''),
				})),
			};
		},
		from,
	);
}

for (const page of LEARNING_SCIENCE) {
	const path = `learning-science/${page.slug}`;

	test(`AC20：${path} 的 h2 恰為定稿標題`, async ({ page: p }) => {
		await p.goto(path);
		const h2 = (await p.locator('.sl-markdown-content h2').allInnerTexts()).map((t) => t.trim());
		expect(h2).toEqual(page.h2);
		if (!page.isIndex) expect(h2.slice(-2)).toEqual([REFERENCES, FURTHER_READING]);
	});

	if (!page.isIndex) {
		test(`AC21：${path} 的參考文獻 3–7 筆且都有連結，延伸閱讀 1–2 筆`, async ({ page: p }) => {
			await p.goto(path);
			const refs = await section(p, REFERENCES);
			expect(refs).not.toBeNull();
			expect(refs!.items.length).toBeGreaterThanOrEqual(3);
			expect(refs!.items.length).toBeLessThanOrEqual(7);
			for (const item of refs!.items) expect(item.links.some((h) => h.startsWith('https://'))).toBe(true);
			const further = await section(p, FURTHER_READING);
			expect(further!.items.length).toBeGreaterThanOrEqual(1);
			expect(further!.items.length).toBeLessThanOrEqual(2);
		});
	}

	test(`AC22：${path} 沒有成效宣稱、程式碼，且守住產品段與跨篇界線`, async ({ page: p }) => {
		await p.goto(path);
		const content = p.locator('.sl-markdown-content');
		const text = await content.innerText();
		for (const banned of ['證實 Mnemo-Card', 'Mnemo-Card 能提升']) expect(text, banned).not.toContain(banned);
		if (page.noMnemoCard) expect(text).not.toContain('Mnemo-Card');
		if (page.noCardTypes) {
			for (const type of ['基礎概念卡', '深入解析卡', '關聯整合卡', '範例應用卡']) expect(text, type).not.toContain(type);
		}
		if (page.product) {
			const product = await section(p, page.product);
			expect(product, '找不到產品段').not.toBeNull();
			for (const banned of ['保證', '最佳', '個人化', '演算法', '證實', '有效提升']) {
				expect(product!.text, banned).not.toContain(banned);
			}
		}
		await expect(content.locator('pre, code')).toHaveCount(0);
	});
}

test('AC19：側欄「學習科學」群組依 R19 順序，只列已上線頁面', async ({ page }) => {
	test.skip(LEARNING_SCIENCE.length === 0, '學習科學尚無上線頁面');
	await page.goto('first-use/');
	const groups = page.locator('#starlight__sidebar .top-level > li > details');
	await expect(groups.locator('> summary')).toHaveText(['開始使用', 'mnemo-study-cards', '學習科學']);
	const links = groups.nth(2).locator('a');
	await expect(links).toHaveText(LEARNING_SCIENCE.map((p) => p.label));
	for (const [i, p] of LEARNING_SCIENCE.entries()) {
		await expect(links.nth(i)).toHaveAttribute('href', `${BASE}learning-science/${p.slug}`);
	}
});

test('AC23：學習科學各頁的上一篇／下一篇依 R21', async ({ page }) => {
	test.skip(LEARNING_SCIENCE.length === 0, '學習科學尚無上線頁面');
	for (const [i, p] of LEARNING_SCIENCE.entries()) {
		await page.goto(`learning-science/${p.slug}`);
		const prev = i === 0 ? null : LEARNING_SCIENCE[i - 1];
		const next = LEARNING_SCIENCE[i + 1] ?? null;
		for (const [rel, expected] of [
			['prev', prev],
			['next', next],
		] as const) {
			const link = page.locator(`.pagination-links a[rel="${rel}"]`);
			if (expected === null) {
				await expect(link, `${p.slug} ${rel}`).toHaveCount(0);
			} else {
				await expect(link.locator('.link-title')).toHaveText(expected.label);
				await expect(link).toHaveAttribute('href', `${BASE}learning-science/${expected.slug}`);
			}
		}
	}
});

test('AC23：首頁有「學習科學」入口連到導讀頁', async ({ page }) => {
	test.skip(LEARNING_SCIENCE.length === 0, '學習科學尚無上線頁面');
	await page.goto('');
	await expect(page.locator('.sl-markdown-content h2', { hasText: '學習科學' })).toHaveCount(1);
	await expect(page.locator(`.sl-markdown-content a[href="${BASE}learning-science/"]`).first()).toBeVisible();
});

/** AC24：搜尋詞 → 必須出現在結果中的頁面 slug。 */
const SEARCHES: [string, string][] = [];

for (const [query, slug] of SEARCHES) {
	test(`AC24：搜「${query}」的結果含 learning-science/${slug}`, async ({ page }) => {
		const hrefs = await searchFor(page, query);
		expect(hrefs.some((h) => h.split('#')[0] === `${BASE}learning-science/${slug}`)).toBe(true);
	});
}
