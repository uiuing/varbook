<script setup>
import ButtonGithub from '@/components/Button/ButtonGithub.vue'
import ButtonSponsorship from '@/components/Button/ButtonSponsorship.vue'
import ButtonTheme from '@/components/Button/ButtonTheme.vue'
import EnterSearch from '@/components/Enter/EnterSearch.vue'
import FixBanner from '@/components/Fix/FixBanner.vue'
import FixTotal from '@/components/Fix/FixTotal.vue'
import MonitorNamed from '@/components/Monitor/MonitorNamed.vue'
</script>

<template>
  <div class="wrapper">
    <div class="tips">
      <button-sponsorship />
      <button-theme />
      <button-github />
    </div>
    <fix-banner />
    <enter-search />
    <monitor-named />
  </div>
  <fix-total />
</template>

<style>
@import '@/assets/css/style.css';
</style>
