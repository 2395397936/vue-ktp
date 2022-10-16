<template>
  <div class="round">
    <div class="header">
      <p class="selfHomework">个人作业</p>
    </div>
    <div class="main">
      <p class="title">{{publicHomework.homeworkName}}</p>
      <div class="detail">javaee小组作业</div>

      <div class="dead">
        截止日期:{{ publicHomework.deadDate }}&nbsp;&nbsp;&nbsp;&nbsp; 0条讨论
      </div>

      <div class="submit"><el-button type="primary" @click="toSubmit">上传作业</el-button></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "TeacherHomeworkItem",
  methods:{
    toSubmit(){
      sessionStorage.setItem('currentHid',this.publicHomework.hid)
      this.$router.push({
        name:'submit',
        params:{
          deadDate: this.publicHomework.deadDate,
        title:this.publicHomework.homeworkName}
      })
    },
  },
  props:['publicHomework']
}
</script>

<style scoped>
.round {
  position: relative;
  height: 240px;
  width: 100%;
  margin-top: 20px;
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
  margin-left: 50px;
  display: inline-block;
  background-color: #8c8c8c;
}

.main {
  position: absolute;
  top: 60px;
  margin-left: 50px;
  width: 100%;
  height: 60%;
}

.title {
  margin-top: 20px;
  font-size: 20px;
}

.detail{
  display: inline-block;
  margin-top: 50px;
  font-size: 13px;
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

.submit{
  position: absolute;
  bottom: 0;
  right: 100px;
}

</style>