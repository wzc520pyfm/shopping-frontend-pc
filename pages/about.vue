<template>
  <div class="hello">
    关于
    <!-- <div @click="navigateTo('/?data=我是关于的数据')">跳转去首页</div> -->
    <div @click="navigateTo({
      path: '/',
      query: {
        data: '我是关于的数据'
      }
    })">跳转去首页</div>
    <NuxtChild />
  </div>
</template>

<script setup>
const data = useRoute().query.data
console.log('路由参数', data)
</script>

<style scoped>

</style>
