<template>
  <div class="login_container">
    <!-- 登录盒子 -->
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_from"
          ref="ruleFormRef"
          :model="loginFrom"
          :rules="rules"
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
              @click="login(ruleFormRef)"
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
import type { FormInstance, FormRules } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue';
// 引入路由vue-router
import { useRouter } from 'vue-router';
// 消息提示组件
import { ElNotification } from 'element-plus';
// 引入pinia
import useUserStore from '@/store/modules/user';
import { getTime } from '@/utils/titme.ts';

interface RuleForm {
  username: string;
  password: string;
}
// 定义表单组件ref
const ruleFormRef = ref<FormInstance>();
// 定义表单数据
const loginFrom = reactive<RuleForm>({
  username: '',
  password: '',
});

// 定义表单校验规则
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '账号必填', trigger: 'blur' },
    // { min: 6, max: 16, message: '用户名长度', trigger: 'blur' },
  ],
  password: [{ required: true, message: '密码必填', trigger: 'blur' }],
});

let userStore = useUserStore();

// 获取路由器
let $router = useRouter();

// 登录按钮加载状态
let loading = ref(false);

// 获取账号密码的输入
// let loginFrom = reactive({
//   username: '',
//   password: '',
// });
// let username = ref('');
// let password = ref('');

async function login(formEl: FormInstance | undefined) {
  // 提交表单先校验账号密码必填
  console.log(1111, formEl);
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    // 校验通过
    if (valid) {
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
    } else {
      // 校验不通过
      ElNotification({
        type: 'error',
        message: '请输入账号和密码',
      });
    }
  });
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
