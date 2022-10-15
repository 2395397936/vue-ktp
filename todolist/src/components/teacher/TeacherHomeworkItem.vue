<template>
  <div class="wrapper"  @click="toHomework">
    <div class="header">
      <p class="selfHomework">个人作业</p>
      <p class="date">{{ publicHomework.publicDate }}</p>
      <p class="el-icon-more"></p>
    </div>
    <div class="main">
      <p class="title">{{ publicHomework.homeworkName }}</p>
      <div class="detail">{{publicHomework.detail +'    '}}要求见附件</div>
      <img src="../../../public/img/img_1.png">
      <el-link type="primary">查看全文 <p class="el-icon-arrow-right"></p></el-link>
<!--      <div class="num">-->
<!--        <p class="over">-->
<!--          &nbsp;9<br/>已批-->
<!--        </p>-->
<!--        <p class="havenot">-->
<!--          &nbsp;9<br/>未批-->
<!--        </p>-->
<!--        <p class="commit">-->
<!--          &nbsp;9<br/>提交-->
<!--        </p>-->
<!--      </div>-->
      <div class="dead">
        截止日期:{{ publicHomework.deadDate }} 0条讨论
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherHomeworkItem",
  props:['publicHomework'],
  methods:{
   async toHomework() {
      sessionStorage.setItem('currentHid',this.publicHomework.hid)
     await this.$store.dispatch('getSubmitHomework')
     await this.$router.push('/teacherHomeWorkDetail');
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 280px;
  width: 100%;
  margin: 20px 0 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.header {
  position: absolute;
  width: 100%;
  top: 20px;
}

.el-icon-more {
  position: absolute;
  right: 0;
}

.date {
  position: absolute;
  display: inline;
  margin-left: 30px;
}

.selfHomework {
  margin-left: 100px;
  display: inline-block;
  background-color: #8c8c8c;
}

.main {
  position: absolute;
  top: 60px;
  margin-left: 100px;
  width: 100%;
  height: 60%;
}

.title {
  font-size: 20px;
}

.detail{
  display: inline-block;
  width: 500px;
  font-size: 10px;
  overflow: hidden;
}

.num{
  position: absolute;
  right: 80px;
  top: 0;
}

.havenot{
  color: #F56C6C;
}

.num p{
  font-size: 20px;
  display: inline-block;
  margin-right: 50px;
}

.dead{
  position: absolute;
  bottom: 0;
}

img{
  position: absolute;
  top: 50px;
  left: 50px;
  height: 70px;
  width: 60px;
}
</style>