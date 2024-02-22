<template>
  <div>
    <h1>我是app</h1>
    <el-button type="primary" :icon="Edit">Primary</el-button>
    <el-button type="primary">Primary</el-button>
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <Modal />
</template>

<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import Modal from '@/Modal.vue'

const currentPage4 = ref(4)

const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped></style>
