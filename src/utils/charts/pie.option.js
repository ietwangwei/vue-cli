import Base from './base'

export default {
  title: Object.assign(Base.title, { text: '环形图' }),
  legend: {
    show: true,
    icon: 'circle',
    left: 180,
    top: 60,
    data: [
      {
        name: '男'
      },
      {
        name: '女'
      }
    ]
  },
  tooltip: {
    trigger: 'item',
    formatter: '性别：{b}<br/>人数：{c}',
    textStyle: {
      align: 'left'
    }
  },
  series: [
    {
      type: 'pie',
      center: ['50%', '60%'],
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      labelLine: {
        show: false
      },
      itemStyle: {
        normal: {
          borderWidth: 3,
          borderColor: '#fff'
        }
      },
      data: [
        {
          name: '男',
          value: 12
        },
        {
          name: '女',
          value: 12
        }
      ]
    }
  ],
  color: Base.color
}
