<template>
  <div class="logo" v-if="setting.showLogo">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts" name="Logo">
// import { ref, reactive, toRefs, onMounted} from 'vue'
// import { ref } from 'vue';
import setting from '@/setting';
// let title = import.meta.env.VITE_APP_TITLE;
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  //   background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $base-menu-title-fontSize;
    margin-left: 10px;
  }
}
</style>
