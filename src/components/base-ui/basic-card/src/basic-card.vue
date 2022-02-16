<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ props.title }}</span>
      </div>
    </template>

    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Title"
  }
})
</script>

<style scoped lang="scss">
::v-deep .el-card__header {
  @apply p-2;
}
</style>
