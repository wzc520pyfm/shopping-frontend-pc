<script setup lang="ts">
let { loginModel } = $(useModel())

const activeKey = ref(0)
</script>

<template>
  <div class="reg-modal" v-if="loginModel">
    <div class="bg">
      <div class="content wfull flexc flex-col pt-32px px-50px">
        <div flex justify-between wfull mb-20px>
          <!-- TAB -->
          <div flex class="tab">
            <span text-20px :class="[activeKey === 0 && 'active']" @click="activeKey = 0"> 密码登录 </span>
            <span text-20px ml-30px :class="[activeKey === 1 && 'active']" @click="activeKey = 1"> 验证码登录 </span>
          </div>
          <img @click="loginModel = false" src="/images/svg/close_icon.svg"
            class="cursor-pointer select-none w-20px! h-20px!" />
        </div>
        <login-account wfull hfull v-show="activeKey === 0" />
        <login-captcha wfull hfull v-show="activeKey === 1" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tab {
  span {
    cursor: pointer;
    color: #aaaaaa;
    user-select: none;
  }

  .active {
    position: relative;
    color: #404040;

    &::after {
      content: '';
      width: 31px;
      height: 3px;
      position: absolute;
      bottom: -2px;
      left: calc(50% - 15px);
      box-shadow: 5px 5px 10px 0px #d5d5d5;
      background-color: #4d555d;
    }
  }
}

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
  width: 400px;
  height: 500px;
  margin: auto;
  border-radius: 10px;
  background-color: white;
}
</style>