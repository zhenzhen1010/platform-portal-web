<template>
  <!-- <div>{{ menuList }}</div> -->
  <template v-for="item in menuList" :key="item.path">
    <el-menu-item
      v-if="(!item.children || !item.children.length) && !item.meta.hidden"
      :index="item.path"
      @click="goRoute"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 一层子菜单 -->
    <el-menu-item
      v-if="item.children && item.children.length === 1 && !item.meta.hidden"
      :index="item.children[0].path"
      @click="goRoute"
    >
      <template #title>
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 子菜单类型配置 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 1 && !item.meta.hidden"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menu-list="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts" name="Menu">
// 引入路由器
import { useRouter } from 'vue-router';
// 获取父组件传递过来的全部路由数组
defineProps(['menuList']);

// 创建路由器
let $router = useRouter();
// 点击菜单回调
function goRoute(vc: any) {
  console.log($router, vc);
  $router.push(vc.index);
}
</script>
<style scoped lang="scss"></style>
