<template>
  <div class="basic-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemLayout"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                />
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>

              <template v-else-if="item.type === 'datepicker'">
                <!-- v-bind 不管绑定的内部数据结构是什么一股脑全绑进来 -->
                <el-date-picker v-bind="item.otherOptions"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue"
import { IForm, IFormItem } from "../type"

const props = defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    // 箭头函数跟上下文的this有关
    default: () => []
  },
  labelWidth: {
    type: String,
    default: "100px"
  },
  itemLayout: {
    type: Object,
    default: () => ({ padding: "10px 40px" })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})
</script>

<style scoped lang="scss">
.basic-form {
  @apply pt-[20px];
  .el-select,
  .el-date-picker {
    @apply w-full;
  }
}
</style>
