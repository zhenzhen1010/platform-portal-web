<template>
  <div class="login_container">
    <!-- 登录盒子 -->
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_from"
          :model="loginFrom"
          :rules="rules"
          ref="loginFormRef"
        >
          <h1>Hello</h1>
          <h2>欢迎进入系统</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginFrom.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              show-password
              :prefix-icon="Lock"
              v-model="loginFrom.password"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              :loading="loading"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="Login">
import { reactive, ref } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';
// 引入路由vue-router
import { useRouter } from 'vue-router';
// 消息提示组件
import { ElNotification } from 'element-plus';
// 引入pinia
import useUserStore from '@/store/modules/user';
import { getTime } from '@/utils/titme.ts';

let userStore = useUserStore();

// 获取表单元素
let loginFormRef = ref();

// 获取路由器
let $router = useRouter();

// 登录按钮加载状态
let loading = ref(false);

// 获取账号密码的输入
let loginFrom = reactive({
  username: '',
  password: '',
});
// let username = ref('');
// let password = ref('');
// 自定义校验密码
/**
 * @rule 校验规则对象
 * @value 表单元素文本内容
 * @callback 回调函数
 */
const validatePass = (rule: any, value: any, callback: any) => {
  console.log(rule);
  if (value === '') {
    callback(new Error('请输入密码！'));
  } else {
    if (value.length < 5) {
      callback(new Error('密码不少于6位！'));
    }
    callback();
  }
};
// 定义表单校验规则
const rules = {
  username: [{ required: true, message: '账号必填', trigger: 'change' }],
  // password: [{ required: true, message: '密码必填', trigger: 'blur' }],
  // 自定义校验规则
  password: [{ required: true, validator: validatePass, trigger: 'blur' }],
};
// 登陆按钮回调
async function login() {
  // 菜单相关校验通过再发请求
  await loginFormRef.value.validate();
  console.log('点击登录', loginFrom);
  // 点击登录开启按钮加载状态
  loading.value = true;
  try {
    // 登录成功
    await userStore.userLogin(loginFrom);
    // 跳转路由
    $router.push('/');
    // 登录成功提示
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getTime()}好！`,
    });
    // 关闭加载状态
    loading.value = false;
  } catch (error) {
    // 登录失败提示
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    });
    // 关闭加载状态
    loading.value = false;
  }
}
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_from {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: #fff;
      font-size: 40px;
    }
    h2 {
      color: #fff;
      font-size: 20px;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
