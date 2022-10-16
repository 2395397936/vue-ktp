<template>
  <div class="wrapper">
    <div class="header">
      <img src="../../../public/img/logo_blue.png" alt="">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="课堂" name="first">
          <div style="margin-top: 30px;">
            全部课程
            <span style="position:absolute; right: 0;">
              <span style="margin-right: 30px;"><el-link><span class="el-icon-sort"/>课程排序</el-link></span>
              <span style="margin-right: 30px;" @click="dialogVisible = true"><el-link><span
                  class="el-icon-folder-opened"/>归档管理</el-link></span>
              <el-dialog
                  :visible.sync="dialogVisible"
                  width="50%"
                  :before-close="handleClose">
  <div style="height: 400px">
    <sort-and-archive/>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
<el-button type="primary">+创建/加入课程</el-button>
<el-button type="primary">+快速发布活动</el-button>
            </span>
          </div>
          <el-divider/>
          <!--          课程-->
          <student-course-item v-for="item in course.course.filter((i)=>{return i.status===0})" :course="item"
                               :key="item.cid"/>
          <!--          加入课程-->
          <div class="joinCourse">
            <img src="../../../public/img/create-course.png" style="width: 300px;height: 111px" alt="">
            <span @click="joinVisible = true"
                  style=" cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+<br/><span>加入课程</span></span>
            <el-dialog title="加入课程" :visible.sync="joinVisible">
              <el-form :model="form">
                <el-form-item label="课程号" :label-width="formLabelWidth">
                  <el-input v-model="form.cid" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="joinVisible = false">取 消</el-button>
                <el-button type="primary" @click="join">加 入</el-button>
              </div>
            </el-dialog>
          </div>
        </el-tab-pane>
        <el-tab-pane label="精品专区" name="third">精品专区</el-tab-pane>
        <el-tab-pane label="我的精品" name="fourth">我的精品</el-tab-pane>
      </el-tabs>
      <span class="icons">
      <span><el-link><p class="el-icon-collection"/>论文查重</el-link></span>
      <span><el-link><p class="el-icon-circle-plus"/>邀请教师</el-link></span>
      <span><el-link><p class="el-icon-bell"/></el-link></span>
      <span><el-link><p class="el-icon-user-solid"/></el-link></span>
    </span>
    </div>
    <div style="position:absolute; right: 400px;top: 60px" @click="refresh">
      <el-link>
        <p class="el-icon-refresh" style="font-size: 30px"></p>
      </el-link>
    </div>

  </div>
</template>

<script>
import StudentCourseItem from "@/components/student/StudentCourseItem";
import SortAndArchive from "@/components/common/SortAndArchive";

export default {
  name: "StudentHome",
  components: {
    SortAndArchive,
    StudentCourseItem
  },
  data() {
    return {
      dialogVisible: false,
      activeName: 'first',
      joinVisible: false,
      course: this.$store.state.course,
      form: {
        cid: '',
      },
      formLabelWidth: '120px',
      timer: ''
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClose(done) {
      done();
    },
   async join() {
      let params = new URLSearchParams();
      params.append("cid", this.form.cid)
      params.append("id", sessionStorage.getItem("id"))
      await this.$store.dispatch('join', params)
      this.joinVisible = false
    },
     refresh(){
       this.$store.dispatch('getCourse')
    }

  },
  // created() {
  //   this.timer = setInterval(() => {
  //     this.$store.dispatch("getCourse")
  //     console.log(0)
  //   }, 5000)
  // },
  // beforeDestroy() {
  //   if(this.timer) { //如果定时器还在运行 或者直接关闭，不用判断
  //     console.log(123)
  //     clearInterval(this.timer); //关闭
  //   }
  // }
}
</script>

<style scoped>
.wrapper {
  width: 90%;
  margin: auto;
}

.joinCourse {
  height: 280px;
  width: 300px;
  display: inline-block;
  margin-left: 2px;
  margin-right: 38px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.joinCourse span {
  font-size: 30px;
  color: #7a7777;
  margin-left: 90px;
}

.header {
  position: relative;
}

.joinCourse:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, 1)
}

img {
  display: inline-block;
}

.icons {
  position: absolute;
  right: 0;
  top: 60px;
}

.icons span {
  padding-left: 40px;
}

</style>