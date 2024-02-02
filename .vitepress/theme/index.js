// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Comment from './components/Comment.vue'
import DefaultTheme from 'vitepress/theme'
import './assets/scss/styles.scss'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Comment', Comment)
  }
}
