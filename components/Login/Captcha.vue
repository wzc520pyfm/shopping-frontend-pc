<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { login } from '~~/api/account';
import { sendCode } from '~~/api/notify';

let { loginModel } = $(useModel())
let { switchLoginState } = $(useUser())

// 初始值
const currentInfo = reactive({
  phone: '',
  captcha: '',
  code: ''
})
// 校验规则
const rules = {
  phone: [{ required: true, trigger: 'blur', message: '请输入手机号!' }],
  captcha: [{ required: true, trigger: 'blur', message: '请输入图形验证码!' }],
  code: [{ required: true, trigger: 'blur', message: '请输入手机验证码!' }]
}
// 表单提交
const onFinish = async () => {
  // 登录接口
  const res = await login({ phone: currentInfo.phone, code: currentInfo.code })
  if (res.code === 0) {
    switchLoginState(res.data)
    loginModel = false
    message.success('登录成功')
  }
}
// 图形验证码
let captchaSrc = $ref(`http://127.0.0.1:8081/api/notify/v1/captcha?type=login&time=${Date.now()}`)
// 更新图形验证码
const resetCaptchaSrc = () => {
  if (captchaSrc.includes('&time')) {
    captchaSrc = captchaSrc.replace(/&time=[0-9]*/, '&time=' + Date.now())
  }
}

// 验证码倒计时
let countDown = $ref(60)
let timer = $ref(null)
let isDisable = $ref(false)
const countDownFun = () => {
  timer = setInterval(() => {
    countDown--
    if (countDown <= 0) {
      clearInterval(timer)
      countDown = 60
      isDisable = false
    }
  }, 1000)
}

// 获取验证码
const formRef = ref(null)
const getCode = () => {
  // antd表单验证, 只有当phone有值时才会执行then, 否则不会执行then且触发表单校验
  formRef.value.validate('phone').then(async () => {
    if (!currentInfo.captcha) {
      message.warn('请输入图形验证码')
      return
    }
    isDisable = true
    // 短信验证码发送接口
    const res = await sendCode({ phone: currentInfo.phone, captcha: currentInfo.captcha, type: 'login' })
    if (res.code === 0) {
      countDownFun()
      message.success('发送验证码成功')
    } else {
      isDisable = false
      resetCaptchaSrc()
    }

  })
}

</script>

<template>
  <div>
    <a-form autocomplete="off" ref="formRef" :model="currentInfo" @finish="onFinish">
      <a-form-item name="phone" :rules="rules.phone">
        <a-input placeholder="请输入手机号" v-model:value="currentInfo.phone" />
      </a-form-item>

      <!-- 图形验证码  -->
      <a-form-item name="captcha" :rules="rules.captcha">
        <div flex>
          <a-input placeholder="请输入图形验证码" autoComplete="false" v-model:value="currentInfo.captcha">
            <template #suffix>
              <reload-outlined mr-3px cursor-pointer @click="resetCaptchaSrc" />
            </template>
          </a-input>
          <div flex justify-center items-center>
            <img w-80px h-30px :src="captchaSrc" />
          </div>
        </div>
      </a-form-item>

      <!-- 手机验证码 -->
      <a-form-item name="code" :rules="rules.code">
        <a-input placeholder="请输入验证码" autoComplete="false" v-model:value="currentInfo.code">
          <template #suffix>
            <div>
              <a-button type="link" size="small" p-0 :disabled="isDisable" @click="getCode">
                {{ isDisable ? `${countDown}秒后重发` : '获取验证码' }}
              </a-button>
            </div>
          </template>
        </a-input>
      </a-form-item>

      <a-form-item>
        <div flex mt-2px text-10px>
          <p>登录即同意用户协议</p>
          <a ml-4px color="#169bd5" target="__blank">《隐私政策》</a>
        </div>
      </a-form-item>

      <a-form-item>
        <button type="submit" bg="#4d555d" class="rounded-full btn center-text-36 w-300px text-white">
          立即登录
        </button>
      </a-form-item>
    </a-form>
    <Bottom type='login' />
  </div>
</template>

<style lang="less" scoped>

</style>
