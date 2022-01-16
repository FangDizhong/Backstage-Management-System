<template>
  <div class="main">
    <el-container class="main-content">
      <!-- 菜单 -->
      <el-aside width="210px">
        <nav-menu />
      </el-aside>

      <el-container class="page">
        <!-- 头部 -->
        <el-header class="page-header">
          <dark-mode />
          Header</el-header
        >
        <!-- 主体内容 -->
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.main {
  @apply fixed top-0 left-0 w-full h-full;

  .main-content {
    @apply h-full bg-gray-200;

    .el-aside {
      @apply bg-[#001529]
      text-left text-white
      cursor-pointer overscroll-x-none;
      // line-height: 200px;
    }
    .page {
      @apply h-full;

      .page-header {
        @apply h-48px flex
        text-center items-center;
      }
      .page-content {
        @apply h-[calc(100%+48px)] bg-white
        text-center;
      }
    }
  }
}
</style>
