<template>
  <div class="paysuccess">
    <div class="success">
      <h3>
        <img src="./images/right.png" width="48" height="48" />
        恭喜您，支付成功啦！
      </h3>
      <div class="paydetail">
        <p class="button">
          <router-link class="btn-look" to="/center">查看订单</router-link>
          <router-link class="btn-goshop" to="/">继续购物</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaySuccess",
};
</script>

<style lang="less" scoped>
.paysuccess {
  background: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  margin: 0 auto;
  padding: 25px;

  .success {
    width: 500px;
    margin: 0 auto;

    h3 {
      margin: 20px 0;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;

      img {
        max-width: 100%;
        vertical-align: middle;
        border: 0;
        margin-right: 14px;
      }
    }

    .paydetail {
      margin-left: 66px;
      font-size: 15px;

      .button {
        margin: 30px 0;
        line-height: 26px;

        a {
          display: inline-block;
          box-sizing: border-box;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          border-radius: 2px;
          user-select: none;
          font-size: 18px;
          padding: 4px 20px;
          line-height: 22px;
          text-decoration: none;

          &.btn-look {
            margin-right: 13px;
            color: #fff;
            background-color: #e1251b;
            border: 1px solid #e1251b;
          }

          &.btn-goshop {
            color: #666;
            background-color: #eee;
            border: 1px solid #e1e1e1;
          }
        }
      }
    }
  }
}
</style>