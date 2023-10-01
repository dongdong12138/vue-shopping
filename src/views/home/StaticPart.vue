<script setup>
import ShInput from '@/components/ShInput.vue'

const iconsList = [
  { imgName: '超市', desc: '超市便利' }, { imgName: '菜市场', desc: '菜市场' }, { imgName: '水果店', desc: '水果店' },
  { imgName: '鲜花', desc: '鲜花绿植' }, { imgName: '医药健康', desc: '医药健康' }, { imgName: '家居', desc: '家居时尚' },
  { imgName: '蛋糕', desc: '烘培蛋糕' }, { imgName: '签到', desc: '签到' }, { imgName: '大牌免运', desc: '大牌免运' },
  { imgName: '红包', desc: '红包套餐' },
]

const handleSearch = () => {
  // TODO: 跳转到搜索页面
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

  <img src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="banner" class="banner_img" />

  <div class="icons">
    <div v-for="item in iconsList" :key="item.desc" class="icons_item">
      <img :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" alt="img" class="icons_item_img" />
      <p class="icons_item_desc">{{item.desc}}</p>
    </div>
  </div>

  <div class="gap"></div>

</template>

<style scoped lang="scss">
@import "../../style/mixins.scss";

.address {
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
  margin-top: .17rem;
  position: relative;
  &_mask {
    position: absolute; left: 0; top: 0; right: 0; bottom: 0;
  }
}

.banner_img {
  margin-top: 12px;
  display: block;
}

.icons {
  margin-top: .16rem;
  display: flex; flex-wrap: wrap;
  &_item {
    width: 20%;
    &_img {
      display: block;
      width: .4rem; height: .4rem;
      margin: 0 auto;
    }
    &_desc {
      color: #333;
      text-align: center;
      margin: .06rem 0 .16rem 0;
    }
  }
}

.gap {
  height: .1rem;
  background: #F1F1F1;
  margin: 0 -.18rem;
}
</style>
