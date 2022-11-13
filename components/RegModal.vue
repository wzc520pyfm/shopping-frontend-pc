<script lang="ts" setup>
const { registerModel } = $(useModel())

</script>

<template>
  <div class="reg-modal" v-if="registerModel.base">
    <div class="bg">
      <div class="content wfull flex">
        <!-- 背景图 -->
        <div class="bg-img flexc flex-col" :style="{ background: `-70%/cover url('images/svg/log_reg_bg.svg')` }">
          <div absolute z-100 flexc flex-col>
            <img src="/images/logo_footer.png" w-65px h-65px />
            <div b="b white" m="t-12px b-10px" w-200px></div>
            <span text-white text-16px font-600 tracking-10px ml-8px text-center>Welcome</span>
          </div>
        </div>

        <!-- 标题 / 关闭按钮 -->
        <div pt-36px px-50px flex="~ col" w-400px relative>
          <div justify-between flex wfull>
            <span text-20px font-600 color="#404040">快速注册</span>
            <img src="/images/svg/close_icon.svg" class="cursor-pointer select-none w-20px! h-20px!" @click="registerModel.base=false" />
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.reg-modal {
  overflow: hidden;
}

.bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1100;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.content {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  z-index: 1200;
  width: 640px;
  height: 500px;
  margin: auto;
  border-radius: 10px;
  background-color: white;
}

.bg-img {
  width: 240px;
  height: 100%;
  position: relative;
  color: white;

  &::after {
    content: '';
    position: absolute;
    width: 240px;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(34, 34, 34, 0.66);
  }
}
</style>