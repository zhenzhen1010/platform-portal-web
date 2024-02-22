<template>
  <svg :style="{ width, height }">
    <!-- xlink: href 执行用哪一个图标 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
// 接收父组件传递的参数
defineProps({
  // href属性值前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供的图标名字
  name: String,
  // 接收父组件传递的颜色
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
});
</script>

<style scoped></style>
