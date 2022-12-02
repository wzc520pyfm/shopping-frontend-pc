<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { sendCode } from '~~/api/notify';

const { forgetModel, switchForget } = $(useModel())
// 初始值
const currentInfo = reactive({
  phone: '',
  captcha: ''
})
// 校验规则
const rules = {
  phone: [{ required: true, trigger: 'blur', message: '请输入手机号!' }],
  captcha: [{ required: true, trigger: 'blur', message: '请输入图形验证码!' }]
}
// 表单提交
const onFinish = async () => {
  // 短信验证码发送接口
  const res = await sendCode({ phone: currentInfo.phone, captcha: currentInfo.captcha, type: 'change' })
  if (res.code === 0) {
    forgetModel.phoneCache = currentInfo.phone
    switchForget()
    message.success(res.msg)
  }
}

// 图形验证码
let captchaSrc = $ref(`http://127.0.0.1:8081/api/notify/v1/captcha?type=change&time=${Date.now()}`)
// 更新图形验证码
const resetCaptchaSrc = () => {
  if (captchaSrc.includes('&time')) {
    captchaSrc = captchaSrc.replace(/&time=[0-9]*/, '&time=' + Date.now())
  }
}
</script>

<template>
  <a-modal :footer="null" class="w-350px!" ref="formRef" v-model:visible="forgetModel.first">
    <h2 mb-6>修改密码</h2>
    <a-form autocomplete="off" ref="formRef" :model="currentInfo" @finish="onFinish">
      <a-form-item name="phone" :rules="rules.phone">
        <a-input placeholder="请输入手机号" v-model:value="currentInfo.phone"> </a-input>
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

      <a-form-item>
        <a-button block bg="#f38e48!" b="#f38e48!" rounded-5px w-140px type="primary" html-type="submit">
          下一步
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style lang="less" scoped>

</style>