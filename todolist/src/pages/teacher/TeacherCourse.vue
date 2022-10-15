<template>
  <div>
    <div style="margin-bottom: 50px;margin-top: 20px;">
      <div class="back">
        <el-link @click.native="back">
          <span class="el-icon-arrow-left"/>
          <span class="text">返回</span>
        </el-link>
      </div>
      <span class="class">课堂 javaee架构程序设计（1，2）班 1202230201,2</span>
      <span class="selfHead"><p class="el-icon-bell"/><p class="el-icon-user-solid"/></span>
    </div>
    <div class="wrapper">
      <div class="header">
        <div class="className">{{ current.cname }}</div>
        <div class="classId">120230201,120230202</div>
        <div class="other">
          <p>加载二维码</p>
          <p>班级码 {{ current.cid }}</p>
          <p @click="toClassPeople" style="cursor:pointer;">成员 {{ length }}</p>
          <p>数据分析</p>
          <p>成绩</p>
        </div>

        <div class="num">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0<br/><br/>互动个数</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ homeworkSize }}<br/><br/>发布作业</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0<br/><br/>发布测试</p>
        </div>
      </div>

      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="课堂互动" name="first">课堂互动</el-tab-pane>
          <el-tab-pane label="作业" name="second">
            <TeacherHomework/>
          </el-tab-pane>
          <el-tab-pane label="话题" name="third">话题</el-tab-pane>
          <el-tab-pane label="资料" name="fourth">资料</el-tab-pane>
          <el-tab-pane label="测试" name="fifth">测试</el-tab-pane>
          <el-tab-pane label="公告" name="sixth">公告</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div style="position:absolute; right: 250px;top: 300px" @click="refresh">
      <el-link>
        <p class="el-icon-refresh" style="font-size: 30px"></p>
      </el-link>
    </div>
  </div>
</template>

<script>
import TeacherHomework from "@/components/teacher/TeacherHomework";

export default {
  name: "TeacherCourse",
  components: {
    TeacherHomework
  },
  data() {
    return {
      activeName: 'second',
      length: JSON.parse(sessionStorage.getItem("classPeople")).length || 0,
      current: JSON.parse(sessionStorage.getItem("current")) || '',
      homeworkSize: JSON.parse(sessionStorage.getItem("publicHomework")).length || 0
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    toClassPeople() {
      this.$router.push('/classPeople');
    },
    back() {
      this.$router.push('/teacherHome')
    },
    refresh() {
      this.$store.dispatch("getPublicHome")
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 70%;
  margin: auto;
}

.header {
  position: relative;
  color: white;
  height: 200px;
  background-image: url("../../../public/img/img.png");
  width: 100%;
  background-size: 100% 100%;
}

.className {
  font-size: 30px;
  position: absolute;
  top: 30px;
  left: 20px;
}

.classId {
  font-size: 18px;
  position: absolute;
  top: 80px;
  left: 20px;
}

.other {
  font-size: 13px;
  position: absolute;
  bottom: 30px;
  left: 20px;
}

.other p {
  display: inline-block;
  margin-right: 10px;
  color: white;
  background-color: #a1bbba;
}

.num {
  font-size: 20px;
  position: absolute;
  margin-right: 10px;
  right: 20px;
  top: 60px;
  color: white;
}

.num p {
  display: inline-block;
  margin: 0 30px 0 30px;
}

.back {
  top: 8px;
  left: 20px;
  margin-left: 20px;
  cursor: pointer;
}

.class {
  position: absolute;
  margin-left: 100px;
  font-size: 14px;
  top: 23px;
  color: #8c8c8c;
}

.selfHead {
  position: absolute;
  top: 23px;
  right: 80px;
}

.selfHead p {
  margin-left: 40px;
}
</style>