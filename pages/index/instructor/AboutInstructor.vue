<script lang="ts" setup>
import Instructor from './Instructor.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import { getTeacherList } from '~/api/teacher'

const data = $ref((await getTeacherList()).data)
</script>

<template>
  <div class="about-instructor" w-full>
    <div flex items-center>
      <div flex items-end>
        <img src="/images/svg/jsjs.svg" h-29px w-29px mr-5px />
        <h2 text-16px text="#4f555d">讲师介绍</h2>
      </div>
    </div>

    <div h-350px w-1200px mt-8px>
    <!-- spaceBetween轮播图间的间隔  slidesPerView一屏所展示的轮播图个数 -->
      <swiper :autoplay="{ delay: 2500, disableOnInteraction: false }" :spaceBetween="60" :slidesPerView="3"
        :modules="[Autoplay]" class="mySwiper">
        <swiper-slide v-for="item in data" :key="item.id">
          <Instructor :name="item.name" :avatar="item.head_img" :description="item.profile" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="less" scoped>
.about-instructor {
  cursor: pointer;
  --swiper-navigation-size: 20px;
  --swiper-theme-color: #4e4d53;

  :deep(.swiper-wrapper) {
    margin: 0 10px;
    height: 341px;
  }
}
</style>