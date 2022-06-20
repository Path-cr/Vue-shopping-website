  <template>
  <div id="home">
    <typeNav />
    <ListContainer />
    <!-- <Recommend/>
    <Rank/>
    <Like/> -->
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :floorInfo="floor"/>
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer/index.vue";
import Brand from "./Brand/index.vue";
import Floor from "./Floor/index.vue";

export default {
  name: "home",
  components: {
    ListContainer,
    Brand,
    Floor
  },
  mounted() {
    this.$store.dispatch("getfloorList");
  },
  computed: {
    floorList() {
      return this.$store.state.home.floorList;
    },
  },
};
</script>

<style lang="less">
#home {
  background: white;
  border-radius: 4px;
  margin: 0 15px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
}
</style>