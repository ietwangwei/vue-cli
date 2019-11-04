// 文字颜色
const textColor = {
  title: '文字颜色',
  type: 'text',
  options: [
    {
      name: '标题文字',
      color: 'rgba(0, 0, 0, 0.851 )',
      code: '$color-title'
    },
    {
      name: '正文文字',
      color: 'rgba(0, 0, 0, 0.651 )',
      code: '$color-text'
    },
    {
      name: '辅助文字',
      color: 'rgba(0, 0, 0, 0.349 )',
      code: '$color-text-sub'
    },
    {
      name: '链接文字、选中态文字',
      color: 'rgba(24, 144, 255, 1 )',
      code: '$color-text-link $color-text--selected'
    },
    {
      name: '搜索命中文字',
      color: 'rgba(255, 108, 0, 1 )',
      code: '$color-search--hight'
    },
    {
      name: '空间内提示文字',
      color: 'rgba(0, 0, 0, 0.251 )',
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
      borderColor: 'rgba(0, 0, 0, 0.149 )'
    }
  ]
}

export default [textColor, buttonColor, inputColor]
