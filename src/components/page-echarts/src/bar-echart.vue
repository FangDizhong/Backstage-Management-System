<template>
  <div class="bar-echart">
    <basic-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts"

import { defineProps, withDefaults, computed } from "vue"

interface Props {
  title?: string
  xLabels: string[]
  values: any[]
}

const props = withDefaults(defineProps<Props>(), {
  title: ""
})

// props.pieData更新,整个函数会重跑一遍
const options = computed<echarts.EChartsOption>(() => {
  return {
    // title: {
    //   text: "特性示例：渐变色 阴影 点击缩放",
    //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
    // },
    xAxis: {
      data: props.xLabels,
      axisLabel: {
        inside: true,
        color: "#fff"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#999"
      }
    },
    dataZoom: [
      {
        type: "inside"
      }
    ],
    series: [
      {
        type: "bar",
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" }
            ])
          }
        },
        data: props.values
      }
    ]
  }
})
</script>

<style scoped lang="scss"></style>
