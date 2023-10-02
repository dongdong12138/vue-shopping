<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import ShInput from '@/components/ShInput.vue'
import { useHotListEffect } from './hook'

const router = useRouter()

const data = reactive({
  searchValue: '',
  history: JSON.parse(localStorage.getItem('history')) || []
})

const handleSearchChange = value => {
  if (!value) return
  const hasValue = data.history.find(item => item === value)
  if (!hasValue) {
    data.history.push(value)
    localStorage.setItem('history', JSON.stringify(data.history))
  }
  router.push(`/searchList?keyword=${data.searchValue}`)
}

const handleCancel = () => {
  router.back()
}

const handleClearHistory = () => {
  data.history = []
  localStorage.setItem('history', JSON.stringify(data.history))
}

const goToSearchList = value => {
  router.push(`/searchList?keyword=${value}`)
}

const { hotList, getHotList } = useHotListEffect()
getHotList()
</script>

<template>
  <div class="search">

    <div class="search_input">
      <ShInput v-model="data.searchValue" size="small" pre-icon="&#xe62d;" placeholder="尖椒肉丝" @change="handleSearchChange" />
      <span class="search_input_cancel" @click="handleCancel">取消</span>
    </div>

    <div class="search_box">
      <h4 class="search_box_title">
        搜索历史
        <span class="search_box_clear" @click="handleClearHistory">清除搜索历史</span>
      </h4>
      <ul class="search_box_list">
        <li v-for="item in data.history" :key="item" @click="goToSearchList(item)">{{ item }}</li>
      </ul>
    </div>

    <div class="search_box">
      <h4 class="search_box_title">热门搜索</h4>
      <ul class="search_box_list">
        <li v-for="item in hotList" :key="item" @click="goToSearchList(item)">{{ item }}</li>
      </ul>
    </div>

  </div>
</template>

<style scoped lang="scss">
.search {
  padding: 0 .18rem;
}

.search_input {
  color: #333;
  line-height: .32rem;
  margin-top: .16rem;
  display: flex; align-items: center;

  &_cancel {
    font-size: .16rem;
    white-space: nowrap;
    margin-left: .12rem;
  }
}

.search_box {
  margin-top: .24rem;

  &_title {
    color: #333; font-size: .16rem; font-weight: normal;
    line-height: .22rem;
    margin: 0;
    display: flex; justify-content: space-between;
  }

  &_clear {
    font-size: .14rem;
  }

  &_list {
    padding: 0; margin: 0 0 0 -.1rem;
    > li {
      display: inline-block;
      color: #666; font-size: .14rem;
      background: #F5F5F5; border-radius: .02rem;
      line-height: .32rem;
      padding: 0 .1rem; margin-left: .1rem; margin-top: .12rem;
    }
  }
}
</style>
