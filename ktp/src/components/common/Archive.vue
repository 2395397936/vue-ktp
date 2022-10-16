<template>
  <div style="position:relative; display: inline-block;margin-left: 40px;">
    <img src="../../../public/img/img_4.png" alt="">
    <span class="title">{{ course.cname }}</span>
    <span class="status">角色：{{ user.status === 's' ? '学生' : '老师' }}</span>
    <el-dropdown>
      <span class="more"><el-link><p class="el-icon-more-outline"/></el-link></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="drop">删除</el-dropdown-item>
        <el-dropdown-item @click.native="restore">恢复</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>

<script>
export default {
  name: "Archive",
  props: ['course'],
  data(){
    return{
      user:this.$store.state.user
    }
},
  methods: {
    drop() {
      if (!confirm("你确定要删除" + this.course.cname)) {
        return false
      }
      let params = new URLSearchParams()
      params.append("cid", this.course.cid);
      params.append("id", sessionStorage.getItem("id"));
      this.$store.dispatch("delete", params)
    },
    async restore() {
      if (!confirm("你确定要恢复" + this.course.cname)) {
        return false
      }
      let params = new URLSearchParams()
      params.append("cid", this.course.cid);
      params.append("id", sessionStorage.getItem("id"));
      await this.$store.dispatch("restore", params)
    },

  }
}
</script>

<style scoped>
.title {
  font-size: 20px;
  left: 20px;
  position: absolute;
  color: white;
  top: 20px;
}

.status {
  position: absolute;
  left: 20px;
  font-size: 14px;
  color: white;
  bottom: 20px;
}

.more {
  position: absolute;
  right: 40px;
  bottom: 15px;
  color: white;
}

.el-icon-more-outline {
  font-size: 22px;
  color: white;
}
</style>