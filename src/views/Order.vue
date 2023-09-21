<script setup>
import Docker from '@/components/Docker.vue'
</script>

<template>
  <div class="page">
    <div class="order wrapper">
      order
    </div>
    <Docker />
  </div>
</template>

<style scoped lang="scss">
@import "../style/mixins.scss";

@include layout;

.order {
  border: 1px solid blue;
}
</style>
