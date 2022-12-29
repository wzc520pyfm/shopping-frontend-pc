<script lang="ts" setup>
import { getCategoryList } from '~~/api/category';
import type { ICategoryList } from '~~/types/api';

let now = $ref(0) // 鼠标悬浮选中的项
let showCategory = $ref(false) // 是否展示子分类
// 根据鼠标移入移出事件控制子分类弹窗的展示与否
const displayCategory = $computed(() => {
  return showCategory ? 'block' : 'none'
})
// 导航的鼠标移入事件
const switchCategory = function (idx: number) {
  now = idx
  showCategory = true
}
// 课程分类接口请求
let data = $ref<ICategoryList[]>()
data = (await getCategoryList()).data.map(item => {
  item.name = item.name.replace('&', ' | ') // 替换分隔符
  return item
})

</script>

<template>
  <div class="classify-container">
    <ul relative>
      <li v-for="(item, idx) in data" :key="idx" relative @mouseenter="switchCategory(idx)"
        @mouseleave="showCategory = false">
        {{  item.name  }}
        <div absolute top-0 right-3 text="#a0a0a0" text-13px>
          <caret-right-outlined />
        </div>  
      </li>

      <div class="category top-0 left-160px z-10 p-6" @mouseleave="showCategory = false"
        @mouseenter="showCategory = true" rounded display-none absolute h-400px w-634px bg="#fdfdfd">
        <div class="category-content">
          <div>
            <span>基础课程</span>
            <div flex mt-2>
              <p class="ml-4 text-12px cursor-pointer"
                v-for="(item, idx) in data[now]?.subCategoryList.filter((item) => item.level === 'junior')" :key="idx">
                {{ item.name }}
              </p>
            </div>
          </div>
          <div mt-6>
            <span>进阶课程</span>
            <div flex mt-2>
              <p class="ml-4 text-12px cursor-pointer"
                v-for="(item, idx) in data[now]?.subCategoryList.filter((item) => item.level === 'middle')" :key="idx">
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.classify-container {
  width: 160px;
  height: 400px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 10px #d7d7d7;

  ul {
    padding: 10px 0;
    width: 100%;
  }

  li {
    width: 100%;
    height: 54px;
    cursor: pointer;
    font-size: 16px;
    line-height: 54px;
    padding-left: 19px;

    &:hover {
      color: white;
      background-color: #434b52;
    }
  }

  li:hover>* {
    color: white;
  }

  .category {
    display: v-bind(displayCategory);
    box-shadow: rgb(215, 215, 215) 0px 0px 10px;
  }
}
</style>
