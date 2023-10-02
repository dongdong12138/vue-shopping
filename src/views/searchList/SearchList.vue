<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSearchListEffect } from './hook'
import ShInput from '@/components/ShInput.vue'
import ShopInfo from '@/components/ShopInfo.vue'

const route = useRoute()
const router = useRouter()

const data = reactive({
  searchValue: ''
})

const keyword = ref(route.query.keyword || '')
const { searchList, getSearchList } = useSearchListEffect()
getSearchList(keyword.value)
</script>

<template>
  <div class="searchList">

    <div class="searchList_input">
      <i class="searchList_back iconfont" @click="router.back()">&#xe6f2;</i>
      <ShInput v-model="data.searchValue" size="small" pre-icon="&#xe62d;" placeholder="请输入商品名称" @change="getSearchList(data.searchValue)" />
    </div>

    <router-link v-for="item in searchList" :key="item._id" :to="`/shop/${item._id}`">
      <ShopInfo :item="item" />
    </router-link>

  </div>
</template>

<style scoped lang="scss">
.searchList {
  padding: 0 .18rem;
  &_input {
    line-height: .32rem;
    margin: .14rem 0 .04rem 0;
    display: flex;
  }
  &_back {
    color: #B6B6B6; font-size: .24rem;
    width: .3rem;
  }
}
</style>
