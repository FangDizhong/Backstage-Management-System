<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
  </div>
</template>

<script setup lang="ts">
// search form的配置
import { useStore } from "@/store"
import { searchFormConfig } from "./config/search.config"

// 获取table数据
const store = useStore()
// 触发store里的action里的方法，
// 去提交到mutation，再修改到state
store.dispatch("system/getPageListAction", {
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10
  }
})
</script>

<style scoped></style>
