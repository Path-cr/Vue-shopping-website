<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/login" v-if="!loginData"> 登录 </el-menu-item>
      <el-submenu v-else index="1">
        <template slot="title">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </template>
        <el-menu-item index="/center"> 我的订单 </el-menu-item>
        <el-menu-item index="2-1">我的收藏夹</el-menu-item>
        <el-menu-item index="2-2">免费开店</el-menu-item>
        <el-menu-item index="2-3" v-show="loginData" @click="loginOut"
          >退出登录</el-menu-item
        >
      </el-submenu>
      <el-menu-item v-if="loginData" index="/home">
        {{ loginData }}
      </el-menu-item>
      <el-menu-item v-else index="/register">注册</el-menu-item>
      <el-menu-item index="/shopcart"> 我的购物车 </el-menu-item>

      <div class="search_el">
        <el-input
          size="mini"
          placeholder="请输入内容"
          v-model="keyword"
          class="input-with-select"
        >
          <el-button
            size="mini"
            slot="append"
            icon="el-icon-search"
            @click="goSearch"
          ></el-button>
        </el-input>
      </div>
    </el-menu>

    <!--头部第二行 搜索区域-->
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      keyword: "",
      activeIndex2: "",
    };
  },
  methods: {
    goSearch() {
      // this.$router.push(`/search/${this.keyword}?q=${this.keyword.toUpperCase()}`)
      // this.$router.push({name: 'search', params:{keyword: this.keyword}, query:{q: this.keyword.toUpperCase()}})
      let location = {
        name: "search",
        params: { keyword: this.keyword || undefined },
      };
      location.query = this.$route.query;
      this.$router.push(location);
    },
    async loginOut() {
      try {
        await this.$store.dispatch("reqLoginOut");
        await this.$router.push("/home");
      } catch (error) {
        console.log(error);
      }
    },
    handleSelect(key, keyPath) {
      this.$router.push(key);
      // this.activeIndex2 = key
    },
  },
  mounted() {
    this.$bus.$on("clearInput", () => {
      this.keyword = "";
    });
  },
  computed: {
    ...mapState({
      loginData: (state) => state.login.accountData.name,
    }),
  },
};
</script>

<style lang="less" scoped>
.header {
  margin-bottom: 50px;
  .search_el {
    width: 400px;
    margin: 15px 1000px;
  }
}
</style>