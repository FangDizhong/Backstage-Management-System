<template>
  <div class="login-account">
    <!-- el-form顶端统一写表单rules，验证值用prop参数,把account的值永远传给el-form-->
    <!-- ref用于获取并执行该子组件的函数 -->
    <el-form
      label-width="25%"
      :rules="rules"
      :model="account"
      inline-message
      ref="formRef"
    >
      <el-form-item label="Account" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { rules } from "../config/account-config"
// 为了使用ElForm类型
import { ElForm } from "element-plus"

export default defineComponent({
  setup() {
    // 表单双向绑定数据
    const account = reactive({
      name: "",
      password: ""
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log("执行登录逻辑")
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
