<template>
<div>

  <div class="header">
    <el-button type="primary" round class="class">javaee架构与程序设计1,2班</el-button>
    <div class="head">
      <p class="el-icon-bell"></p>
      <p class="el-icon-user-solid"></p>
    </div>
    <el-tabs class="tab" v-model="activeName" @tab-click="handleClick" stretch>
      <el-tab-pane label="学生作业" name="first"><Manage/></el-tab-pane>
      <el-tab-pane label="作业讨论" name="second">学生分组</el-tab-pane>
    </el-tabs>
  </div>
  <div class="back">
    <el-link @click.native="back">
      <span class="el-icon-arrow-left"/>
      <span class="text">返回</span>
    </el-link>
  </div>
</div>
</template>

<script>
import Manage from "@/components/teacher/Manage";
export default {
  name: "TeacherHomeworkDetail",
  components:{
    Manage
  },
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {

    },
    back(){
      this.$router.push('/teacherCourse')
    }
  }
}
</script>

<style scoped>
::v-deep .el-tabs__nav-scroll {
  width: 50% !important;
  margin: 0 auto !important;
}



.header {
  position: relative;
}

.back{
  position: absolute;
left: 20px;
  top: 10px;
}

.class {
  position: absolute;
  font-size: 12px;
  left: 100px;
}

.el-icon-user-solid {
  position: absolute;
  right: 60px;
  top: 12px;
  font-size: 20px;
}

.el-icon-bell {
  position: absolute;
  right: 140px;
  top: 12px;
  font-size: 20px;
}

</style>