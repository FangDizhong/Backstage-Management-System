<template>
  <div class="page-search">
    <basic-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>Advanced Search</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button><i-ep-Refresh /> Reset </el-button>
          <el-button><i-ep-search /> Search </el-button>
        </div>
      </template>
    </basic-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
// 绑定可响应式的表单数据
const formData = ref({
  id: "",
  name: "",
  password: "",
  sports: "",
  createTime: ""
})
</script>

<style scoped lang="scss">
h1 {
  @apply text-blue-gray-400 font-bold p-2;
}
.handle-btns {
  @apply text-right pr-[40px] pb-[30px];
  .el-button {
    @apply bg-blue-800 text-blue-gray-200;
  }
}
</style>
