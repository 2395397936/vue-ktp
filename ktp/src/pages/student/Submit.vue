<template>
  <div>
    <div class="header">
      <el-button type="primary" round class="class" style="margin-left: 100px;">javaee架构与程序设计1,2班</el-button>
      <div class="head">
        <p class="el-icon-bell"></p>
        <p class="el-icon-user-solid"></p>
      </div>
      <el-tabs class="tab" v-model="activeName" @tab-click="handleClick" stretch>
        <el-tab-pane label="提交作业" name="first">
          <div class="submit">
            <p class="title">{{ this.$route.params.title }}</p>
            <div style="margin-top: 30px;position: relative">
              <span class="deadline">截止日期：{{ this.$route.params.deadDate }}</span>
              <span class="type">个人作业</span>
              <span class="el-icon-picture-outline"><el-link>查看谁提交了</el-link></span>
            </div>
            <div style="margin-top: 50px;position: relative">
              <el-button type="primary" style="width: 100px;" @click.native="submit">提交</el-button>
              <span style="position:absolute;right: 10px;top:15px">未完成</span>
            </div>
            <div style="margin-top: 30px;border: #8c8c8c 1px solid">
              <el-upload
                  class="upload-demo"
                  style="margin: 30px"
                  drag
                  action="api/submitHomework"
                  :name="name"
                  :data="data"
                  :auto-upload="true"
                  :file-list="fileList"
                  :headers="{'ContentType':'multipart/form-data'}"
                  multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">添加作业文件，<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">支持文档，代码，图片压缩格式</div>
              </el-upload>
            </div>
            <el-input
                type="textarea"
                :rows="2"
                style="background-color: #8c8c8c"
                placeholder="作业留言,仅老师可看"
                v-model="textarea">
            </el-input>
            <el-link class="el">查看提交日志 <span class="el-icon-arrow-right"></span></el-link>
          </div>
        </el-tab-pane>
        <el-tab-pane label="作业讨论" name="second">作业讨论</el-tab-pane>
      </el-tabs>
    </div>
    <div class="back">
      <el-link @click.native="back">
        <span class="el-icon-arrow-left"/>
        <span class="text">返回</span>
      </el-link>
    </div>
  </div>

</template>

<script>


export default {
  name: "Submit",
  data() {
    return {
      activeName: 'first',
      dialogImageUrl: '',
      dialogVisible: false,
      textarea: '',
      fileList: [],
      data:{
        id:sessionStorage.getItem("id"),
        cid:JSON.parse(sessionStorage.getItem("current")).cid,
        hid:sessionStorage.getItem("currentHid")
      },
      name: 'homework'
    };
  },
  methods: {
    handleClick(tab, event) {

    },
    back() {
      this.$router.history.go(-1)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submit() {
      this.$router.go(-1)
    }
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

.submit {
  width: 70%;
  margin: 30px auto auto;
  height: 600px;
}

.title {
  font-size: 21px;
}

.deadline {
  background-color: #c7c1c1;
}

.type {
  margin-left: 15px;
  background-color: #c7c1c1;
}

.el-icon-picture-outline {
  position: absolute;
  right: 10px;
  top: 5px;
}


</style>