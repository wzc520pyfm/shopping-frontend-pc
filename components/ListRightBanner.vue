<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import { getBanner } from '~/api/banner'

// 获取活动轮播图接口请求
const bannerData = $ref((await getBanner('list_right_banner')).data)

// 转换成轮播图图片数组
const bannerImgSrcs = $computed(() => {
  return bannerData.img_url.split(',')
})

// 轮播图图片跳转地址
const bannerImgHrefs = $computed(() => {
  return bannerData.pc_link.split(',')
})
</script>

<template>
  <div class="side-swiper">
    <swiper :autoplay="{ delay: 2500, disableOnInteraction: false }" class="banner-student" :modules="[Autoplay]" loop>
      <swiper-slide v-for="(item, idx) in bannerImgSrcs" :key="item">
        <a target="__blank" :href="bannerImgHrefs[idx]">
          <img :src="item" />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="less" scoped>
.side-swiper {
  --swiper-navigation-size: 12px;
  --swiper-theme-color: #4e4d53;

  .swiper {
    border-radius: 10px;
  }

  :deep(.swiper-slide) img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
