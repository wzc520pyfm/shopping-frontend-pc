/**
 * @params getWechat 获取微信二维码接口
 * @params watchScan 轮询接口监听用户是否扫码
 */
import type { IWechat } from "~~/types/api";


export const getWechat = async () => {
  return await useApi<IWechat>('/wx_login/v1/login');
};

export const watchScan = async (ticket: string) => {
  return await useApi<null>('/wx_login/v1/check_scan', {
    params: { ticket }
  });
}
