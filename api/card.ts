import type { ICard } from '~/types/api'

/**
 * 获取卡片列表
 */
export const getCardList = async () => {
  return await useApi<ICard>('/product/v1/card')
}
