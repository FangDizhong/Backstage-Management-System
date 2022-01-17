<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@\assets\img\logo.svg" alt="logo" />
      <span class="title">Ask Online</span>
    </div>

    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#1e293b"
      text-color="#b7bdc3"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- type为1说明有下一级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的下一级【标题】 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <i-ep-monitor />
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单的下一级【内容】 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
                <template #title>
                  <i v-if="subitem.icon" :class="subitem.icon"></i>
                  <span>{{ subitem.name }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- type为2说明没有下一级菜单，直接展示 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
// vuex -ts 兼容=>pinia
// import { useStore } from "vuex"
// 用自己封装的useStore函数解决Vuex的TS兼容问题
import { useStore } from "@/store"

export default defineComponent({
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    return {
      userMenus
    }
  }
})
</script>

<style scoped lang="scss">
.nav-menu {
  @apply h-full bg-blue-gray-900;

  .logo {
    @apply flex flex-row justify-start items-center
    h-48px py-10px px-10px;
    .img {
      @apply h-full my-0 mx-10px;
    }
    .title {
      @apply text-16px font-weight-700;
    }
  }
  .el-menu {
    @apply border-r-0;
    // .el-sub-menu__title {
    //   color: bisque !important;
    //   background-color: blue !important;
    //   // @apply text-red-100 hover:bg-blue-gray-800;
    // }
    .el-menu-item {
      @apply pl-50px bg-blue-gray-700 hover:(text-white font-bold);
    }
    .el-menu-item.is-active {
      @apply bg-blue-900 text-white;
    }
  }
}
</style>
