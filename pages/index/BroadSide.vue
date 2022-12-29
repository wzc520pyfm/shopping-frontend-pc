<script lang="ts" setup>

let account = $ref(false)
let indexShow = $ref(null)
const width = $ref((document.documentElement.clientWidth || document.body.clientWidth) > (1200 + 10 + 120))
const flag = $ref(false)

const mouseenter = (i: number) => {
  if (!flag && !width)
    return
  console.log(1);
  indexShow = i
  account = true
}

const mouseleave = () => {
  if (!flag && !width)
    return
  account = false
}

const data = computed(() => {
  if (!width) {
    return ['点', '击', '我', '查', '看']
  } else {
    return ['每日福利', '公众号', '联系讲师', 'APP下载', '帮助中心']
  }
})
</script>

<template>
  <div h-250px @mouseenter="width = true" @mouseleave="width = false"
    :class="['broad-side', !width ? 'width-tiny' : 'width-big']">
    <div flexc flex-col color="#4d555d" text-16px class="broad-list">
      <div v-for="(item, index) in data" :key="item" @mouseenter="mouseenter(index)" @mouseleave="mouseleave"
        class="w-68px h-32px font-light item" :style="{ cursor: !width ? 'default' : 'pointer' }">
        {{ item }}
      </div>
    </div>
    <div class="account-code" v-show="account && (indexShow === 1 || indexShow === 0)">
      <div>
        <div class="text">关注小滴课堂公众号</div>
        <img src="/images/OfficialAccounts.jpg" alt="" />
      </div>
      <div class="bg"></div>
    </div>
    <div class="account-code" v-show="account && indexShow === 2">
      <div>
        <img src="https://file.xdclass.net/xdclass/qrcode/teacher1.jpeg" alt="" class="teacher" />
      </div>
      <div class="bg"></div>
    </div>
    <div class="account-code flex items-end justify-end flex-col pb-30px"
      v-show="account && (indexShow === 3 || indexShow === 4)">
      <div>暂未提供</div>
      <div>敬请期待</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.width-tiny {
  width: 30px;
}

.width-big {
  width: 130px;
}

.broad-side {
  background-color: #fff;
  position: fixed;
  bottom: 35%;
  right: 0;
  z-index: 100;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px #d7d7d7;
  transition: width 0.15s;

  .broad-list {
    justify-content: space-around;
    height: 100%;

    .item {
      line-height: 32px;
      width: 100%;
      text-align: center;

      &:hover {
        font-weight: normal;
      }
    }
  }

  :deep(.ant-list-item) {
    cursor: pointer;
  }

  .account-code {
    position: absolute;
    left: -229px;
    top: 2px;
    width: 230px;
    height: 246px;
    display: flex;

    .teacher {
      height: 245px;
    }

    .text {
      text-align: center;
      background-color: #fff;
    }

    img {
      width: 220px;
      height: 220px;
    }

    .bg {
      width: 10px;
      opacity: 0;
    }
  }
}
</style>