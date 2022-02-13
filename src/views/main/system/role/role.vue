<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :pageName="contentTableConfig.pageUrlName"
      @newDataBtnClick="handleNewDataBtnClick"
      @editBtnClick="handleEditBtnClick"
    />
    <page-modal
      ref="pageModalRef"
      :modalFormConfig="modalFormConfig"
      :formInitData="defaultInfo"
      :treeData="checkedTreeData"
      :pageQueryInfo="pageQueryInfo"
    >
      <el-tree
        ref="elTreeRef"
        :data="allMenus"
        show-checkbox
        node-key="id"
        :default-expanded-keys="menuKeys"
        :default-checked-keys="menuKeys"
        :props="{ children: 'children', label: 'name' }"
        @check="handleCheckChange"
      />
    </page-modal>
  </div>
</template>

<script setup lang="ts">
// search-form,content-table的配置
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalFormConfig } from "./config/modal.config"

// hooks: 父组件处理子组件的函数·变量集合（当监听到另外的子组件的事件时）
import { useSearchPageContent } from "@/hooks/useSearchPageContent"
import { useModifyInPageModal } from "@/hooks/useModifyInPageModal"

import { useStore } from "@/store"
import { computed, ref, nextTick } from "vue"
import { mapMenuLeafToKeys } from "@/utils/map-menus"

import { ElTree } from "element-plus"

// 1 Hooks handling page-search component
const [pageContentRef, handleResetClick, handleSearchClick] =
  useSearchPageContent()

// 2. Callbacks & Hooks handling page-modal component
// show checked menus in el-tree
const menuKeys = ref<number[]>([])
const newDataBtnCallback = () => {
  menuKeys.value = []
}
const editBtnCallback = (rowData: any) => {
  menuKeys.value = mapMenuLeafToKeys(rowData.menuList)
}

// 2.0 another-method
// const elTreeRef = ref<InstanceType<typeof ElTree>>()
// const editBtnCallback = (rowData: any) => {
//   const leafKeys = mapMenuLeafToKeys(rowData.menuList)
//   // use nextTick CB Fn https://vuejs.org/api/general.html#definecustomelement
//   // because when editBtnCallback clicked, page-modal with elTree haven't updated yet
//   nextTick(() => {
//     elTreeRef.value?.setCheckedKeys(leafKeys, false)
//   })
// }

const [
  pageModalRef,
  defaultInfo,
  pageQueryInfo,
  handleNewDataBtnClick,
  handleEditBtnClick
] = useModifyInPageModal(newDataBtnCallback, editBtnCallback)

// 3 Checked tree data input into page-modal dialog
const store = useStore()
const allMenus = computed(() => store.state.entireMenuList)

const checkedTreeData = ref({})
const handleCheckChange = (data1: any, data2: any) => {
  // 组件中我们已经设置node-key="id"
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  // menuList名字不能乱改，对应传给后端API字段名字
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  // menuList:<id>[]
  checkedTreeData.value = { menuList }
}
</script>

<style scoped lang="scss">
.el-tree {
  @apply px-10;
}
</style>
