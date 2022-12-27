/** 全局的用户状态管理 */
import { defineStore } from 'pinia';
import { getUserInfo } from '~~/api/account';
import { message } from 'ant-design-vue';

export const useUser = defineStore('user', () => {
  const token = ref('');
  const isLogin = ref(false);
  const personalInfo = ref({
    id: null,
    username: '',
    head_img: '',
    phone: '',
    pwd: '',
    position: null,
    slogan: '',
    sex: '1',
    city: null,
    use_time: null,
    openid: null,
  })

  // 切换登录状态
  const switchLoginState = async (_token: string) => {
    token.value = _token;
    await asyncUserInfo()
  };
  // 同步登录信息
  const asyncUserInfo = async () => {
    if (token.value === '') {
      isLogin.value = false
      return
    }
    const userInfo = (await getUserInfo())
    if (userInfo.code === 0) {
      isLogin.value = true
      personalInfo.value = { ...userInfo.data }
    }
  }

  // 退出登录
  const logout = () => {
    clearInfo()
    message.success('退出登录成功！')
  }
  /**
   * 清空用户信息
   */
  const clearInfo = () => {
    token.value = ''
    isLogin.value = false
    personalInfo.value = {} as any
    // nextTick(() => navigateTo('/'))
  }

  return {
    switchLoginState,
    token,
    isLogin,
    personalInfo,
    asyncUserInfo,
    logout,
  }
}, { /** 持久化储存 */persist: true })