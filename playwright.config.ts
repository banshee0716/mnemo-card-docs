import { defineConfig, devices } from '@playwright/test';

const port = 4321;
const base = '/mnemo-card-docs/';

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: 0,
	reporter: process.env.CI ? 'github' : 'list',
	use: {
		baseURL: `http://localhost:${port}${base}`,
	},
	projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
	webServer: {
		// --ignore-lock：Astro 偵測到 AI 代理時會自動把 preview 放到背景，Playwright 需要前景行程。
		command: `npm run build && npm run preview -- --port ${port} --ignore-lock`,
		url: `http://localhost:${port}${base}`,
		reuseExistingServer: !process.env.CI,
		timeout: 180_000,
	},
});
