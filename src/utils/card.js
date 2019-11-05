import pie from '../utils/charts/pie.option'

// 文字颜色
const textColor = {
  title: '文本样式',
  type: 'text',
  options: [
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

// 按钮颜色
const buttonColor = {
  title: '按钮颜色',
  type: 'btn',
  options: [
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

// 输入框
const inputColor = {
  title: '输入框',
  type: 'input',
  options: [
    {
      name: '输入框',
      borderColor: 'rgba(0, 0, 0, 0.149 )',
      placeholder: '请输入'
    }
  ]
}

// 图表
const chart = {
  title: '可视化',
  type: 'chart',
  options: [pie]
}

// 案卡
const caseCard = {
  title: '案卡',
  type: 'caseCard',
  options: [
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
  options: [
    {
      name: '确认框',
      type: 'confirm'
    },
    {
      name: '通知',
      type: 'message'
    }
  ]
}

const tabel = {
  title: '列表',
  type: 'table',
  options: []
}

const form = {
  title: '表单',
  type: 'form',
  options: []
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

export default [textColor, buttonColor, inputColor, chart, caseCard, sliderMenu, message, tabel, form, textOverflow, ueditor]
