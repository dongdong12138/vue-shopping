<script setup>

</script>

<template>
  <button class="shButton"><slot /></button>
</template>

<style scoped lang="scss">
.shButton {
  color: #FFF; font-size: .16rem;
  width: 100%;
  background: #0091FF;
  border-radius: .04rem;
  box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, .32);
  text-align: center; line-height: .48rem;
}
</style>
