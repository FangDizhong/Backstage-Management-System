<template>
  <div class="pie-echart">
    <basic-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { EChartsOption } from "echarts"

import { defineProps, computed } from "vue"
import { IDataType } from "../types"

const props = defineProps<{
  pieData: IDataType[]
}>()

// props.pieData更新,整个函数会重跑一遍
const options = computed<EChartsOption>(() => {
  return {
    // title: {
    //   text: "Referer of a Website",
    //   subtext: "Fake Data",
    //   left: "center"
    // },
    tooltip: {
      trigger: "item"
    },
    // 标签方向、位置
    legend: {
      orient: "horizontal",
      left: "left"
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  }
})
</script>

<style scoped lang="scss"></style>
