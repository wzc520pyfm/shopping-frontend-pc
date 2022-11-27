<script lang="ts" setup>
const { forgetModel, switchForget } = $(useModel())
const back = () => {
  switchForget()
}
</script>

<template>
  <a-modal :footer="null" class="w-350px!" v-model:visible="forgetModel.second">
    <h2>重置密码</h2>
    <p text-12px mb-15px>验证码已发送</p>
    <a-form autocomplete="off" ref="formRef">
      <a-form-item name="fogSCaptcha">
        <a-input placeholder="请输入验证码"> </a-input>
      </a-form-item>
      <a-form-item>
        <a-input-password placeholder="请输入新修改的密码" autoComplete="new-password" type="password" />
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