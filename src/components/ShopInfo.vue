<template>
  <div class="shop">
    <img :src="item.imgUrl" alt="img" class="shop_img">
    <div class="shop_content">
      <div class="shop_content_title">{{ item.name }}</div>
      <div class="shop_content_tags">
        <span class="shop_content_tag">月售: {{ item.sales }}</span>
        <span class="shop_content_tag">起送: {{ item.expressLimit }}</span>
        <span class="shop_content_tag">基础运费: {{ item.expressPrice }}</span>
      </div>
      <p class="shop_content_highlight">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item']
}
</script>

<style scoped lang="scss">
.shop {
  padding-top: .1rem;
  display: flex;

  &_img {
    width: .56rem; height: .56rem;
    margin-right: .16rem;
  }

  &_content {
    flex: 1;
    padding-bottom: .1rem;
    &_title {
      color: #333; font-size: .16rem;
      line-height: .22rem;
    }
    &_tags {
      color: #333; font-size: .13rem;
      line-height: .18rem;
      margin-top: .08rem;
    }
    &_tag {
      margin-right: .16rem;
    }
    &_highlight {
      color: #E93B3B; font-size: .13rem;
      line-height: .18rem;
      margin: .08rem 0 0 0;
    }
  }
}
</style>
