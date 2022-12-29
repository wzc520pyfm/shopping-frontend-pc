<script lang="ts" setup>
import type { ProductList } from '~~/types/api'

interface IProps {
  card: ProductList
}
defineProps<IProps>()
</script>

<template>
  <div class="card-tag">
    <h3 class="title">{{ card.title }}</h3>
  </div>
</template>

<style lang="less" scoped>
.card-tag h3 {
  margin-top: 5px;
  margin-left: 12px;
  margin-right: 17px;
  margin-bottom: 4px;
  font-size: 14px;
  color: #404040;
  font-weight: normal;
}
</style>
