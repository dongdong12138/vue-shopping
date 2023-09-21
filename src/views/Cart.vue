<script setup>
import Docker from '@/components/Docker.vue'
</script>

<template>
  <div class="page">
    <div class="cart wrapper">
      cart
    </div>
    <Docker />
  </div>
</template>

<style scoped lang="scss">
@import "../style/mixins.scss";

@include layout;

.cart {
  border: 1px solid green;
}
</style>
