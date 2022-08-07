<script setup>
import { Search } from '@element-plus/icons-vue'
import { computed, reactive, ref, watch } from 'vue'

import useSearch from '@/store/search'
import { hash } from '@/utils/window/location'

const search = useSearch()
const searchContent = computed(() => search.content)
const content = ref(search.content)

watch(searchContent, (value) => {
  content.value = value
})

const startSearch = () => {
  if (content.value) hash.set(content.value)
}

const placeholders = ['工具 VARBook 变量命名', '是否为真实数据']
const placeholder = reactive({
  index: 0,
  value: placeholders[0]
})

const tips = [
  '按 Ctrl 自动对焦搜索框，Enter 自动搜索',
  '若想保留关键词，请使用空格与英文搭配',
  '每次会自动复制上一次手动复制的变量命名类型哦'
]
const tip = reactive({ index: 0, value: tips[0] })

setInterval(() => {
  if (tip.index === tips.length) {
    tip.index = 0;
  } else {
    tip.value = tips[tip.index]
    tip.index++;
  }

  setTimeout(() => {
    placeholder.index = placeholder.index === 0 ? 1 : 0
    placeholder.value = placeholders[placeholder.index]
  }, 4000)
}, 10000)

const isFocus = ref(false)

const vFocus = {
  mounted: (el, bing) => {
    const inputEl = el.querySelector('input')
    if (bing.value) inputEl.focus()
    document.onkeydown = (e) => {
      if (e.key === 'Control') inputEl.focus()
    }
  },
  updated: (el, bing) => {
    if (bing.value) el.querySelector('input').focus()
  }
}
</script>

<template>
  <div class="enter-search">
    <el-input v-model="content" v-focus="isFocus" size="large" :placeholder="placeholder.value" maxlength="15" autofocus
      @keydown.enter="startSearch">
      <template #suffix>
        <Search class="icon-search" @click="startSearch" />
      </template>
    </el-input>
    <div class="e-search-tips">tips: {{ tip.value }}</div>
  </div>
</template>

<style scoped>
.icon-search {
  width: 1.5em;
  height: 1.5em;
  margin-right: 8px;
}

.icon-search:hover {
  color: #303133;
}
</style>
