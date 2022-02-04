<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :contentTableConfig="contentTableConfig"
      :pageName="contentTableConfig.pageUrlName"
    />
  </div>
</template>

<script setup lang="ts">
// search-form,content-table的配置
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
</script>

<style scoped></style>
