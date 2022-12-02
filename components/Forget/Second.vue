<script lang="ts" setup>
const { forgetModel, switchForget } = $(useModel())
const back = () => {
  switchForget()
}

// 初始值
const currentInfo = reactive({
  code: '',
  password: ''
})
// 校验规则
const rules = {
  code: [{ required: true, trigger: 'blur', message: '请输入手机验证码!' }],
  password: [{ required: true, trigger: 'blur', message: '请输入新密码!' }]
}
// 表单提交
const onFinish = () => {
  console.log('提交')
  /**
   * 设置密码接口
   */
  forgetModel.second = false
}
</script>

<template>
  <a-modal :footer="null" class="w-350px!" v-model:visible="forgetModel.second">
    <h2>重置密码</h2>
    <p text-12px mb-15px>验证码已发送</p>
    <a-form autocomplete="off" ref="formRef" :model="currentInfo" @finish="onFinish">
      <a-form-item name="code" :rules="rules.code">
        <a-input placeholder="请输入手机验证码" v-model:value="currentInfo.code"> </a-input>
      </a-form-item>
      <a-form-item name="password" :rules="rules.password">
        <a-input-password placeholder="请输入新密码" autoComplete="new-password" type="password"
          v-model:value="currentInfo.password" />
      </a-form-item>
      <a-form-item>
        <a-button block danger type="primary" html-type="submit"> 提交 </a-button>
      </a-form-item>
    </a-form>
    <a-button type="link" size="small" text-center w="100%" @click="back"> 返回上一步 </a-button>
  </a-modal>
</template>

<style lang="less" scoped>

</style>