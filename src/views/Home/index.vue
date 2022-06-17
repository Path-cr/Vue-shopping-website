  <template>
  <div>
    <typeNav/>
    <ListContainer/>
    <!-- <Recommend/>
    <Rank/>
    <Like/> -->
    <!-- <Floor v-for="(floor, index) in floorList" :key="floor.id" :floorList="floor"/> -->
    <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer/index.vue'
import Brand from './Brand/index.vue'


export default {
    name: 'home',
    components: {
      ListContainer,
      Brand
    },
    mounted() {
    this.$store.dispatch('getfloorList')
  },
  computed: {
   floorList() {
    return this.$store.state.home.floorList
   }
  },
}
</script>

<style>

</style>