import { ref } from 'vue'
import { getRequest } from '@/utils/request'

/** 搜索列表 */
export const useSearchListEffect = () => {
  const searchList = ref([])
  const getSearchList = async keyword => {
    const result = await getRequest('/api/shop/search', { keyword })
    if (result?.errno === 0 && result?.data?.length) {
      searchList.value = result.data
    }
  }
  return { searchList, getSearchList }
}
