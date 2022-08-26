<script setup>
import { computed, ref, watch } from 'vue'

import useSearch from '@/store/search'
import { getTotal } from '@/utils/api/rest/total'
import { formatNumber } from '@/utils/character/formatNumber'

const search = useSearch()

const totalCharAct = ref(0)

const updateTotal = () => {
  getTotal().then((data) => {
    totalCharAct.value = data.total
  })
}
updateTotal()

const content = computed(() => search.content)
watch(content, () => {
  setTimeout(() => {
    updateTotal()
  }, 1200)
})
</script>

<template>
  <div class="total-translate">
    <span class="tips-total">已处理：{{ formatNumber(totalCharAct) }} 个字符</span>
    <el-link href="https://uiuing.com" target="_blank" class="tips-by">
      Powered by: uiuing</el-link>
  </div>
</template>

<style scoped>
.tips-total {
  width: 165px;
  font-size: 13px;
  color: #606266;
}

.tips-by {
  margin-left: 40px;
  font-size: 14px;
  font-weight: normal;
}
</style>
