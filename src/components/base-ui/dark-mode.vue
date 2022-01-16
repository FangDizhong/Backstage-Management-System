<template>
  <el-button @click="toggleDark()">
    <i-ep-moon v-show="isDark" class="align-middle" />
    <i-ep-sunny v-show="!isDark" class="align-middle" />
    <!-- <span class="ml-2">{{ isDark ? "Dark" : "Light" }}</span> -->
  </el-button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped lang="scss"></style>
