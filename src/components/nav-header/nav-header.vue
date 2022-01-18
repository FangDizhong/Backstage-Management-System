<template>
  <div class="nav-header">
    <div class="header-left">
      <fold-menu />
      <breadcrumb />
    </div>

    <div class="header-right">
      <dark-mode />
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.nav-header {
  @apply h-full w-full justify-between
  flex flex-row;
  .header-left {
    @apply h-full px-2.5
    flex flex-row;
  }
  .header-right {
    @apply h-full px-2.5
    flex flex-row;
  }
}
</style>
