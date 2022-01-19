<template>
  <div class="user">
    <basic-form
      :formItems="formItems"
      :label-width="labelWidth"
      :style="itemStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { IFormItem } from "@/components/base-ui/form"

// setup form
const formItems: IFormItem[] = [
  {
    type: "input",
    label: "user ID",
    placeholder: "Enter user ID"
  },
  {
    type: "input",
    label: "User Name",
    placeholder: "Enter username"
  },
  {
    type: "password",
    label: "Password",
    placeholder: "Enter password"
  },
  {
    type: "select",
    label: "Favor Sports",
    placeholder: "Choose your favor Sports",
    options: [
      { title: "basketball", value: "basketball" },
      { title: "football", value: "football" }
    ]
  },
  {
    type: "datepicker",
    label: "Date Range",
    otherOptions: {
      startPlaceholder: "Start Date",
      endPlaceholder: "End Date",
      type: "daterange"
    }
  }
]

const labelWidth = "120px"
const itemStyle = {
  padding: "10px 40px"
}
</script>

<style scoped></style>
