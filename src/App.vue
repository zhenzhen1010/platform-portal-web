<template>
  <div>
    <h1>测试sass</h1>
    <!-- svg: 图标外层容器节点，内部需要与use标签结合使用-->
    <svg-icon name="home" color="red" width="40px" height="40px"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped lang="scss">
div {
  h1 {
    color: red;
  }
}
</style>
