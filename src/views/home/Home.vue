<script setup>
import Docker from '@/components/Docker.vue'
</script>

<template>
  <div class="page">
    <div class="wrapper"></div>
    <Docker />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/mixins.scss";

@include layout;
</style>
