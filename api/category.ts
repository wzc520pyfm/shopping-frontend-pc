/**
 * 课程分类接口
 */
import type { ICategoryList } from '~/types/api'

export const getCategoryList = async () => {
  return await useApi<ICategoryList[]>('/product/v1/category');
}
