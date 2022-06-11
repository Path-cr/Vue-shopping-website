<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul
          class="cart-list"
          v-for="(cart, index) in allCartInfoList"
          :key="index"
        >
          <li class="cart-list-con1">
            <input
              @click="checkSelectOrNot(cart)"
              type="checkbox"
              name="chk_list"
              v-model="cart.isChecked"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">{{ cart.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:void(0)"
              class="mins"
              @click="addShopCartNum(cart, -1, 'mines')"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              :value="cart.skuNum"
              minnum="1"
              class="itxt"
              @input="addShopCartNum(cart, $event.target.value, 'input')"
            />
            <a
              href="javascript:void(0)"
              class="plus"
              @click="addShopCartNum(cart, 1, 'add')"
              >+</a
            >
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuPrice * cart.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a style="cursor: pointer; color: red" class="sindelet" @click="delCheckedOptions(cart.skuId)"
              >删除</a
            >
            <br />
            <br />
            <a style="cursor: pointer; color: red">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          :checked="isChecks"
          @change="checkAllcheckBox"
        />
        <span>全选</span>
      </div>
      <div class="option">
        <a style="cursor: pointer; color: red" @click="delAllCartList">删除选中的商品</a>
        <a style="cursor: pointer; color: red" >清除下柜商品</a>
        <a style="cursor: pointer; color: red" >移到我的关注</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择 <span style="color: red">0</span> 件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） :</em>
          <i class="summoney">{{ allPrice }}</i>
        </div>
        <div class="sumbtn">
          <router-link to="/trade" class="sum-btn" >结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "ShopCart",
  mounted() {
    this.getShopCart();
  },
  methods: {
    getShopCart() {
      this.$store.dispatch("getCartList");
    },
    addShopCartNum: throttle(async function (cart, operationType, flag) {
      switch (flag) {
        case "add":
         cart.skuNum ++
          break;
        case "mines":
          if (cart.skuNum <= 1) {
            operationType = 0;
            alert("数量不能小于1哦!");
          }else {
             cart.skuNum --
          }
          break;
        case "input":
          if(operationType>0){
            operationType = parseInt(operationType) - cart.skuNum;
          }else {
            operationType = 0
          }
          break;
      }

      try {
        await this.$store.dispatch("getAddCartList", {
          skuId: cart.skuId,
          skuNum: operationType,
        });
        if(flag=== "input")this.getShopCart();
      } catch (error) {
        alert(error);
      }
    }, 1000),
    checkAllcheckBox() {
      this.allCartInfoList.forEach((cart) => {
        cart.isChecked = event.target.checked
        this.checkSelectOrNot(cart)
      });
    },
    async delCheckedOptions(skuId) {
       try {
         await this.$store.dispatch('reqDelCartList', skuId)
         this.getShopCart()
       } catch (error) {
         console.log(error)
       }
    },
    async checkSelectOrNot(cart) {
      try {
        await this.$store.dispatch("reqUpdataCartList", {
          skuId: cart.skuId,
          isChecked: event.target.checked ? 1 : 0,
        });
      } catch (error) {
        console.log(error);
      }
    },
    delAllCartList() {
      this.allCartInfoList.forEach(item => { 
        if(item.isChecked == 1)  this.delCheckedOptions(item.skuId)
       })
    }
  },
  computed: {
    ...mapGetters(["allCartInfo"]),
    allCartInfoList() {
      return this.allCartInfo.cartInfoList || [];
    },
    allPrice() {
      let sum = 0;
      this.allCartInfoList.forEach((element) => {
        sum += element.cartPrice * element.skuNum;
      });
      return sum;
    },
    isChecks() {
      return (
        this.allCartInfoList.every((item) => item.isChecked) &&
        this.allCartInfoList.length > 0
      );
    },
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 3%;
        // margin-left: -10px;
        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 45%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 3%;
        }

        .cart-list-con2 {
          width: 35%;
          margin-left: 100px;
          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con4 {
          width: 15%;
        }

        .cart-list-con5 {
          width: 12%;
          margin-left: 20px;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 8%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;
          margin-left: 20px;
          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>