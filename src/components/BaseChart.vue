<template>
  <div class="base-chart">
    <div id="container" ref="myChart"/>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'baseChart',
  props: {
    option: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  watch: {
    option: {
      handler (val) {
        this.initChart()
      },
      deep: true
    }
  },
  data () {
    return {
      chartInstance: null
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.chartInstance = echarts.init(this.$refs.myChart)
      this.chartInstance.setOption(this.option, true)
    }
  }
}
</script>

<style lang="scss">
.base-chart {
  position: relative;
}
#container {
  position: relative;
  width: 100%;
  height: 100%;

  div {
    cursor: move;
  }
}
</style>
