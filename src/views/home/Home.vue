<script setup>
import Docker from '@/components/Docker.vue'
</script>

<template>
  <div class="page">
    <div class="home wrapper">
      home
    </div>
    <Docker />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/mixins.scss";

@include layout;

.home {
  border: 1px solid red;
}
</style>
