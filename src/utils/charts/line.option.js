import Base from './base'

export default {
  title: Object.assign(Base.title, { text: '折线图' }),
  legend: {
    data: []
  },
  tooltip: {
    show: true
  },
  grid: {
    top: 40,
    left: 20,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    boundaryGap: false,
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#E8E8E8',
        type: 'dotted'
      }
    },
    axisLabel: {
      formatter: '{value}'
    }
  },
  showType: 'percent',
  series: [
    {
      type: 'line',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ],
  color: ['#5C89FF', '#7C6AF2']
}
