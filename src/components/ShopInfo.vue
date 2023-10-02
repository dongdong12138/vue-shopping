<template>
  <div class="shop">

    <img :src="item.imgUrl" alt="img" class="shop_img">

    <div :class="['shop_content', {'shop_content-bordered': item.products}]">

      <div class="shop_content_title">{{ item.name }}</div>

      <div class="shop_content_tags">
        <span class="shop_content_tag">月售: {{ item.sales }}</span>
        <span class="shop_content_tag">起送: {{ item.expressLimit }}</span>
        <span class="shop_content_tag">基础运费: {{ item.expressPrice }}</span>
      </div>

      <p class="shop_content_highlight">{{ item.slogan }}</p>

      <div v-if="item.products" class="shop_products">
        <div v-for="product in item.products" :key="product.name" class="shop_product">
          <img :src="product.imgUrl" alt="img" class="shop_product_img" />
          <p class="shop_product_title">{{ product.name }}</p>
          <p class="shop_product_price">
            <span class="yen">&yen;</span><span class="price">{{ product.price }}</span>
            <span class="origin">&yen;{{ product.price }}</span>
          </p>
        </div>
      </div>

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
@import "../style/mixins.scss";

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
    &-bordered {
      border-bottom: .01rem solid #F1F1F1;
    }
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

  &_products {
    overflow: hidden;
    margin: .08rem .07rem 0 -.18rem;
  }
  &_product {
    width: 33.33%;
    box-sizing: border-box;
    padding-left: .18rem;
    float: left;
    &_img {
      width: 100%;
    }
    &_title {
      color: #333; font-size: .12rem;
      line-height: .17rem;
      margin: .04rem 0 0 0;
      @include ellipsis;
    }
    &_price {
      color: #999; font-size: .14rem;
      line-height: .2rem;
      margin: .02rem 0 0 0;
      @include ellipsis;
      .yen {
        color: #E93B3B; font-size: .12rem;
      }
      .price {
        color: #E93B3B;
      }
      .origin {
        font-size: .12rem;
        text-decoration: line-through;
        margin-left: .06rem;
      }
    }
  }
}
</style>
