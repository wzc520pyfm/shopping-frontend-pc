<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { getWechat, watchScan } from '~~/api/wechat';

let { wechatModel, registerModel } = $(useModel())
let { switchLoginState } = $(useUser())

let lock = $ref(true) // 防抖
let qrcodeUrl = $ref(null)
let timer = $ref(null)

// 二维码地址接口请求
const getQrcode = async () => {
  if (lock) {
    lock = false
    const res = await getWechat()
    if (res.code === 0) {
      qrcodeUrl = res.data.qrcodeUrl
      lock = true
      // 轮询请求是否扫码接口
      timer = setInterval(() => watchScanDate(res.data.ticket), 3000)
    }
  }
}
await getQrcode()

// 轮询接口请求
const watchScanDate = async (ticket: string) => {
  const res = await watchScan(ticket)
  if (res.code === 0) {
    wechatModel = false
    registerModel.base = false
    switchLoginState(res.data)
    clearInterval(timer)
    message.success('登录成功')
  }
  // 如果手动关闭二维码组件, 清除定时器
  watch(() => wechatModel, (val) => !val && clearInterval(timer))
}

</script>

<template>
  <div flexc flex-col mt-50px>
    <img :src="qrcodeUrl" w-200px h-200px />
    <div flexc mt-26px>
      <img src="/images/wechat_icon.png" cursor-pointer mr-2px w-34px h-34px />
      <span text-18px color="#555555">使用微信扫一扫登录</span>
    </div>
  </div>
</template>


<style lang="less" scoped>
</style>
