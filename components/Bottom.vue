<script lang="ts" setup>
const { type } = defineProps(['type'])
</script>

<template>
  <div flex flex-col items-center justify-center>
      <span text-12px color="#555555">—更多登录方式—</span>
      <o-auth mb-8px :type="type" />
    </div>
    <div absolute bottom-0 left-0 w-400px h-44px flexc style="background-color: rgba(77, 85, 93, 0.1)">
      <span select-none absolute z-100 color="#404040">已有账号？<span text-btn color="#5ebae2">{{type==='login'?'注册':'登录'}}</span></span>
    </div>
</template>

<style scoped>
</style>
