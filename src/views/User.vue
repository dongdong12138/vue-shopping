<script setup>
import Docker from '@/components/Docker.vue'
</script>

<template>
  <div class="page">
    <div class="user wrapper">
      user
    </div>
    <Docker />
  </div>
</template>

<style scoped lang="scss">
@import "../style/mixins.scss";

@include layout;

.user {
  border: 1px solid orange;
}
</style>
