<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }"> homepage </el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">promotion management</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item @click="action1()">action1</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useStore } from "@/store"
import { computed } from "vue"
import { mapPathToMenu } from "@/utils/map-to-routes"
import { useRoute, useRouter } from "vue-router"

// store
const store = useStore()
const userMenus = computed(() => {
  // 在这里写menu的逻辑才会每次刷新重新计算
  return store.state.login.userMenus
})

// router
const router = useRouter()
const route = useRoute()
const currentPath = route.path
const currentPath2 = router.currentRoute.value

// menu
const menu = mapPathToMenu(userMenus.value, currentPath)

const action1 = () => {
  console.log(currentPath, menu.name)
}
</script>

<style scoped lang="scss">
.breadcrumb {
  @apply h-full p-1.5
   flex items-center;
}
</style>
