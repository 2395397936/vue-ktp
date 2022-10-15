<template>
  <div style="position:relative;">
    <el-button type="primary" plain @click="publicVisible=!publicVisible">发布个人作业</el-button>
    <el-button type="primary" plain>发布小组作业</el-button>
    <div class="download">
      <el-link type="primary">
        下载全部作业<p class="el-icon-download"></p>
      </el-link>
    </div>


    <div v-show="publicVisible" style="margin-top: 30px;">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="作业名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="作业描述">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="截止日期">
          <el-col :span="11">
            <el-date-picker type="date" v-model="form.date" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>

        </el-form-item>
        <el-form-item label="是否查重">
          <el-switch v-model="form.check"></el-switch>

          <el-form-item label="查重阈值" style="width: 140px; display: inline-block">
            <el-input v-model="form.percent"></el-input>
          </el-form-item>
          %
          <br/><br/>
<!--          <el-checkbox-group v-model="form.type">-->
            <el-checkbox label="查重率高于" name="type" checked></el-checkbox>
            <el-form-item style="width: 60px; display: inline-block;margin-left: 5px;">
              <el-input v-model="form.percent"></el-input>
            </el-form-item>
            <div style="position:absolute; left: 150px;bottom: -12px;">
              <el-form-item label="%自动打回" style="display:inline-block" label-width="100px"/>
            </div>
<!--          </el-checkbox-group>-->
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布个人作业</el-button>
          <el-button @click="clear">取消</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <teacher-homework-item v-for="item in publicHomework"
                             :key="item.hid"
                             :publicHomework="item"
                             style="cursor:pointer;"/>
    </div>
  </div>
</template>

<script>
import TeacherHomeworkItem from "@/components/teacher/TeacherHomeworkItem";
import {nanoid} from 'nanoid'

export default {
  name: "TeacherHomework",
  components: {
    TeacherHomeworkItem
  },
  data() {
    return {
      publicVisible: false,
      form: {
        name: '',
        date: '',
        check: true,
        desc: '',
        percent: '50',
      },
      publicHomework:JSON.parse(sessionStorage.getItem("publicHomework"))||[]

    }
  },
  methods: {
    onSubmit() {
      let date =  new Date(this.form.date)
      let deadDate = (date.getYear() + "").substring(1) + '/' + (date.getMonth() + 1) + '/' + date.getDate();
      let params = new URLSearchParams()
      params.append("deadDate", deadDate)
      params.append("id", sessionStorage.getItem("id"))
      params.append("cid", JSON.parse(sessionStorage.getItem("current")).cid)
      params.append("detail", this.form.desc)
      params.append("homeworkName", this.form.name)
      params.append('hid', nanoid().substring(8))
      this.$store.dispatch('public',params)
      this.publicVisible = false
      this.clear()
    },
    clear() {
      this.form = {
        name: '',
        region: '',
        date: '',
        check: true,
        type: [],
        resource: '',
        desc: '',
        percent: '50'
      }
    },


  }
}
</script>

<style scoped>
.download {
  position: absolute;
  top: 0;
  right: 0;
}

</style>