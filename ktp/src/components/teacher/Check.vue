<template>
  <div>
    <div class="header" style="background-color: #000000;height: 60px;position:relative;">

      <div style="width: 200px;position:absolute;right: 180px;">
        <el-input v-model="input" placeholder="分数" type="number"></el-input>
      </div>
      <el-button style="position:absolute;right: 100px" @click.native="getScore">提 交</el-button>
    </div>
    <div ref="file">

    </div>
  </div>
</template>

<script>
import axios from 'axios'

const docx = require('docx-preview');
window.JSZip = require('jszip')
export default {
  name: "Check",
  data() {
    return {
      input: ''
    }
  },
  methods: {
    async getScore() {
      let params = new URLSearchParams()
      params.append("uid", sessionStorage.getItem("uid"))
      params.append("score", this.input)
      await this.$store.dispatch('getScore', params)
      await this.$router.push('/teacherHomeWorkDetail')
    }
  },
  created() {
    axios({
      method: 'get',
      responseType: 'blob', // 设置响应文件格式
      params: {uid: sessionStorage.getItem('uid')},
      url: '/api/word',
    }).then(({data}) => {
      docx.renderAsync(data, this.$refs.file) // 渲染到页面预览
    })

  }
}
</script>

<style scoped>


</style>