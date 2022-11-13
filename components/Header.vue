<script setup lang="ts">
const { registerModel } = $(useModel())

</script>

<template>
  <div class="header-container">
    <div class="header">
      <div class="center-tab">
        <NuxtLink class="logo" to="/">
          <img src="/images/logo.png" alt="CLS | shopping" title="CLS | shopping" />
        </NuxtLink>
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink>购物中心</NuxtLink>
        <a target="_blank">分享</a>
      </div>
      <HeaderSearch />
      <div>
        <div class="login-or-registry" flexc>
          <span mr-8>登录</span>
          <span class="register" @click="registerModel.base=true">
            注册
          </span>
        </div>
      </div>
    </div>
    <RegModal>
      <RegisterBase></RegisterBase>
    </RegModal>
    <RegisterFinish></RegisterFinish>
  </div>
</template>

<style lang="less" scoped>
.register {
  background-color: #4d555d;
  padding: 2px;
  width: 60px;
  height: 30px;
  color: white;
  text-align: center;
  line-height: 26px;
}

.header-container {
  display: flex;
  flex-basis: 1200px;
  min-width: 1200px;
  height: 67px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 0px 5px 0px #d7d7d7;
}

.header {
  flex-basis: 1200px;
  display: flex;
  height: 72px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;

  .center-tab {
    flex: 0.6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #4f555d;

    &:hover {
      color: #f38e48;
    }
  }

  .active {
    color: orange;
  }

  &>* {
    cursor: pointer;
    user-select: none;
  }

  .logo img {
    width: 65px;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    font-size: 0;
  }
}
</style>