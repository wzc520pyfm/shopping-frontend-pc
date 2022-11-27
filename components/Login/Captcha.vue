<script lang="ts" setup>

</script>

<template>
  <div>
    <a-form autocomplete="off" ref="formRef">
      <a-form-item name="captchaAccount">
        <a-input placeholder="请输入账号（手机号或邮箱）" />
      </a-form-item>

      <!-- 图形验证码  -->
      <a-form-item name="loginCaptcha">
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

      <!-- 手机验证码 -->
      <a-form-item name="captcha">
        <a-input placeholder="请输入验证码" autoComplete="false">
          <template #suffix>
            <div>
              <a-button type="link" size="small" p-0>
                获取验证码
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
