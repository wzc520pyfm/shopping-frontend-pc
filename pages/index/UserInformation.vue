<script lang="ts" setup>
import LoggedIn from './UserInfomation/LoggedIn.vue'
import NotLoginIn from './UserInfomation/NotLoggedIn.vue'

const { isLogin } = $(useUser())
</script>

<template>
  <div w-180px h-400px rounded-10px shadow-lg flex flex-col class="shadow-user">
    <LoggedIn v-if="isLogin" />
    <NotLoginIn v-else />
  </div>
</template>

<style lang="less" scoped>
.shadow-user {
  box-shadow: 0px 0px 10px 0px #d7d7d7;
}
</style>
