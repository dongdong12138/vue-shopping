<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <div class="nearby_shopBox">
      <router-link v-for="item in nearbyList" :key="item._id" :to="`/shop/${item._id}`">
        <ShopInfo :item="item" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getRequest } from '@/utils/request'
import ShopInfo from '@/components/ShopInfo.vue'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await getRequest('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup() {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>

<style scoped lang="scss">
.nearby {
  flex: 1;
  overflow: hidden;
  display: flex; flex-direction: column;
  &_title {
    color: #333; font-size: .18rem; font-weight: normal;
    margin: .16rem 0;
  }
  &_shopBox {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
