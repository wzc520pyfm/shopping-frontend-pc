/**
 * 接口返回基本数据类型
 */
export interface IApiBase<T> {
  code: number;
  msg: string;
  data: T;
}
/**
 * 微信二维码接口返回参数
 */
export interface IWechat {
  qrcodeUrl: string;
  ticket:    string;
}
/**
 * 课程分类接口返回参数
 */
 export interface ICategoryList {
  id:number;
  name:string;
  pid:number;
  gmt_create:string;
  gmt_modified:string;
  level:null;
  subCategoryList?: ICategoryList[];
}


