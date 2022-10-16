<template>
  <div class="box"  @click="toStudentCourse">
    <img src="../../../public/img/img_4.png" alt="">
    <span class="courseName">
     {{ course.cname }}</span>
    <span class="className">17级软件工程</span>
    <span class="join"><p class="el-icon-menu"/> 加课码：{{course.cid}}<p class="el-icon-arrow-down"/></span>
    <p style="margin-left: 20px;margin-top: 20px">近期作业</p>
    <p style="margin-left: 20px;margin-top: 20px">个人作业</p>
    <div style="position:absolute;height: 50px;border-top: 1px solid #c5c3c3;width: 100%; bottom: 0">
      <span class="el-icon-user" style="position:absolute; bottom: 10px;left: 20px"> 成员{{course.all}}人</span>
      <span style="position:absolute;right: 10px;bottom: 10px">
      <span style="position:absolute;right: 40px;width: 40px;bottom: 0;" @click.stop><el-link>置顶</el-link></span>
      &nbsp;&nbsp;&nbsp;&nbsp;

    <el-dropdown placement="top">
      <el-link @click.stop>更多<p class="el-icon-s-operation"/></el-link>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="drop">退课</el-dropdown-item>
        <el-dropdown-item @click.native="archive">归档</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentCourseItem",
  props:['course'],
  data(){
    return{

    }
  },
  methods: {
    drop() {
      if (!confirm("你确定要删除"+this.course.cname)){
        return false
      }
      let params = new URLSearchParams()
      params.append("cid", this.course.cid);
      params.append("id", sessionStorage.getItem("id"));
      this.$store.dispatch("delete",params)
    },
    async archive() {
      if (!confirm("你确定要归档"+this.course.cname)){
        return false
      }
      let params = new URLSearchParams()
      params.append("cid", this.course.cid);
      params.append("id", sessionStorage.getItem("id"));
      await this.$store.dispatch("archive",params)

    },
    async toStudentCourse(){
      let params = new URLSearchParams()
      params.append("cid", this.course.cid);
      sessionStorage.setItem('current',JSON.stringify(this.course))
      await this.$store.dispatch('getClassPeople',params)
      await this.$store.dispatch("getPublicHome")
      await this.$router.push('/studentCourse')
    }
  }
}
</script>

<style scoped>
.box {
  position: relative;
  height: 280px;
  width: 300px;
  display: inline-block;
  margin-left: 2px;
  margin-right: 38px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.box:hover{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, 1)
}

.courseName {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  border-bottom: 1px white solid;
  font-size: 17px
}

.className {
  position: absolute;
  top: 50px;
  left: 20px;
  color: white;
}

.join {
  position: absolute;
  top: 80px;
  left: 20px;
  color: white;
  background-color: #afbbb1;
}
</style>