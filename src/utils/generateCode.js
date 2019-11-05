export default function generateCode (option, type) {
  var html, js
  switch (type) {
    case 'form':
      html = `<FormConfigble
        :formData="option.formData"
        :formConfig="option.formConfig"
      />
      `
      js = {
        formData: option.formData,
        formConfig: option.formConfig
      }
      option.code = {
        html,
        js
      }
      break
    case 'chart':
      html = `<BaseChart
        :option="option"
      />
      `
      js = {
        option: option.chartOption
      }
      option.code = {
        html,
        js
      }
      break
    default:
      break
  }
}
