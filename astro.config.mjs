// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// 換自訂網域時只改 site 與 base 兩處（spec R2）。
export default defineConfig({
	site: 'https://banshee0716.github.io',
	base: '/mnemo-card-docs',
	integrations: [
		starlight({
			title: 'Mnemo-Card 文件',
			locales: {
				root: { label: '繁體中文', lang: 'zh-TW' },
			},
			lastUpdated: false,
			sidebar: [],
		}),
	],
});
