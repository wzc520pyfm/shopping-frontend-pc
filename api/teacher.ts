import type { ITeacher } from '~/types/api'

/**
 * 获取讲师列表
 */
export const getTeacherList = async () => {
  return await useApi<ITeacher[]>('/teacher/v1/list')
}
