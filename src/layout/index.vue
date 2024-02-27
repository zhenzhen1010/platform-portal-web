<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo />
      <!-- 展示菜单 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu background-color="#001529" text-color="#fff">
          <Menu :menu-list="userStore.menuRoutes"></Menu>
          <!-- <el-menu-item index="1">首页</el-menu-item> -->
          <!-- <el-menu-item index="2">数据大屏</el-menu-item> -->
          <!-- 折叠菜单 -->
          <!-- <el-sub-menu index="3">
            <template #title>权限管理</template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>
          </el-sub-menu> -->
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar"></div>
    <!-- 内容展示区 -->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts" name="Layout">
// import { ref, reactive, toRefs, onMounted } from 'vue';
// 引入logo组件
import Logo from './logo.vue';
// 引入菜单列表组件
import Menu from './menu.vue';
// 内容区组件
import Main from './main.vue';
// 获取用户相关的菜单数据
import useUserStore from '@/store/modules/user';

let userStore = useUserStore();
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: skyblue;
  color: #fff;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: 0px;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0;
    left: $base-menu-width;
    background-color: rgb(31, 80, 99);
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>
