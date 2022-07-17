<script setup>
import bananaBase64 from '@/utils/data/bannerBase64'
</script>

<template>
  <a
    href="https://varbook.uiuing.com"
    style="display: contents; cursor: auto"
    target="_self"
    ><img :src="bananaBase64" class="banner" ondragstart="return false;"
  /></a>
</template>
