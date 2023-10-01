<script setup>
import Docker from '@/components/Docker.vue'
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
</script>

<template>
  <div class="page">
    <div class="home wrapper">
      <StaticPart />
      <Nearby />
    </div>
    <Docker />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/mixins.scss";

@include layout;

.home {
  overflow: hidden;
  padding: 0 .18rem .1rem .18rem;
  display: flex; flex-direction: column;
}
</style>
