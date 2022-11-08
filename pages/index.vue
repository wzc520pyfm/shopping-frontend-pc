<template>
  <div class="home">
    首页
    <Banner />
    <BannerChild />
    <nuxt-link to="/about?data='我是首页的数据'">跳转去关于页面</nuxt-link>
    <br />
    <nuxt-link to="/about/personal">跳转去个人信息</nuxt-link>
    <br />
    <div>请求来的数据:{{ data }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref('')

const resData = await useFetch('http://127.0.0.1:8081/test', {
  method: 'GET',
  params: { id: 1 }
})
data.value = resData.data

</script>

<style scoped>
.home {
  background-color: aqua;
}
</style>
