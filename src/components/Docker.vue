<script setup>
const dockerList = [
  { icon: '&#xe6f3;', text: '首页', name: 'home' },
  { icon: '&#xe7e5;', text: '购物车', name: 'cart' },
  { icon: '&#xe61e;', text: '订单', name: 'order' },
  { icon: '&#xe660;', text: '我的', name: 'user' }
]
</script>

<template>
  <div class="docker">
    <router-link
      v-for="(docker, index) in dockerList" :key="index"
      :to="{ name: docker.name }"
      active-class="docker_item-active" class="docker_item"
    >
      <span v-html="docker.icon" class="iconfont"></span>
      <span class="docker_title">{{ docker.text }}</span>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.docker {
  box-sizing: border-box;
  height: .5rem;
  border-top: .01rem solid #F1F1F1;
  display: flex;
  padding: .06rem .18rem;

  &_item {
    color: #333;
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    .iconfont {
      font-size: .18rem;
      margin-bottom: .02rem;
    }
    &-active { color: #1FA4FC; }
  }

  &_title {
    font-size: .2rem;
    transform: scale(.5); transform-origin: center top;
  }
}
</style>
