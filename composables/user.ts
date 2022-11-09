/** 全局的用户状态管理 */
import { defineStore } from 'pinia';

export const useUser = defineStore('user', () => {
  let count = ref(1);
  const add = () => { count.value++; }
  const multiplyCount = computed(() => count.value * 2);

  return {
    count,
    add,
    multiplyCount,
  };
}, { /** 持久化储存 */persist: true })