import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CSS Camp',
  description: 'CSS Camp',
  lang: 'ko',
  base: '/',
  srcDir: './src',
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  themeConfig: {
    repo: 'bathorys/css-camp',
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' }
      // { text: 'Examples', link: '/markdown-examples' }
    ]
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  },
  vite: {
    base: '/',
    css: {
      devSourcemap: true
    }
  },
  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=GTM-MK549LZP' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GTM-MK549LZP');`
    ]
  ]
})
