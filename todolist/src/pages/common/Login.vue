<template>
  <div class="body">
    <div class="login">
      <p class="userLogin">账号登录</p>
      <p class=""></p>
      <div class="input">
        <el-form>
          <el-input v-model="id" placeholder="账号" maxlength="11"></el-input>
          <div class="divide"></div>
          <el-input v-model="password" placeholder="密码" type="password"></el-input>
        </el-form>
        <div class="other">
          <p class="check">
            <input type="checkbox">下次自动登录
          </p>
          <p class="forget">
            忘记密码?
          </p>
        </div>
        <el-button type="primary" class="enter" @click="login">登录</el-button>
      </div>
      <p class="register">没有账号，
        <el-link type="primary" @click="register">去注册</el-link>
      </p>
    </div>
  </div>


</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      id: this.$route.params.id||'',
      password: '',
    }
  },
  methods: {
    register() {
      this.$router.push('/register');
    },
    async login() {
      const {id, password} = this
      let params = new URLSearchParams();
      params.append("id", id)
      params.append("password", password)
      try {
        if (!(id||password)){
          alert('请输入工号与密码')
          return
        }
        id && password && (await this.$store.dispatch("userLogin", params))
        if (this.$store.state.id!==''){
          if (sessionStorage.getItem("status")==='s'){
            await this.$router.push('/studentHome');
          }else {
            await this.$router.push('/teacherHome');
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

.register {
  margin-top: 10px;
  margin-left: 310px;
}

.login {
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 70px;
  height: 400px;
  width: 500px;
  background-color: white;
}

.userLogin {
  position: fixed;
  font-size: 30px;
  margin-top: 25px;
  margin-left: 61px;
}

.other {
  height: 0;
}

.check {
  position: fixed;
  margin-top: 20px;
}

.forget {
  position: fixed;
  margin-top: 20px;
  margin-left: 280px;
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
  margin: 70px auto auto;
}
</style>