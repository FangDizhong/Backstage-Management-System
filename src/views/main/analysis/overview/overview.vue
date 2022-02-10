<template>
  <div class="overview">
    <h2>overview</h2>
    <h2>{{ InitName }}</h2>
    <h2>{{ RefName }}</h2>
    <el-input
      placeholder="name"
      :model-value="RefName.name"
      @update:model-value="handleValueChange($event)"
    />
    <div class="change">
      <el-button @click="changeObj()">change Obj</el-button>
      <el-button @click="changeVal()">change Val</el-button>
      <el-button @click="setVal()">set Val</el-button>
    </div>
    <div class="init">
      <el-button @click="initObj()">init Obj (Reset)</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const InitName = { name: "_" }
const RefName = ref(InitName)

const handleValueChange = (e: any) => {
  RefName.value.name = e
  console.log(InitName, RefName)
}

const changeObj = () => {
  RefName.value = { name: "Object" }
  console.log(InitName, RefName)
}
const changeVal = () => {
  RefName.value["name"] = "Value"
  console.log(InitName, RefName)
}
const setVal = () => {
  RefName.value.name = "set"
  console.log(InitName, RefName)
}
const initObj = () => {
  RefName.value = InitName
}
</script>

<style scoped></style>
