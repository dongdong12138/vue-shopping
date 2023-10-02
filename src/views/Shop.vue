<template>
  <div>Shop 页面</div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'Shop',
  setup() {
    const route = useRoute()
    const { id: shopId } = route.params
    console.log('shopId:', shopId)
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
