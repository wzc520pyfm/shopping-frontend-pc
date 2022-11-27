<script lang="ts" setup>
const { changeToForget } = $(useModel())
</script>

<template>
  <div>
    <a-form autocomplete="off" ref="formRef">
      <a-form-item name="account">
        <a-input placeholder="请输入账号（手机号或邮箱）" />
      </a-form-item>
      <a-form-item name="password">
        <a-input-password type="password" placeholder="请输入密码" autoComplete="false" />
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