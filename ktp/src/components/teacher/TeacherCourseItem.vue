<template>
  <div class="box" @click="toTeacherCourse">
    <img src="../../../public/img/img_4.png" alt="">
    <span class="courseName">
     {{ course.cname }}</span>
    <!--    <span class="className">17级软件工程</span>-->
    <span class="join"><p class="el-icon-menu"/> 加课码：{{ course.cid }}<p class="el-icon-arrow-down"/></span>
    <p style="margin-left: 20px;margin-top: 20px">近期作业</p>
    <p style="margin-left: 20px;margin-top: 20px">个人作业</p>
    <div style="position:absolute;height: 50px;border-top: 1px solid #c5c3c3;width: 100%; bottom: 0">
      <span class="el-icon-user" style="position:absolute; bottom: 10px;left: 20px"> 成员{{ course.all }}人</span>
      <span style="position:absolute;right: 10px;bottom: 10px">
      <span style="position:absolute;right: 40px;width: 40px;bottom: 0;" @click.stop><el-link>置顶</el-link></span>
      &nbsp;&nbsp;&nbsp;&nbsp;

    <el-dropdown placement="top">
      <el-link @click.stop>更多<p class="el-icon-s-operation"/></el-link>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>编辑</el-dropdown-item>
        <el-dropdown-item @click.native="drop">删除</el-dropdown-item>
        <el-dropdown-item @click.native="archiveVisible = true">归档</el-dropdown-item>

        <el-dropdown-item>复制课程</el-dropdown-item>
        <el-dropdown-item>打包下载</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </span>
    </div>
    <div @click.stop>
      <el-dialog title="归档课程" :visible.sync="archiveVisible">
        <div>您可以在归档中查看此课程</div>
        <div style="margin: 30px 0 30px 0">【归档】，学生不会归档</div>
        <div>【归档全部】，学生会跟着一起归档</div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="archiveVisible = false">取 消</el-button>
          <el-button type="primary" @click="archive">归 档</el-button>
          <el-button type="primary" @click="archiveAll">归 档 全 部</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>

<script>

export default {
  name: "TeacherCourseItem",
  props: ["course"],
  data() {
    return {
      archiveVisible: false,
      form: {
        cname: '',
        cid: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    async drop() {
      if (!confirm("你确定要删除" + this.course.cname)) {
        return false
      }
      let params = new URLSearchParams()
      params.append("cid", this.course.cid);
      await this.$store.dispatch("deleteAll", params)

    },
    archive() {
      if (!confirm("你确定要归档" + this.course.cname)) {
        return false
      }
      let params = new URLSearchParams()
      params.append("cid", this.course.cid);
      params.append("id", sessionStorage.getItem("id"));
      this.$store.dispatch("archive", params)
      this.archiveVisible = false
      setTimeout(() => {
        this.$store.course = JSON.parse(sessionStorage.getItem("course"))
      }, 300)
    },
    archiveAll() {
      if (!confirm("你确定要归档" + this.course.cname)) {
        return false
      }
      let params = new URLSearchParams()
      params.append("cid", this.course.cid);
      this.$store.dispatch("archiveAll", params)
      this.archiveVisible = false
    },
    async toTeacherCourse() {
      let params = new URLSearchParams()
      params.append("cid", this.course.cid);
      await sessionStorage.setItem('current', JSON.stringify(this.course))
      await this.$store.dispatch('getClassPeople', params)
      await this.$store.dispatch('getPublicHome')
      await this.$router.push('/teacherCourse')
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

.box:hover {
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