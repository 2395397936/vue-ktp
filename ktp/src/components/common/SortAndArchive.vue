<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch>

      <el-tab-pane label="课程排序" name="first">
        <div ref="cou">
          <sort v-for="item  in course2.filter((i)=>{return i.status===0})" :course="item" :key="item.cid" class="sort" style="cursor: pointer"></sort>
        </div>
      </el-tab-pane>
      <el-tab-pane label="归档管理" name="second">
        <Archive v-for="item in course.course.filter((i)=>{return i.status===1})" :key="item.cid" :course="item"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Sort from "@/components/common/Sort";
import Archive from "@/components/common/Archive";
import Sortable from 'sortablejs'

export default {
  name: "SortAndArchive",
  data() {
    return {
      activeName: 'second',
      course: this.$store.state.course,
      course2:this.$store.getters.course,
    };
  },
  components: {
    Sort, Archive
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    let el = this.$refs.cou
    new Sortable(el, {
      handle: ".sort",
      animation: 150,
      onEnd: (evt) => {
        //拖拽动作结束后执行
        this.course2.splice(evt.newIndex, 0, this.course2.splice(evt.oldIndex, 1)[0])
        let newArray = this.course2.slice(0)
        this.course2 = []
        this.$store.commit("changeCourse", newArray)
        this.$nextTick(function () {
          this.course2 = newArray
        })
      }
    });
  },

}
</script>

<style scoped>

</style>