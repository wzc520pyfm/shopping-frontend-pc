<script lang="ts" setup>
import Banner from './index/Banner.vue'
import Classify from './index/Classify.vue'
import UserInformation from './index/UserInformation.vue'

useHead({
  title: '首页'
})
</script>

<template>
  <div style="width: 1200px; min-width: 1200px">
    <div class="main">
      <!-- 分类 -->
      <div class="menu">
        <Classify />
      </div>
      <!-- 轮播图 -->
      <div class="swiper">
        <Banner />
      </div>
      <!-- 个人信息 -->
      <div class="user">
        <UserInformation />
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
  .main {
    display: flex;
    height: 400px;
    .swiper {
      flex: 5;
      border-radius: 10px;
    }
  }

  .card-container {
    margin-bottom: 20px;
  }

  .two-card-container {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
  }
</style>
