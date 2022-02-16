<template>
  <div class="basic-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue"
// 封装hooks可以减少对echarts的依赖
import useEchart from "../hooks/useEchart"
import { EChartsOption } from "echarts"

interface Props {
  width?: string
  height?: string
  options: EChartsOption
}

const props = withDefaults(defineProps<Props>(), {
  width: "100%",
  height: "360px"
})

// binding DOM (HTMLElement type was provided by TypeScript Module)
const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  // when setup, echartDivRef has not been rendered.
  // so I put it into onMounted
  const { setOptions } = useEchart(echartDivRef.value!)

  /*推荐在大部分时候用 watch 显式的指定依赖以避免不必要的重复触发，
   * 也避免在后续代码修改或重构时不小心引入新的依赖。
   * watchEffect 适用于一些逻辑相对简单，依赖源和逻辑强相关的场景（或者懒惰的场景 ）。
   */
  watchEffect(() => {
    setOptions(props.options)
  })

  // // refactory into hooks
  // const echartInstance = echarts.init(echartDivRef.value)
  // echartInstance.setOption(props.options)
})
</script>

<style scoped lang="scss"></style>
