<script setup>
import Docker from '@/components/Docker.vue'
import StaticPart from './StaticPart.vue'
</script>

<template>
  <div class="page">
    <div class="home wrapper">
      <StaticPart />
    </div>
    <Docker />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/mixins.scss";

@include layout;

.home {
  border: 1px solid red;
  padding: 0 .18rem .1rem .18rem;
}
</style>
