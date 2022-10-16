<template>
  <div>
    <div class="header">
      <el-button type="primary" round class="class">javaee架构与程序设计1,2班</el-button>
      <div class="head">
        <p class="el-icon-bell"></p>
        <p class="el-icon-user-solid"></p>
      </div>
      <el-tabs class="tab" v-model="activeName" @tab-click="handleClick" stretch>
        <el-tab-pane label="成员" name="first"><Member/></el-tab-pane>
        <el-tab-pane label="学生分组" name="second">学生分组</el-tab-pane>
        <el-tab-pane label="成绩" name="third">成绩</el-tab-pane>
      </el-tabs>
    </div>
    <div class="back">
      <el-link  @click.native="back">
        <span class="el-icon-arrow-left"/>
        <span class="text">返回</span>
      </el-link>
    </div>

  </div>
</template>

<script>
import Member from "@/components/common/Member";
export default {
  name: "ClassPeople",
  components:{
    Member
  },
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {

    },
    back() {
      this.$router.history.go(-1)
    },
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

.class {
  margin-left: 100px;
  position: absolute;
  font-size: 12px;
}

.back {
  position: absolute;
  top: 10px;
  left: 20px;
  cursor: pointer;
  font-size: 10px;
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