<script lang="ts" setup>
import { message } from 'ant-design-vue'
</script>

<template>
  <div class="footer">
    <div wfull flexc>
      <div w-1200px class="grid-three" mt-10px>
        <img src="/images/logo.png" wfull hfull />
        <div text-16px color="#4f555d" flexc flex-col font-normal class="footer-href">
          <div mb-10px>
            <a @click="message.warn('敬请期待')" mr-29px>网站地图</a>
            <a @click="message.warn('敬请期待')" mr-29px>每日福利</a>
            <!-- <a href="#" mr-29px>联系讲师</a> -->
            <a @click="message.warn('敬请期待')" mr-29px>APP下载</a>
          </div>
          <div flexc>
            友情链接：
            <a target="__blank" href="https://xiaodijy.tmall.com/">商城天猫旗舰店&nbsp;&nbsp;</a>|&nbsp;&nbsp;
            <a target="__blank" href="https://open1024.com/">Open1024技术导航站&nbsp;&nbsp;</a>|&nbsp;&nbsp;
            <a target="__blank"
              href="https://www.aliyun.com/minisite/goods?taskPkg=amb618all&pkgSid=356821&recordId=3651796&userCode=r5saexap">
              阿里云&nbsp;&nbsp;
            </a>
            |&nbsp;&nbsp;
            <a target="__blank" href="https://xdclass.ke.qq.com/">腾讯课堂</a>
          </div>
        </div>
        <div flex class="footer-qr">
          <img src="/images/xdclass_gzh.png" class="w80px! h80px" mr-16px />
          <div flex justify-center flex-col text-18px font-light text="#4f555d">
            <p>扫码关注</p>
            <p>微信服务号</p>
          </div>
        </div>
      </div>
    </div>
    <a-divider />
    <div class="copyright">
      Copyright © 2018 Company,lnc.
      <a href="https://www.beian.gov.cn/"> &nbsp;粤ICP备15092968号&nbsp; </a>
      Terms
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  background-color: #fbfbfb;

  .footer-href a:hover {
    color: #f38e48;
  }

  :deep(.ant-divider-horizontal) {
    margin: 5px 0;
  }

  .grid-three {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 163px;
      height: 80px;
      flex-shrink: 0;
    }

    .footer-href {
      flex-shrink: 0;
    }

    .footer-qr {
      flex-shrink: 0;
    }
  }

  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-basis: 1200px;
    font-size: 12px;
    color: #7f7f7f;
    padding-bottom: 10px;

    a {
      color: #7f7f7f;

      &:hover {
        color: #f38e48;
      }
    }
  }
}
</style>