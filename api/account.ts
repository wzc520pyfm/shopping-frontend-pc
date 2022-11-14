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
    body: { code: options.code, phone: options.phone },
  });
};

