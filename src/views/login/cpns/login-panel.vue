<template>
  <div class="login-panel">
    <h1 class="title">ASK Online</h1>
    <h4 class="title">Admin Login</h4>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <!-- <el-icon><user-filled /></el-icon> Account -->
            <i-ep-user-filled /> Account
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <!-- <el-icon><iphone /></el-icon> Phone -->
            <i-ep-iphone /> Phone
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">Remenber me</el-checkbox>
      <el-link type="info">Forget password?</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginClick"
      >Login</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    // typeof把LoginAccount对象转成实例，InstanceType把实例转成类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    const handleLoginClick = () => {
      accountRef.value?.loginAction(isKeepPassword.value)
    }
    return {
      isKeepPassword,
      accountRef,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="scss">
.login-panel {
  width: 400px;
  .title {
    text-align: center;
  }
  .login-btn {
    width: 100%;
    margin-top: 8px;
  }
  .account-control {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
