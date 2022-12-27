<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Pagination } from 'swiper'
import { getBanner } from '~/api/banner'

const swiperData = reactive((await getBanner('home_swiper_banner')).data)
const imgSrcArr = computed(() => {
  return swiperData.img_url?.split(',')
})
</script>

<template>
  <!-- note: navigation(允许左右切换) pagination(展示页码) modules(展示的模块) autoplay(自动播放 delay:间隔, disableOnInteraction: 是否允许鼠标点击切换, pauseOnMouseEnter:是否在鼠标移入时暂时播放) loop(循环播放) -->
  <swiper navigation pagination class="banner" :modules="[Navigation, Autoplay, Pagination]"
    :autoplay="{ delay: 500, disableOnInteraction: false, pauseOnMouseEnter: true }" loop>
    <swiper-slide v-for="(item, idx) in imgSrcArr" :key="item">
      <a :href="swiperData.pc_link" target="_blank">
        <img :src="item" />
      </a>
    </swiper-slide>
  </swiper>
</template>

<style lang="less" scoped>
.banner {
  width: 840px;
  height: 400px;
  --swiper-theme-color: #4e4d53;
  --swiper-navigation-size: 30px;

  :deep(.swiper-slide),
  :deep(.swiper-slide) img {
    display: block;
    width: 840px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
}
</style>
