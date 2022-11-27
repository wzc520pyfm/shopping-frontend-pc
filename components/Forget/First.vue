<script lang="ts" setup>
const { forgetModel, switchForget } = $(useModel())
const next = () => {
  switchForget()
}
</script>

<template>
  <a-modal :footer="null" class="w-350px!" ref="formRef" v-model:visible="forgetModel.first">
    <h2 mb-6>修改密码</h2>
    <a-form autocomplete="off" ref="formRef">
      <a-form-item name="fogAccount">
        <a-input placeholder="请输入手机号或邮箱"> </a-input>
      </a-form-item>

      <!-- 图形验证码  -->
      <a-form-item name="fogCaptcha">
        <div flex>
          <a-input placeholder="请输入图形验证码" autoComplete="false">
            <template #suffix>
              <reload-outlined mr-3px cursor-pointer />
            </template>
          </a-input>
          <div flex justify-center items-center>
            <img w-80px h-30px />
          </div>
        </div>
      </a-form-item>

      <a-form-item>
        <a-button block bg="#f38e48!" b="#f38e48!" rounded-5px w-140px type="primary" html-type="submit" @click="next">
          下一步
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style lang="less" scoped>

</style>