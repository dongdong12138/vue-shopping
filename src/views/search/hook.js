import { ref } from 'vue'
import { getRequest } from '@/utils/request'

export const useHotListEffect = () => {
  const hotList = ref([])
  const getHotList = async () => {
    const result = await getRequest('/api/shop/search/hot-words')
    if (result?.errno === 0 && result?.data?.length) {
      hotList.value = result.data
    }
  }
  return { hotList, getHotList }
}
