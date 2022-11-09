<template>
  <div color-red bg-blue font-600 fs-30 w-100 h-100 flexc>HelloWorld</div>
  <a-button w-90px color-green! bg-red!>按钮</a-button>
  <h1>pinia初始化值{{ count }}</h1>
  <a-button @click="addClick">增加</a-button>
  <h2>当前pinia的getter值: {{ multiplyCount }}</h2>
</template>

<script lang="ts" setup>
// 二次接口封装请求
import { test } from '../api/test'
const data = await test()
console.log(data);

// pinia调试
const { count, add, multiplyCount } = $(useUser())
const addClick = () => add()
</script>

