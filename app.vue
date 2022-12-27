<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import 'ant-design-vue/es/message/style/css'
import 'ant-design-vue/es/notification/style/css'

const { asyncUserInfo } = $(useUser())
// 同步用户数据
await asyncUserInfo()

useHead({
  title: 'CLS | shopping',
  meta: [
    {
      name: 'description', content: 'CloverShopping'
    },
    {
      name: 'keywords', content: 'shopping'
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>
@import '~/assets/reset.less';
</style>
