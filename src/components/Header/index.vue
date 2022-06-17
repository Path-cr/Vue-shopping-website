<template>
  <header class="header">
    <!-- 头部的第一行 -->
  <el-menu 
    :default-active="activeIndex" 
    :router=true
    class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
  <el-menu-item index="/login" v-if="!loginData">
    登录
  </el-menu-item>
  <el-menu-item index="/login" v-else>
    {{loginData}}
  </el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的商城</template>
    <el-menu-item index="/center"> 
      我的订单
    </el-menu-item>
    <el-menu-item index="2-2">我的收藏夹</el-menu-item>
    <el-menu-item index="2-3">免费开店</el-menu-item>
  </el-submenu>
  <el-menu-item index="/shopCart">
    我的购物车
  </el-menu-item>
  <el-menu-item index="/register"  v-if="!loginData">注册</el-menu-item>
</el-menu>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/" class="logo" title="尚品汇">
          <img src="./images/RClogo.png" alt=""/>
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="#" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
            key="text"
          />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      keyword: '',
      activeIndex: '/login',
    }
  },
  methods: {
    goSearch() {
    // this.$router.push(`/search/${this.keyword}?q=${this.keyword.toUpperCase()}`)
    // this.$router.push({name: 'search', params:{keyword: this.keyword}, query:{q: this.keyword.toUpperCase()}}) 
      let location = {name: 'search', params:{keyword: this.keyword || undefined}}
      location.query = this.$route.query
      this.$router.push(location)
    },
    async loginOut() {
      try {
       await this.$store.dispatch("reqLoginOut")
       await this.$router.push('/home')
      } catch (error) {
        console.log(error);
      }
    },
     handleSelect(key, keyPath) {
        this.$router.push(key)
      }
  },
  mounted() {
    this.$bus.$on('clearInput',() => { 
      this.keyword = ''
     })
  },
  computed: {
     ...mapState({
       loginData: state=> state.login.accountData.name
     }),
    }
};
</script>

<style lang="less" scoped>
.header {
 
  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 135px;
          margin: 0 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0 4px;
          border: 2px solid #d74c4c;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #d74c4c;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>