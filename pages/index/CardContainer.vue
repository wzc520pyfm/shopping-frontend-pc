<script lang="ts" setup>
import CardBase from './Card/CardBase.vue'
import type { ProductList } from '~~/types/api';

interface IProps {
  title?: string // 标题
  subTitles?: string[] // 介绍
  choiceCard: number // 控制卡片是否展示详情介绍
  cards: ProductList[] // 课程详情
}
defineProps<IProps>()
</script>

<template>
  <div w-full>
    <!-- 标题和图标 -->
    <div flex items-center v-if="title">
      <div flex items-end>
        <img src="/images/icon_hot.png" h-29px w-29px mr-5px />
        <h2 text-16px text="#4f555d">{{ title }}</h2>
      </div>
      <div ml-48px flexc text-14px mr-40px pt-3px v-for="item in subTitles">
        {{ item }}
      </div>
    </div>
    <!-- 卡片列表和右侧模块 -->
    <div flex items-center class="cards-bg">
      <div mt-12px flex="~ wrap gap-24px" class="cards">
        <CardBase v-for="(item, index) in cards" :key="index" :card="item" :choice-card="choiceCard" />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
</style>
