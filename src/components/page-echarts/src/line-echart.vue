<template>
  <div class="line-echart">
    <basic-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { EChartsOption } from "echarts"

import { defineProps, withDefaults, computed } from "vue"

interface Props {
  xLabels: string[]
  values: any[]
}

const props = withDefaults(defineProps<Props>(), {
  // xLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
})

// props.pieData更新,整个函数会重跑一遍
const options = computed<EChartsOption>(() => {
  return {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.xLabels
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: props.values,
        type: "line",
        areaStyle: {}
      }
    ]
  }
})
</script>

<style scoped lang="scss"></style>
