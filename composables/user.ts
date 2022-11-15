/** 全局的用户状态管理 */
import { defineStore } from 'pinia';

export const useUser = defineStore('user', () => {
  const token = ref('');

  // 切换登录状态
  const switchLoginState = (_token: string) => {
    token.value = _token;
    console.log(token);
  };

  return {
    switchLoginState,
    token,
  }
}, { /** 持久化储存 */persist: true })