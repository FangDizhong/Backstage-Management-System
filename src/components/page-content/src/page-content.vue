<template>
  <div class="page-content">
    <!-- tabledata是表内具体数据，
          propList是定义表头和对应数据属性名等数据 -->
    <basic-table
      :tableData="datalist"
      v-bind="contentTableConfig"
      @selectionChange="handleSelectionChange"
    >
      <!-- parent component 使用具名插槽Named slot的时候，
            在template里#[指定slotName] -->
      <template #table-header-handler>
        <el-button> {{ contentTableConfig.tableHandlerBtn }} </el-button>
      </template>
      <!-- 传给el-table的:data，会返回给scope插槽
          返回的是table的row, column, $index 和 store（table 内部的状态管理）的数据
          https://element-plus.org/zh-CN/component/table.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%97%E6%A8%A1%E6%9D%BF
          -->
      <!-- scoped slot 用于让parent component决定展示样式
      https://v3.cn.vuejs.org/guide/component-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD
          -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'primary' : 'danger'"
        >
          {{ scope.row.enable ? "enable" : "disable" }}
        </el-button>
      </template>

      <template #createdTime="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>

      <template #updatedTime="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>

      <template #actions>
        <div>
          <el-button size="small" type="text"><i-ep-Edit />Edit</el-button>
          <el-button size="small" type="text"><i-ep-Delete />Delete</el-button>
        </div>
      </template>
    </basic-table>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store"
import { computed } from "vue"

// 定义parent component传来的config数据
const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})
// 获取table数据
const store = useStore()
// 触发store里的action里的方法，
// 去提交到mutation，再修改到state
store.dispatch("system/getPageListAction", {
  // pageUrl: "/users/list",
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})
const datalist = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
const usersCount = computed(() => store.state.system.usersCount)

const handleSelectionChange = (value: any) => {
  console.log(value)
}
</script>

<style scoped lang="scss">
.page-content {
  @apply border-t-20 border-t-blue-gray-100;
  ::v-deep .basic-table {
    @apply py-[25px];
    .table-header,
    .table-content,
    .table-footer {
      @apply px-[25px] py-2;
    }

    .table-title {
      @apply text-left text-blue-gray-400
    text-25px font-bold;
    }
  }
}
</style>
