<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <basic-card title="Count of Products by Category (Pie-chart)">
          <pie-echart :pie-data="goodsCategoryCount" />
        </basic-card>
      </el-col>
      <el-col :span="10">
        <basic-card title="Sales of Products by City (Map-chart)">
          <map-echart :map-data="goodsAddressSale" />
        </basic-card>
      </el-col>
      <el-col :span="7">
        <basic-card title="Count of Products by Category (Rose-chart)">
          <rose-echart :rose-data="goodsCategoryCount" />
        </basic-card>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="10">
      <el-col :span="12">
        <basic-card title="Sales of Products by Category (Line-chart)">
          <line-echart v-bind="goodsCategorySale" />
        </basic-card>
      </el-col>
      <el-col :span="12">
        <basic-card title="Favor of Products by Category (Bar-chart)">
          <bar-echart v-bind="goodsCategoryFavor" />
        </basic-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store"
import { IDataType } from "@/components/page-echarts/types"

const store = useStore()
store.dispatch("dashboard/getDashboardDataAction")

const goodsCategoryCount = computed(() => {
  return store.state.dashboard.goodsCategoryCount.map((item: any) => {
    return { name: item.name, value: item.goodsCount }
  })
})
const goodsCategorySale = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const goodsCategorySale = store.state.dashboard.goodsCategorySale
  for (const item of goodsCategorySale) {
    xLabels.push(item.name)
    values.push(item.goodsCount)
  }
  return { xLabels, values }
})
const goodsCategoryFavor = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const goodsCategoryFavor = store.state.dashboard.goodsCategoryFavor
  for (const item of goodsCategoryFavor) {
    xLabels.push(item.name)
    values.push(item.goodsFavor)
  }
  return { xLabels, values }
})

const goodsAddressSale = computed(() => {
  return store.state.dashboard.goodsAddressSale.map((item: any) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped>
.dashboard {
  @apply leading-7 bg-blue-gray-100;
}
</style>
