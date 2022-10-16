<template>
  <div class="body">
    <div class="register">
      <p class="userLogin">账号注册</p>

      <div v-show="show">
        <div class="tip">
          请选择您日常教学中身份
        </div>
        <div class="student">
          <p class="el-icon-user"></p>
          <el-button type="primary" @click="student">我是学生</el-button>
        </div>
        <div class="teacher">
          <p class="el-icon-user-solid"></p>
          <el-button type="primary" @click="teacher">我是老师/助教</el-button>
        </div>
      </div>


      <div v-show="!show">
        <p class=""></p>
        <div class="input">
          <el-form>
            <el-input v-model="name" placeholder="名字"></el-input>
            <div class="divide"></div>
            <el-input v-model="id" placeholder="工号" maxlength="11"></el-input>
            <div class="divide"></div>
            <el-input v-model="password" placeholder="密码"></el-input>
          </el-form>
          <el-button type="primary" class="enter" @click="register">注册</el-button>
        </div>
      </div>

      <p class="login">
        <span style="position:absolute;bottom: 0;right: 20px;width: 100px;">已有账号，</span>
        <el-link type="primary" @click="login">去登录</el-link>
      </p>
    </div>
  </div>

</template>

<script>
import {register} from "@/api";

export default {
  name: "Register",
  data() {
    return {
      show: true,
      status: '',
      name: '',
      id: '',
      password: '',
    }
  },
  methods: {

    login() {
      this.$router.push("/login")
    },

    teacher() {
      this.status = 't'
      this.show = !this.show
    },
    student() {
      this.status = 's'
      this.show = !this.show
    },
    async register() {
      const {id, password, name, status} = this
      let params = new URLSearchParams();
      params.append("id", id)
      params.append("name", name)
      params.append("status", status)
      params.append("password", password)
      try {
        if (!(id || password || name)) {
          alert('请输入完整信息')
          return
        }
        if (id.length!==11){
          alert('请输入11位工号')
          return
        }
        if (password.length>6){
          alert('请输入6位以下密码')
          return
        }
        if (name>4){
          alert('名字过长')
          return
        }
        let result = await register(params)
        if (result.status === 200) {
          if (result.data === 'success') {
            await this.$router.push({
              name:'login',
              params:{id}
            })
          } else {
            alert(result.data)
          }
        }
      } catch (error) {
        alert(error.message);
      }
    },
  }
}
</script>

<style scoped>
.body {
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url("../../../public/school.jpeg");
  background-size: 100% 100%;
}

.el-icon-user-solid, .el-icon-user {
  margin-right: 35px;
  font-size: 45px;
}

button {
  width: 300px;
  align-content: center;
}

.tip {
  position: fixed;
  font-size: 15px;
  margin-top: 90px;
  margin-left: 61px;
}

.student {
  position: fixed;
  align-content: center;
  margin-left: 30px;
  margin-top: 150px;
}

.teacher {
  position: fixed;
  margin-left: 30px;
  margin-top: 240px;
}

.login {
  position: absolute;
  bottom: 30px;
  right: 40px;;
}

.register {
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 70px;
  height: 430px;
  width: 500px;
  background-color: white;
}

.userLogin {
  position: fixed;
  font-size: 30px;
  margin-top: 25px;
  margin-left: 61px;
}

.input {
  width: 75%;
  margin: 130px auto auto;
}

.divide {
  height: 30px;
}

.enter {
  width: 100%;
  margin: 20px auto auto;
}
</style>