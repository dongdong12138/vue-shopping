<script setup>
import ShInput from '@/components/ShInput.vue'

const handleSearch = () => {
  console.log('11111111111')
}
</script>

<template>

  <div class="address">
    <i class="iconfont">&#xe619;</i>
    <span class="address_text">北京理工大学国防科技园2号楼10层</span>
    <i class="iconfont">&#xe60b;</i>
  </div>

  <div class="search">
    <ShInput size="small" pre-icon="&#xe62d;" disabled placeholder="山姆会员商店优惠商品" />
    <div class="search_mask" @click.capture="handleSearch"></div>
  </div>

</template>

<style scoped lang="scss">
@import "../../style/mixins.scss";

.address {
  border: 1px solid red;
  color: #333; font-size: .16rem;
  line-height: .22rem;
  margin-top: .17rem;
  display: flex; align-items: center;
  .iconfont { font-size: .2rem; }
  &_text {
    margin: 0 auto 0 .08rem;
    @include ellipsis;
  }
}

.search {
  border: 1px solid red;
  margin-top: .17rem;
  position: relative;
  &_mask {
    position: absolute; left: 0; top: 0; right: 0; bottom: 0;
  }
}
</style>
