<script lang="ts" setup>
const { changeToForget } = $(useModel())
// 初始值
const currentInfo = reactive({
  phone: '',
  password: ''
})
// 校验规则
const rules = {
  phone: [{ required: true, trigger: 'blur', message: '请输入手机号!' }],
  password: [{ required: true, trigger: 'blur', message: '请输入密码!' }]
}
// 表单提交
const onFinish = () => {
  console.log('登录')
  /**
   * 登录接口
   */
}
</script>

<template>
  <div>
    <a-form autocomplete="off" ref="formRef" :model="currentInfo" @finish="onFinish">
      <a-form-item name="phone" :rules="rules.phone">
        <a-input placeholder="请输入手机号" v-model:value="currentInfo.phone" />
      </a-form-item>
      <a-form-item name="password" :rules="rules.password">
        <a-input-password type="password" placeholder="请输入密码" autoComplete="false"
          v-model:value="currentInfo.password" />
      </a-form-item>
      <div flexb>
        <a-form-item>
          <div flex mt-2px text-10px>
            <p>登录即同意用户协议</p>
            <a ml-4px color="#169bd5" target="__blank">《隐私政策》</a>
          </div>
        </a-form-item>

        <a-form-item>
          <span cursor-pointer text-center text-12px color="#555555" @click="changeToForget">忘记密码</span>
        </a-form-item>
      </div>
      <a-form-item>
        <button type="submit" bg="#4d555d" class="rounded-full btn center-text-36 w-300px text-white">
          立即登录
        </button>
      </a-form-item>
    </a-form>
    <Bottom type='login' />
  </div>
</template>