import generateCode from './generateCode'
import chartOptions from './charts'

// 文字颜色
const textColor = {
  title: '文本样式',
  type: 'text',
  option: {
    data: [
      {
        name: '标题文字',
        class: 'ht-title',
        code: '$color-title'
      },
      {
        name: '正文文字',
        class: 'ht-text',
        code: '$color-text'
      },
      {
        name: '辅助文字',
        class: 'ht-text--sub',
        code: '$color-text-sub'
      },
      {
        name: '链接文字、选中态文字',
        class: 'ht-text--hight',
        code: ''
      },
      {
        name: '搜索命中文字',
        class: 'ht-search--hight',
        code: '$color-search--hight'
      },
      {
        name: '控件内提示文字',
        class: 'ht-in-icon',
        code: '$color-in-icon'
      }
    ]
  }
}

// 按钮颜色
const buttonColor = {
  title: '按钮颜色',
  type: 'btn',
  option: {
    data: [
      {
        name: '操作按钮',
        type: 'primary'
      },
      {
        name: '默认按钮',
        type: 'default'
      }
    ]
  }
}

// 生成组件
const generateProp = (prop) => {
  var dist = {}
  switch (prop) {
    case 'input':
      dist = {
        type: prop,
        prop: `${prop}Value`,
        placeholder: '请输入'
      }
      break
    case 'select':
      dist = {
        type: prop,
        prop: `${prop}Value`,
        options: [
          {
            label: '第一季',
            value: '1'
          }
        ]
      }
      break
    case 'cascader':
      dist = {
        type: prop,
        prop: `${prop}Value`,
        options: [
          {
            label: '第一季',
            value: '1',
            children: [
              {
                label: '第一集',
                value: '1-1'
              }
            ]
          }
        ]
      }
      break
    case 'radio':
      dist = {
        type: prop,
        prop: `${prop}Value`,
        radios: [
          {
            name: '是',
            value: true
          },
          {
            name: '否',
            value: false
          }
        ]
      }
      break
    case 'date':
      dist = {
        type: prop,
        prop: `${prop}Value`
      }
      break
    case 'time':
      dist = {
        type: prop,
        prop: `${prop}Value`
      }
      break
  }
  return dist
}

// 输入框
const form = {
  title: '表单组件',
  type: 'form',
  option: {
    selectValue: [],
    changeHandler (option) {
      var props = option.selectValue.map(item => {
        return generateProp(item)
      })
      option.formConfig.props = props
      generateCode(option, 'form')
    },
    data: [
      {
        label: '输入框',
        value: 'input'
      },
      {
        label: '下拉框',
        value: 'select'
      },
      {
        label: '级联选择框',
        value: 'cascader'
      },
      {
        label: '单选框',
        value: 'radio'
      },
      {
        label: '日期',
        value: 'date'
      },
      {
        label: '时间',
        value: 'time'
      }
    ],
    formData: {
      inputValue: '',
      selectValue: '',
      cascaderValue: '',
      dateValue: '',
      radioValue: false,
      timeValue: ''
    },
    formConfig: {
      props: []
    },
    code: {},
    codeType: 'vue'
  }
}

// 图表
const chart = {
  title: '可视化',
  type: 'chart',
  option: {
    selectValue: '',
    changeHandler (option) {
      option.chartOption = chartOptions[option.selectValue]
      generateCode(option, 'chart')
    },
    data: [
      {
        label: '折线图',
        value: 'line'
      }
    ],
    chartOption: {},
    code: {},
    codeType: 'vue'
  }
}

// 案卡
const data = [
  {
    name: '受案数-默认',
    value: 100,
    state: 'default'
  },
  {
    name: '受案数-激活',
    value: 100,
    state: 'active'
  }
]
const caseCard = {
  title: '案卡',
  type: 'caseCard',
  option: {
    data,
    code: {
      html: `
        <CaseCard
          v-for="(item, index) in option.data"
          :key="index"
          :config="item"
        />
      `,
      js: {
        data
      }
    }
  }
}

const sliderMenu = {
  title: '侧边栏',
  type: 'sliderMenu',
  options: [
    {
      menus: [
        {
          name: '一级菜单',
          value: '1',
          children: [
            {
              name: '二级菜单',
              value: '1-1'
            }
          ]
        },
        {
          name: '一级菜单',
          value: '2',
          children: [
            {
              name: '二级菜单',
              value: '2-1'
            }
          ]
        }
      ]
    }
  ]
}

const message = {
  title: '通知',
  type: 'message',
  option: {
    data: [
      {
        name: '确认框',
        type: 'confirm'
      },
      {
        name: '通知',
        type: 'message'
      }
    ],
    code: {
      js: {
        message: `this.$message.warning('你好')`,
        confirm: `
          this.$confirm({
            title: '确认',
            message: '请确认信息',
            confirm (instance) {
              instance.visible = false
            }
          })
        `
      }
    }
  }
}

const tableConfig = {
  showIndex: true,
  data: [
    {
      name: 'ui'
    }
  ],
  headers: [
    {
      prop: 'name',
      label: '任务名称'
    }
  ]
}

const pageConfig = {
  show: true,
  pageIndex: 1,
  pageSize: 10,
  total: 0
}

const tabel = {
  title: '列表',
  type: 'table',
  option: {
    selectValue: '1',
    changeHandler (option) {
      option.selectValue === '1' ? pageConfig.show = false : pageConfig.show = true
    },
    data: [
      {
        label: '是',
        value: '1'
      },
      {
        label: '否',
        value: '2'
      }
    ],
    tableConfig,
    pageConfig,
    pageChanged () {},
    code: {
      html: `
        <TableConfigble
          :tableConfig="option.tableConfig"
          :pageConfig="option.pageConfig"
          @pageChanged="option.pageChanged"
        />
      `,
      js: {
        tableConfig,
        pageConfig,
        pageChanged () {}
      }
    }
  }
}

const textOverflow = {
  title: '文字溢出',
  type: 'textOverflow',
  options: []
}

const ueditor = {
  title: '百度编辑器',
  type: 'ueditor',
  options: []
}

// , buttonColor, form, chart, caseCard, sliderMenu, message, tabel, textOverflow, ueditor
export default [textColor, buttonColor, form, chart, caseCard, message, tabel]
