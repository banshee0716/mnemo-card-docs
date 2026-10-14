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
			logo: { src: './src/assets/logo.svg', replacesTitle: false },
			locales: {
				root: { label: '繁體中文', lang: 'zh-TW' },
			},
			customCss: [
				'@fontsource-variable/noto-sans-tc',
				'@fontsource-variable/noto-serif-tc',
				'./src/styles/custom.css',
			],
			lastUpdated: false,
			sidebar: [
				{
					label: 'Mnemo-Card',
					items: [
						{ label: '開啟 Mnemo-Card', link: 'https://mnemo-card.vercel.app/app' },
						{ label: '產品首頁', link: 'https://mnemo-card.vercel.app/' },
					],
				},
			],
		}),
	],
});
