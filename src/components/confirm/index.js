import ConfirmConponent from './confirm'

const Confirm = {}

Confirm.install = (Vue) => {
  // 挂载组件
  const ConfirmConstructor = Vue.extend(ConfirmConponent)
  const instance = new ConfirmConstructor()
  document.body.appendChild(instance.$mount().$el)

  Vue.prototype.$confirm = (config) => {
    instance.config = config
    instance.visible = true
    instance.confirm = config.confirm.bind(null, instance)
  }
}

export default Confirm
