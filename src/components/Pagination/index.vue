<template>
  <div class="pagination">
    <button @click="delPages(1)" v-show="pages > 1">上一页</button>

    <span v-if="pages < total">
      <button
        @click="getIndex(index)"
        v-for="(item, index) in total"
        :key="index"
        :class="{ visited: isvisited == index }"
      >
        {{ item }}
      </button>
    </span>

    <span v-else>
      <button @click="first(0)" :class="{ visited: isvisited == 0 }">1</button>
      <span>....</span>
      <button
        v-for="(items, index) in allPages"
        :key="index"
        v-show="
          items >= pages - startandend.start && items <= pages + startandend.end
        "
        @click="getIndex(index)"
        :class="{ visited: isvisited == index }"
      >
        {{ items }}
      </button>
    </span>
    <span v-if="pages < allPages - 3">
      <span>....</span>
    </span>
    <button @click="first(allPages - 1)" v-show="pages < 10 && allPages > total+ 2">{{ allPages }}</button>
    <button @click="delPages(2)" v-show="pages != allPages">下一页</button>
    <h6 style="margin-left: 30px">共 {{ allPages }} 条</h6>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "contiunes"],
  data() {
    return {
      pages: this.pageNo,
      isvisited: 0,
    };
  },
  computed: {
    allPages() {
      return Math.ceil(this.contiunes / this.pageSize);
    },
    startandend() {
      let start = parseInt(this.total / 2);
      let end = parseInt(this.total / 2);
      return { start, end };
    },
  },
  methods: {
    changepageNo(index) {
      // let getPageNo = parseInt(event.target.innerText);
      this.pages = index + 1;
      this.$emit("sendPageNo", this.pages)
    },
    getIndex(index) {
      this.isvisited = index;
      this.changepageNo(index);
    },
    first(index) {
      this.isvisited = index;
      this.changepageNo(index);
    },
    delPages(index) {
      if (index == 1) {
        this.isvisited = this.pages - 2;
        this.changepageNo(this.pages - 2);
      } else {
        this.isvisited = this.pages;
        this.changepageNo(this.pages);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.visited {
  background-color: orangered;
}
.pagination {
  button,
  h6 {
    margin: 0 5px;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
  button:hover {
    background-color: rgb(229, 218, 213);
  }
}
</style>
