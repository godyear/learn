<template>
  <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div class="login-card">
      <el-card style="width: 500px; height: 300px" class="flex-row-wrap">
        <h3 style="text-align: center">教务管理系统</h3>
        <!-- 选择老师、学生、教务登陆 -->
        <div class="first-row__div--content"></div>
        <!-- 账号用户名 -->
        <div class="second-row__div--content">
          <div style="width: 100%">
            <span for="" style="margin-right: 10px; margin-left: 50px">账户</span>
            <el-input
              style="width: 60%"
              ref="username"
              prefix-icon="el-icon-user"
              v-model="user.username"
              placeholder="用户名"
              name="username"
              type="text"
              tabindex="1"
              autocomplete="off"
              clearable
            />
          </div>
          <div style="width: 100%; margin-top: 20px">
            <span for="" style="margin-right: 10px; margin-left: 50px">密码</span>
            <el-input
              style="width: 60%"
              ref="userpassword"
              prefix-icon="el-icon-view"
              v-model="user.password"
              placeholder="密码"
              name="username"
              type="password"
              tabindex="1"
              autocomplete="off"
              clearable
            />
          </div>
        </div>
        <!-- 登录按钮 -->
        <div style="width: 100%; margin-top: 20px" class="flex-row-center">
          <el-button type="primary" @click="login('student')">学生登陆</el-button>
          <el-button type="primary" @click="login('teacher')">教师登录</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 用户信息
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    /**
     * 登陆按钮
     * @param { String } 判断登陆身份
     */
    login(str) {
      if (str === 'student') {
        this.$router.push('/student')
      } else if(str === 'teacher') {
        this.$router.push('/teacher')
      }
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/flex.css");
.login-card {
  display: flex;
  justify-content: center;
  margin-top: 200px;
}

.first-row__div--content {
  width: 100%;
}

.second-row__div--content {
  width: 100%;
  height: 44%;
  background-color: #ebeef5;
  padding-top: 20px;
}

>>> .el-card {
  background-color: #e4e7ed;
}

>>> .el-card__body {
  padding: 20px;
  padding-top: 0px;
  width: 100%;
}
</style>
