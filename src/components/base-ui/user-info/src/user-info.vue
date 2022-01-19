<template>
  <el-dropdown class="user-info">
    <span class="el-dropdown-link">
      <el-avatar
        size="small"
        src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
      ></el-avatar>
      {{ userName }}
      <i-ep-arrow-down />
    </span>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item> <i-ep-avatar />Log Out </el-dropdown-item>
        <el-dropdown-item divided>
          <i-ep-infoFilled /> User Info
        </el-dropdown-item>
        <el-dropdown-item disabled>
          <i-ep-platform />
          System Management
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useStore } from "@/store"
import { computed } from "vue"

const store = useStore()
const userName = computed(() => store.state.login.userInfo.name)
</script>

<style scoped lang="scss">
.el-dropdown-link {
  @apply h-full p-1.5
   flex items-center;
}
svg,
.el-avatar {
  @apply m-1.5;
}
</style>
