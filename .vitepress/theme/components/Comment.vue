<script setup>
import { useData } from 'vitepress'
import { onMounted, ref, watch } from 'vue'
const { isDark, site } = useData()

const comment = ref(null)

watch(
  () => isDark.value,
  (v) => {
    const message = {
      type: 'set-theme',
      theme: v ? 'github-dark' : 'github-light'
    }

    const utterances = document.querySelector('iframe').contentWindow // try event.source instead
    utterances.postMessage(message, 'https://utteranc.es')
  }
)

onMounted(() => {
  const utterances = document.createElement('script')
  utterances.type = 'text/javascript'
  utterances.async = true
  utterances.crossorigin = 'anonymous'
  utterances.src = 'https://utteranc.es/client.js'
  utterances.setAttribute('issue-term', 'pathname') // pathname | url | title | og:title 중 택 1
  utterances.setAttribute('theme', isDark.value ? 'github-dark' : 'github-light')
  utterances.setAttribute('repo', site.value.themeConfig.repo)

  comment.value.appendChild(utterances)
})
</script>

<template>
  <div ref="comment"></div>
</template>
