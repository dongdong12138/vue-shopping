<template>

  <div class="address">
    <i class="iconfont">&#xe619;</i>
    <span class="address_text">北京理工大学国防科技园2号楼10层</span>
    <i class="iconfont">&#xe60b;</i>
  </div>

</template>

<script>
export default {
  name: 'StaticPart'
}
</script>

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
</style>
