import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://eefunction-doc.brbrsoft.com',
	base: '/',
	server: {
		host: true,
		port: 4321,
	},
	vite: {
		server: {
			watch: {
				usePolling: true,
				interval: 1000,
			},
		},
	},
	integrations: [
		starlight({
			title: 'eeFunction Documentation',
			customCss: [
				'./src/styles/table.css',
				'./src/styles/brand.css',
			],
			components: {
				SocialIcons: './src/components/ProductLinks.astro',
				Footer: './src/components/BrandFooter.astro',
			},
			logo: {
				src: './src/assets/icon_eefunction.png',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ko: {
					label: '한국어',
					lang: 'ko',
				},
			},
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#071a2b',
					},
				},
			],
			lastUpdated: true,
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/tobony/eefunction-doc',
				},
			],
			sidebar: [
				{
					label: 'User Guide',
					translations: { ko: '사용자 가이드' },
					items: [
						{ label: 'Getting Started', link: '/user-guide/getting-started/', translations: { ko: '시작하기' } },
						{ label: 'Installation', link: '/user-guide/installation/', translations: { ko: '설치' } },
						{ label: 'Release Notes', link: '/user-guide/developer-blog/', translations: { ko: '릴리스 노트' } },
						{ label: 'Support', link: '/user-guide/support-system/', translations: { ko: '지원 안내' } },
						{ label: 'Privacy Policy', link: '/user-guide/privacy-policy/', translations: { ko: '개인정보 처리방침' } },
					],
				},
				{
					label: 'Functions',
					translations: { ko: '함수' },
					items: [
						{
							label: 'General Functions',
							link: '/function/general-function/',
							translations: { ko: '일반 함수' },
							badge: { text: 'Free', variant: 'success' },
						},
						{
							label: 'Engineering Functions',
							link: '/function/engineering-function/',
							translations: { ko: '공학 함수' },
							badge: { text: 'Free + Pro', variant: 'note' },
						},
					],
				},
				{
					label: 'Reference',
					translations: { ko: '참고자료' },
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
