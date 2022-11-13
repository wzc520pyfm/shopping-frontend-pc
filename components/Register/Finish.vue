<script lang="ts" setup>
const { registerModel } = $(useModel())
</script>

<template>
  <a-modal :footer="null" class="w-350px!" v-model:visible="registerModel.finish">
    <div flex flex-col justify-center items-center>
      <check-circle-outlined text-5rem mb-4 />
      <h2 mb-4>恭喜你注册成功！</h2>
      <p mb-4 text-center>您现在可以使用手机号进行登录了!</p>
      <a-button danger type="primary" size="large" mb-4 @click="registerModel.finish = false"> 开始购物 </a-button>
      <a-button type="text" size="small">完善资料</a-button>
    </div>
  </a-modal>
</template>