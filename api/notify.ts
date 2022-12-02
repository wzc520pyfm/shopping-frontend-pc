/**
 * 发送手机短信验证码
 * @param options
 *  - phone 手机号
 *  - captcha 图形验证码
 *  - type 场景
 * @returns Promise
 */
export const sendCode = async (options: {
  phone: string, 
  captcha: string, 
  type: 'register' | 'login' | 'change'
}) => {
  return await useApi<null>('/notify/v1/send_code', {
    method: 'post',
    body: options,
  });
};

