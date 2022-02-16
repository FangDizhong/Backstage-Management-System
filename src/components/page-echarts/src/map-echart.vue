<template>
  <div class="bar-echart">
    <basic-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from "vue"
import * as echarts from "echarts"
import { IDataType } from "../types"

import { convertData } from "../utils/convert-data"

interface Props {
  title?: string
  mapData: IDataType[]
}

const props = withDefaults(defineProps<Props>(), {
  title: ""
})

// props.pieData更新,整个函数会重跑一遍
const options = computed<echarts.EChartsOption>(() => {
  return {
    backgroundColor: "#fff",
    title: {
      text: "Total Sales in China",
      left: "center",
      textStyle: {
        color: "#fff"
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        return params.name + " : " + params.value[2]
      }
    },
    visualMap: {
      min: 0,
      max: 60000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ["高", "低"],
      inRange: {
        color: ["rgb(70, 240, 252)", "rgb(250, 220, 46)", "rgb(245, 38, 186)"]
      },
      textStyle: {
        color: "#000"
      }
    },
    geo: {
      map: "china",
      roam: "scale",
      emphasis: {
        areaColor: "#f4cccc",
        borderColor: "rgb(9, 54, 95)",
        itemStyle: {
          areaColor: "#f4cccc"
        }
      }
    },
    series: [
      {
        name: "销量",
        type: "scatter",
        // 坐标系统相对于geo
        coordinateSystem: "geo",
        data: convertData(props.mapData),
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1
          }
        }
      },
      {
        type: "map",
        map: "china",
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  }
})
</script>

<style scoped lang="scss"></style>
