<script setup>
import { color } from '@/utils/window/theme'
</script>
<template>
  <div class="button-icon icon-theme" @click="color.toggle()" />
</template>
<style scoped>
.icon-theme {
  cursor: pointer;
  background-image: var(--varBook-icon-theme);
}
</style>
