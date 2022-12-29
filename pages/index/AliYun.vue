<script lang="ts" setup>
import { getBanner } from '~/api/banner'
// 阿里云海报接口请求
const data = (await getBanner('aliyun_ecs')).data
</script>

<template>
  <div class="advertisement-bg">
    <!-- 活动轮播图 -->
    <ListRightBanner class="advertisement" />
    <!-- 阿里云海报 -->
    <div wfull h-505px class="shadow-adv" mt-14px>
      <a :href="data.pc_link" target="_blank">
        <img wfull hfull cursor-pointer :src="data.img_url" :alt="data.name" />
      </a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.advertisement-bg {
  width: 284px;
  height: 656px;
  padding-top: 5px;
}

.shadow-adv {
  box-shadow: 0px 0px 10px 0px #d5d5d5;
  border-radius: 10px;

  img {
    border-radius: 10px;
  }
}
</style>