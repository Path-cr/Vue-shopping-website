<template>
  <div class="order-main">
    <div class="container">
      <div class="order-body">
        <!--左侧列表-->
        <div class="order-left">
          <dl>
            <dt><h3>订单中心</h3></dt>
            <dd>
              <router-link to="/center">我的订单</router-link>
            </dd>
            <dd>
              <router-link to="/center/groupBuying">团购订单</router-link>
            </dd>
            <dd>本地生活订单 </dd>
            <dd>我的预售</dd>
            <dd>评价晒单</dd>
            <dd>取消订单记录</dd>
          </dl>
        </div>
        <!-- 右侧内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
  }
</script>

<style lang="less" scoped>
  .order-main {
     background: white;
  border-radius: 4px;
  margin: 0 15px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
    .container {
      margin: 0 auto;
      width: 1200px;

      .order-body {
        padding: 10px;
        color: #333;

        &:after {
          content: "";
          display: block;
          clear: both;
        }

        //左边
        .order-left {
          float: left;
          width: 10%;
          margin-left: 70px;

          dl {
            line-height: 28px;

            dt {
              font-weight: 700;
              padding: 5px;

              i {
                color: #77b72c;
              }
            }

            dd {
              margin: 0 0 6px;
              border: 1px solid #ededed;
              text-align: center;
            }
          }
        }

        //右边
       
      }
    }
  }
</style>