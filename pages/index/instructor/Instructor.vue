<script lang="ts" setup>
interface IProps {
  name?: string
  avatar?: string
  company?: string
  description?: string
}
defineProps<IProps>()

</script>

<template>
  <div h-318px w-340px mt-3 class="instructor">
    <div class="top" flex ml-36px>
      <a-avatar :size="80" :src="avatar" style="border: 1px solid #f2f2f2" />
      <div class="info">
        <h3 text-24px text="#222222">{{ name }}</h3>
        <!-- TODO: 缺少公司介绍字段 -->
        <span text-18px text="#404040">{{ company }}</span>
      </div>
    </div>
    <div flex flex-col w-296px text-12px style="margin: 0 16px">
      <div mt-1>
        <p font-700>个人介绍:</p>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.instructor {
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #d5d5d5;

  .top {
    display: flex;
    padding-top: 28px;
    margin-bottom: 10px;

    .info {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
    }
  }
}
</style>