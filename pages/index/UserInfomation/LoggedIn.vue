<script lang="ts" setup>
const { personalInfo } = $(useUser())
const activeKey = $ref(0)

</script>

<template>
  <div class="logged-container">
    <div>
      <div class="top">
        <div class="user-info" pt-4 ml-14px>
          <a-avatar :size="50" :src="personalInfo.head_img" />
          <div ml-12px>
            <span color="#4f555d" font-400>{{ personalInfo.username }}</span>
          </div>
        </div>
        <div mt-8px mx-14px flexb class="text-12px text-#7f7f7f">
          <span>{{ personalInfo.use_time }}</span>
        </div>

        <div flex justify-center pl-14px pr-14px mt-15px>
          <div flexc flex-col mb-10px cursor-pointer @click="activeKey = 0">
            <span text-14px color="#4f555d">使用时间</span>
            <span bg="#4f555d" w-24px h-2px v-show="activeKey === 0"></span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.logged-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
}

.top {
  width: 100%;
  box-shadow: 0px 0px 5px 0px rgba(215, 215, 215, 0.35);

  .user-info {
    display: flex;
    align-items: center;
    position: relative;

    span {
      font-size: 16px;
      font-weight: bold;
      width: 80px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
    }
  }
}

.study-data,
.recent-study {
  display: flex;
  flex-direction: column;
  align-items: center;
}

:deep(.ant-progress-outer) {
  margin-right: calc(-2em - 24px);
  padding-right: calc(2em + 24px);
}
</style>