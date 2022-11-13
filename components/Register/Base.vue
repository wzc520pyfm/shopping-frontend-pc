<script lang="ts" setup>
const { changeToFinish } = $(useModel())

</script>

<template>
  <div mt-20px>
    <a-form autocomplete="off" ref="formRef">
      <a-form-item name="reg">
        <a-input placeholder="请输入手机号" />
      </a-form-item>

      <!-- 图形验证码  -->
      <a-form-item name="regPCaptcha">
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

      <!-- 手机验证码  -->
      <a-form-item name="regCaptcha">
        <a-input placeholder="请输入手机号或邮箱验证码">
          <template #suffix>
            <div>
              <a-button type="link" size="small" p0>
                获取验证码
              </a-button>
            </div>
          </template>
        </a-input>
      </a-form-item>

      <!-- 同意协议  -->
      <div flex items-center justify-between>
        <a-form-item name="accept">
          <a-checkbox>
            <div flexc items-center text-13px>
              <div>同意小滴课堂</div>
              <a size="small" type="link" text-13px p0 m0 href="/" color="#169bd5">《隐私策略》</a>
            </div>
          </a-checkbox>
        </a-form-item>
      </div>

      <a-form-item>
        <button type="submit" btn center-text-36 w-300px rounded-full bg="#4d555d" text-white cursor-pointer
          @click="changeToFinish">
          立即注册
        </button>
      </a-form-item>
    </a-form>

    <!-- 微信注册登录方式 -->
    <div flex flex-col items-center justify-center>
      <span color="#555555">—更多登录方式—</span>
      <o-auth mb-8px />
    </div>
    <div absolute bottom-0 left-0 w-400px h-44px flexc style="background-color: rgba(77, 85, 93, 0.1)">
      <span select-none absolute z-100 color="#404040">已有账号？<span text-btn color="#5ebae2">登录</span></span>
    </div>
  </div>
</template>

<style lang="less" scoped>
:deep(.ant-form-item) {
  margin-bottom: 20px;
}
</style>
