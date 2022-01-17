<template>
  <div class="nav-header">
    <fold-menu />
    <dark-mode />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.nav-header {
  @apply h-full w-full px-2;
}
</style>
