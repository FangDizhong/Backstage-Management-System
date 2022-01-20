<template>
  <div class="user">
    <basic-form v-bind="searchFormConfig" />
  </div>
</template>

<script setup lang="ts">
import { searchFormConfig } from "./config/search.config"
</script>

<style scoped></style>
