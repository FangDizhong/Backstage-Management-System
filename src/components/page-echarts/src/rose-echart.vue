<template>
  <div class="rose-echart">
    <basic-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { EChartsOption } from "echarts"

import { defineProps, computed } from "vue"
import { IDataType } from "../types"

const props = defineProps<{
  roseData: IDataType[]
}>()

// props.pieData更新,整个函数会重跑一遍
const options = computed<EChartsOption>(() => {
  return {
    // legend: {
    //   top: "bottom"
    // },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "Category",
        type: "pie",
        radius: [10, 100],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style scoped lang="scss"></style>
