<script lang="ts" setup>
import CardTag from './CardTag.vue'
import Card from './Card.vue'
import type { ProductList } from '~~/types/api'

interface IProps {
  choiceCard: number
  card: ProductList
}
defineProps<IProps>()
</script>

<template>
  <nuxt-link>
    <div cursor-pointer class="card-box">
      <div class="top">
        <img :src="card.cover_img" />
      </div>
      <div class="bottom">
        <!-- 详细介绍 -->
        <div v-if="choiceCard === 0">
          <card-tag :card-tag="card" />
        </div>
        <!-- 标题 -->
        <div v-else-if="choiceCard === 1">
          <card :card="card" />
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style lang="less" scoped>
.card-box {
  width: 280px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px 0 20px 0;
  box-shadow: 5px 5px 10px 0px #d5d5d5;

  .top {
    position: relative;

    img {
      width: 100%;
      height: 190px;
      cursor: pointer;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .tag {
      position: absolute;
      right: 0;
      top: 0;
      color: #fff;
      font-size: 12px;
      padding: 2px 8px;
      border-bottom-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
}
</style>
