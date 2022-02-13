<template>
  <div class="page-modal">
    <el-dialog
      v-model="isDialogVisible"
      :title="modalTitle"
      width="30%"
      center
      destroy-on-close
    >
      <basic-form v-bind="modalFormConfig" v-model="formData" />
      <slot></slot>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store"
import { ref, watch } from "vue"

// 定义parent component传来的config数据
const props = defineProps({
  modalFormConfig: {
    type: Object,
    required: true
  },
  formInitData: {
    type: Object,
    default: () => ({})
  },
  treeData: {
    type: Object,
    default: () => ({})
  },
  pageQueryInfo: {
    type: Object,
    default: () => ({})
  }
})

// 定义向parent component发送的事件
const emit = defineEmits(["confirmBtnClick"])

const isDialogVisible = ref(false)
const modalTitle = ref("")
const formData = ref({})

watch(
  () => props.formInitData,
  (newValue) => {
    for (const item of props.modalFormConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)

// Btn
const store = useStore()
const handleConfirmClick = () => {
  isDialogVisible.value = false

  if (Object.keys(props.formInitData).length === 0) {
    // newData Btn
    store.dispatch("system/addPageRowDataAction", {
      pageName: props.modalFormConfig.pageUrlName,
      newData: { ...formData.value, ...props.treeData },
      queryInfo: { offset: 0, size: props.pageQueryInfo["pageSize"] }
    })
  } else {
    // Edit Btn
    store.dispatch("system/editPageRowDataAction", {
      pageName: props.modalFormConfig.pageUrlName,
      dataID: props.formInitData.id,
      editData: { ...formData.value, ...props.treeData },
      queryInfo: {
        offset:
          (props.pageQueryInfo["currentPage"] - 1) *
          props.pageQueryInfo["pageSize"],
        size: props.pageQueryInfo["pageSize"]
      }
    })
  }
}

// 暴露给parent component 供 template Ref引用
defineExpose({
  isDialogVisible,
  modalTitle
})
</script>

<style scoped lang="scss">
::v-deep .basic-form {
  .el-form-item {
    @apply mb-1;
  }
  .el-select,
  .el-date-editor {
    @apply w-full;
  }
}

h1 {
  @apply text-blue-gray-400 font-bold;
}
.handle-btns {
  @apply text-right;
  .el-button {
    @apply bg-blue-800 text-blue-gray-200;
  }
}
</style>
