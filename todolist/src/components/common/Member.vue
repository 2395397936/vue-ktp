<template>
  <div class="wrapper">
    <div class="header">
      <el-row>
        <el-button>导入成员</el-button>
        <el-button>下载成员信息 <p class="el-icon-cloudy"></p></el-button>
        <el-button>成员退课记录 <p class="el-icon-s-marketing"></p></el-button>
        <div class="input">
          <el-input placeholder="姓名,学号" suffix-icon="el-icon-search"/>
        </div>
        <el-divider></el-divider>
      </el-row>

    </div>

    <el-container style="border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="1-1" ref="first" @click="teacher">教学团队({{teachers.length}})</el-menu-item>
          <el-menu-item index="1-2" @click="student">全部学生({{students.length}})</el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: left; font-size: 12px">
          <span style="font-size: 18px">
            {{ classPeople[0].status==='s'?"全部学生"+students.length:"教师团队"+teachers.length }}人
          </span>
            <span class="limit">
              <el-checkbox>人数限制</el-checkbox>
              &nbsp;&nbsp;&nbsp;&nbsp;<el-switch active-text="不允许退课" v-model="value1"></el-switch>
            </span>
        </el-header>
          <el-header v-show="classPeople[0].status==='s'" style="text-align: left; font-size: 12px; background-color: white;border-bottom: #e3e3e3 1px solid;">
            &nbsp;&nbsp;<input type="checkbox"></input>&nbsp;&nbsp;
            本页全选 已选（0）人
            &nbsp;&nbsp;&nbsp;&nbsp;
            <el-button type="primary" disabled>删除成员</el-button>
            <el-button type="primary" disabled>群发成员</el-button>
          </el-header>


        <el-main>
          <el-table :data="classPeople">
            <el-table-column width="50" label="选择">
              <input type="checkbox"></input>
            </el-table-column>
            <el-table-column width="100" label="头像">
              <p class="el-icon-user-solid"></p>
            </el-table-column>
            <el-table-column prop="id" width="120" label="学号">
            </el-table-column>
            <el-table-column prop="name" label="名字" width="100">
            </el-table-column>
            <el-table-column prop="username" label="昵称" width="140">
            </el-table-column>
            <el-table-column prop="joinDate" label="加入日期" >
            </el-table-column>
            <el-table-column width="50">
              <p class="el-icon-more-outline"></p>
            </el-table-column>

          </el-table>
        </el-main>

      </el-container>
    </el-container>


  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Member",
  data() {
    return {
      value1: true,
      classPeople: [{status:''}],
    }
  },
  methods:{
    student(){
        this.classPeople=this.$store.getters.students
    },
    teacher(){
      this.classPeople=this.$store.getters.teachers
    }
  },
  computed:{
    ...mapGetters(['teachers','students'])
  },
  mounted() {

      this.$emit('test');

  }
}
</script>

<style scoped>
.wrapper {
  width: 70%;
  margin: auto;
}

.limit {
  position: absolute;
  right: 10px;
}

.input {
  width: 200px;
  display: inline-block;
  position: absolute;
  right: 0;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  position: relative;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>