#!/usr/bin/env node
/**
 * check-public.mjs — 公開儲存庫衛生檢查（spec K2、AC13）。
 *
 * 掃描 HEAD 可達的「每一個」提交（不只目前版本），因為推送後任何提交都能以 SHA 公開存取：
 *   1. 檔案內容：主程式內部細節、帳號與寄信設定、憑證樣式、非 noreply 的電子郵件地址。
 *   2. 提交者身分：作者與提交者只能是 GitHub noreply 地址。
 *   3. 提交訊息：不得含非 noreply 的電子郵件地址。
 *
 * 搜尋樣式只定義在本檔，本檔自身不掃描。歷史中已知無害的命中（例如舊版搜尋指令本身）
 * 以「檔案＋整行文字」逐行列入 ALLOWED，不整檔排除。
 *
 * 用法：node scripts/check-public.mjs [<rev-range>]   （預設 HEAD）
 * 結束碼：0 乾淨；1 有命中；2 git 執行失敗。
 */

import { spawnSync } from 'node:child_process';

const SELF = 'scripts/check-public.mjs';
const NOREPLY = '62146316+banshee0716@users.noreply.github.com';

/** 內容樣式（不分大小寫，ERE）。 */
const CONTENT_PATTERNS = [
	// 主程式與後端
	'supabase|service_role|memo-card-system|disable_signup|smtp',
	// 帳號與寄信能力的描述
	'寄不到|專案成員|手動重設',
	// 主程式檔案路徑：lib/、components/、app/(…)（前面接 / 或 - 的是套件內路徑，例如 dist/components/）
	'(^|[^a-z/-])(lib|components)/[a-z]',
	'app/\\([a-z]',
	// 主程式 TSX 檔與 STATUS.md 的行號引用（本儲存庫沒有 .tsx，也沒有 STATUS.md）
	'\\.tsx:[0-9]',
	'status\\.md:[0-9]',
	// 其他切片的 harness 文件路徑（本儲存庫只有 product-docs，下方 HARNESS_OK 過濾）
	'docs/harness/[a-z0-9-]+/',
	// 環境檔
	'(^|[^a-z.])\\.env([^a-z]|$)',
	// 憑證樣式
	'ghp_[a-z0-9]{20,}|github_pat_[a-z0-9_]{20,}|sk-[a-z0-9_-]{20,}|-----begin [a-z ]*private key-----',
	// 電子郵件地址（允許的網域在下方 isAllowedEmail 過濾）
	'[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}',
];

const HARNESS_PATH = /docs\/harness\/([a-z0-9-]+)\//gi;
const HARNESS_OK = new Set(['product-docs']);

const EMAIL = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi;
const ALLOWED_EMAIL = [/@users\.noreply\.github\.com$/i, /^noreply@anthropic\.com$/i, /@example\.com$/i];

/** 歷史中已知無害的整行（檔案、去頭尾空白後的整行文字）。新增前必須確認該行不含真實內部細節。 */
const ALLOWED = [
	// G6 r1 Codex 原文：F11 的假設失敗情境（SMTP 一詞），逐字存檔不可改
	["docs/harness/product-docs/reviews/product-docs-s1-g6ab-r1.md", "相關需求：K2、AC13。證據：命令宣稱擴大到全儲存庫，卻明確排除 spec.md；它也只執行一次 git grep，沒有走訪提交歷史。這正好漏掉先前曾發生洩漏的規格檔與「先提交、後刪除」情況。失敗情境：提交 A 在 spec.md 加入內部路徑、SMTP 設定或憑證，提交 B 在 G4 前刪除；既定命令零輸出，兩個提交 push 後 A 仍能以 SHA 公開存取。影響是不可由普通修正提交清除的隱私／安全洩漏，可能再次需要刪庫重建。"],
	// 最初版 spec AC13 描述要搜尋的字樣
	["docs/harness/product-docs/spec.md", "- **AC13**：沒有提交任何 secret 或主程式內部細節。以 `git grep` 搜 `supabase`、`SERVICE_ROLE`、"],
	// 同上
	["docs/harness/product-docs/spec.md", "`memo-card-system`、`.env`，在 `src/` 下沒有命中（AGENTS.md 與 harness 文件不在此限）。"],
	// AGENTS.md 的事實來源段：本機路徑，非主程式內容
	['AGENTS.md', '- Mnemo-Card 主程式：`~/code/memo-card-system`。正式版本以其 `STATUS.md` 記錄的 main 為準。'],
	// .gitignore 的環境檔排除規則
	['.gitignore', '.env*'],
	// 舊版 spec AC13 的搜尋指令本身（樣式字串，非內容）
	[
		'docs/harness/product-docs/spec.md',
		'- `git grep -n -i -e supabase -e SERVICE_ROLE -e memo-card-system -e "\\.env" -e "lib/" -e "components/" -e "app/(" -e "\\.tsx\\?:" -- src public docs/harness/product-docs/verification docs/harness/product-docs/evidence`',
	],
	[
		'docs/harness/product-docs/spec.md',
		"`git grep -n -i -E -e 'supabase|service_role|memo-card-system|disable_signup|smtp|寄不到' -e '(^|[^a-z])\\.env' -e '(^|[^a-z])(lib|components)/[a-z]' -e 'app/\\([a-z]' -e '\\.tsx?:[0-9]' -e '(state|status)\\.md:[0-9]' -- . ':!AGENTS.md' ':!package-lock.json' ':!.gitignore' ':!docs/harness/product-docs/spec.md'`",
	],
	[
		'docs/harness/product-docs/tickets/04-articles-skill.md',
		'- [ ] AC13：`git grep -n -i -e supabase -e SERVICE_ROLE -e memo-card-system -e "\\.env" -- src` 沒有輸出',
	],
];

function git(args) {
	const r = spawnSync('git', args, { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
	if (r.status !== 0 && r.status !== 1) {
		console.error(`check-public: git ${args.join(' ')} failed: ${(r.stderr || '').trim()}`);
		process.exit(2);
	}
	return r.stdout ?? '';
}

function isAllowedEmail(addr) {
	return ALLOWED_EMAIL.some((re) => re.test(addr));
}

/** 一行是否只因「允許的電子郵件」或「本儲存庫的 harness 路徑」而命中。 */
function onlyBenign(text) {
	const strict = CONTENT_PATTERNS.filter((p) => !p.startsWith('docs/harness') && !p.includes('@'));
	if (strict.some((p) => new RegExp(p, 'i').test(text))) return false;
	const emails = text.match(EMAIL) ?? [];
	if (!emails.every(isAllowedEmail)) return false;
	const slugs = [...text.matchAll(HARNESS_PATH)].map((m) => m[1].toLowerCase());
	return slugs.every((slug) => HARNESS_OK.has(slug));
}

const allowed = new Set(ALLOWED.map(([f, t]) => `${f}\u0000${t}`));
const range = process.argv[2] ?? 'HEAD';
const commits = git(['rev-list', range]).split('\n').filter(Boolean);
const problems = new Map();
const used = new Set();

for (const sha of commits) {
	const out = git([
		'grep', '-n', '-I', '-i', '-E',
		...CONTENT_PATTERNS.flatMap((p) => ['-e', p]),
		sha, '--', '.', `:(exclude)${SELF}`, ':(exclude)package-lock.json',
	]);
	for (const line of out.split('\n').filter(Boolean)) {
		// <sha>:<path>:<lineno>:<text>
		const m = line.match(/^[0-9a-f]{40}:(.+?):(\d+):(.*)$/);
		if (!m) continue;
		const [, file, lineNo, text] = m;
		if (allowed.has(`${file}\u0000${text.trim()}`)) {
			used.add(`${file}\u0000${text.trim()}`);
			continue;
		}
		if (onlyBenign(text)) continue;
		const key = `${file}\u0000${text.trim()}`;
		if (!problems.has(key)) problems.set(key, `${sha.slice(0, 7)} ${file}:${lineNo}: ${text.trim().slice(0, 160)}`);
	}
}

for (const sha of commits) {
	const [ae, ce, body] = git(['show', '-s', '--format=%ae%x00%ce%x00%B', sha]).split('\u0000');
	for (const who of [ae, ce]) {
		if (who.trim() !== NOREPLY) problems.set(`id:${sha}:${who}`, `${sha.slice(0, 7)} 提交者身分不是 noreply：${who.trim()}`);
	}
	for (const addr of body.match(EMAIL) ?? []) {
		if (!isAllowedEmail(addr)) problems.set(`msg:${sha}:${addr}`, `${sha.slice(0, 7)} 提交訊息含電子郵件地址：${addr}`);
	}
}

const unused = [...allowed].filter((k) => !used.has(k));
if (range === 'HEAD' && unused.length > 0) {
	console.error(`check-public: 警告：允許清單有 ${unused.length} 項在歷史中沒有出現，請檢查是否過時：`);
	for (const k of unused) console.error(`  ${k.replace('\u0000', ': ').slice(0, 120)}`);
}

if (problems.size > 0) {
	console.log([...problems.values()].join('\n'));
	console.error(`check-public: ${problems.size} 個命中，掃描 ${commits.length} 個提交`);
	process.exit(1);
}
console.error(`check-public: 乾淨，掃描 ${commits.length} 個提交`);
