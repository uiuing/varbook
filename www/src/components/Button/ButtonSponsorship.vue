<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
<template>
  <el-link type="primary" @click="isOpen = true"> 请作者喝咖啡 ☕️ </el-link>
  <el-dialog v-if="isOpen" v-model="isOpen" width="200px" title="☕️">
    <img
      src="../../assets/images/sponsoredByAlipay.png"
      alt="支付宝"
      draggable="false"
    />
  </el-dialog>
</template>

<style scoped>
img {
  width: 100%;
  margin: -40px 0 -20px;
}
</style>
