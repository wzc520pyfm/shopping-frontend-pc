import { IUserInfo } from "~~/types/api";

/**
 * 注册接口
 * @param options 
 *  - code: 验证码
 *  - phone: 手机号
 * @returns Promise
 */
export const register = async (options: { code: string, phone: string }) => {
  return await useApi<null>('/user/v1/register', {
    method: 'post',
    body: options,
  });
};
/**
 * 登录接口
 * @param options 
 *  - code: 验证码
 *  - phone: 手机号
 *  - password: 密码
 */
export const login = async (options: { phone: string, code?: string, password?: string }) => {
  return await useApi<string>('/user/v1/login', {
    method: 'post',
    body: options,
  });
};
/**
 * 修改密码接口
 * @param options 
 *  - code: 验证码
 *  - phone: 手机号
 *  - password: 密码
 */
export const forget = async (options: { phone: string, code: string, password: string }) => {
  return await useApi<null>('/user/v1/forget', {
    method: 'post',
    body: options,
  });
};

/**
 * 获取用户信息
 */
 export const getUserInfo = async function () {
  return await useApi<IUserInfo>('/user/v1/detail')
}
