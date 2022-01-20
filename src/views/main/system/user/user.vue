<template>
  <div class="user">
    <basic-form v-bind="searchFormConfig" v-model="formData" />
  </div>
</template>

<script setup lang="ts">
import { searchFormConfig } from "./config/search.config"
import { ref } from "vue"

const formData = ref({
  id: "",
  name: "",
  password: "",
  sports: "",
  createTime: ""
})
</script>

<style scoped></style>
