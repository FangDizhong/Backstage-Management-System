<template>
  <div class="login">
    <login-panel />
    <HelloWorld msg="vandezone" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LoginPanel from "./cpns/login-panel.vue"

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-image: repeating-radial-gradient(
    circle at top left,
    rgb(240, 249, 255) 0%,
    rgb(255, 242, 246) 100%
  );
  background-image: -webkit-repeating-radial-gradient(
    circle at top left,
    rgb(240, 249, 255) 0%,
    rgb(255, 242, 246) 100%
  );
}
</style>
