<script lang="ts" setup>
const { registerModel, loginModel } = $(useModel())
</script>

<template>
  <div flexc flex-col p2>
    <img mt-10 mb-1 src="/images/new.png" w-140px h-176px cursor-pointer @click="registerModel.base = true" />
    <span text="center white" bg="#ff602a" leading-10px @click="loginModel = true"
      class="cursor-pointer rounded-71px w-130px h-24px text-12px p2">
      登录 / 注册
    </span>
  </div>
</template>

<style lang="less" scoped>

</style>