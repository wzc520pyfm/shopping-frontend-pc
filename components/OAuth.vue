<script setup lang="ts">

</script>

<template>
  <div class="oAuthLogin">
    <img src="/images/wechat_icon.png" w-70px h-70px />
  </div>
</template>

<style lang="less" scoped>
.oAuthLogin {
  display: flex;
  margin-top: 12px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  &>* {
    padding: 8px;
    margin: 0 20px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 50%;
  }

  .wechat {
    color: #00c86a;
    background-color: #e1ffe0;
  }
}
</style>