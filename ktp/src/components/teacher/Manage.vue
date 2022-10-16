<template>
  <div class="wrapper">
    <div class="in">
      <div class="header">
        <div>
          <span class="title">学生管理系统</span>
          <el-button style="position: absolute;right: 0;top: 0; font-size: 12px">生成期末考试成绩</el-button>
        </div>
        <div style="margin-top: 60px;">
          <span class="deadline">截止 11月-18号24:22</span>
          <span style="position:absolute; right: 0; bottom: 0">
            <el-link>
              <span><p class="el-icon-setting"></p> 查重设置  </span>
            </el-link>
            <el-button type="primary" style="margin: 0 10px;">对学生隐藏成绩<span class="el-icon-arrow-down"/></el-button>
            <div style="display:inline-block; width: 150px;margin-left: 20px;">
              <el-input placeholder="学号，姓名" suffix-icon="el-icon-search" style="display:inline-block; "/>
            </div>
          </span>
        </div>
      </div>
    </div>
    <el-divider/>
    <div class="in">
      <span style="display:flex;justify-content:flex-start;margin-left: -10px;">已筛选出0人 (全班共{{length}}人)</span>
      <span style="display:flex; justify-content: flex-end"><el-link> 收起 </el-link></span>

    </div>
    <el-divider/>
    <div class="in">
      <el-table
          :data="tableData"
          stripe
          style="width: 100%"
      @row-click="check">
        <el-table-column width="50">
          <input type="checkbox">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="id"
            label="学号"
            width="180">
        </el-table-column>

        <el-table-column
            prop="score"
            label="批改"
            width="120">
        </el-table-column>

        <el-table-column
            prop="submitDate"
            label="日期">
        </el-table-column>
        <el-table-column>
          <el-link type="primary">进入批阅</el-link>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Manage",
  data() {
    return {
      tableData:JSON.parse(sessionStorage.getItem('submitHomework')) ||'',
      length:JSON.parse(sessionStorage.getItem('classPeople')).length-1
    }
  },
  mounted() {
    setTimeout(()=>{
      this.tableData = JSON.parse(sessionStorage.getItem('submitHomework'))
    },500)
    setTimeout(()=>{
      this.tableData = JSON.parse(sessionStorage.getItem('submitHomework'))
    },1000)

  },
  methods:{
    check(data){
      sessionStorage.setItem('uid',data.uid)

      this.$router.push('/check')
    }
  },
  computed:{

  }
}
</script>

<style scoped>
.wrapper {
  width: 70%;
  margin: auto;
  border-right: #8c8c8c 1px solid;
  border-left: #8c8c8c 1px solid;
  border-top: #8c8c8c 1px solid;
  border-bottom: #8c8c8c 1px solid;
  position: relative;
}

.in {
  width: 90%;
  margin: auto;
}

.header {

  margin-top: 20px;
  position: relative;
}

.title {
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  margin-left: -10px;
}

.deadline {
  background-color: #bbb5b5;
}

.manage {
  border: #b2b2b2 1px solid;
}

.limit {
  border-bottom: #8c8c8c 1px dotted;
  height: 40px;

}

.limit span {
  width: 20%;
  background-color: #E4E7ED;
  display: inline-block;
  height: 40px;
  text-align: center;
  line-height: 40px;
}

.limit p {
  display: inline-block;
}

</style>