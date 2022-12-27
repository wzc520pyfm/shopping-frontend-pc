import type { IBanner } from '~/types/api'

/**
 * 获取轮播图数据
 * @param location 具体轮播图
 */
export const getBanner = async (location: string) => {
  return await useApi<IBanner>('/banner/v1/list', {
    params: { location }
  })
}
