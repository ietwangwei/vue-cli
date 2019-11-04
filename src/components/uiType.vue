<template>
  <div class="ui-type">
    <div v-if="type === 'text'">
      <span :style="{'color': option.color}">{{ option.name }}</span>
      <br>
      <span :style="{'color': option.color}">颜色值：{{ option.color }}</span>
      <br>
      <span>scss代码: {{ option.code }}</span>
    </div>
    <div v-if="type === 'btn'">
      <el-button size="small" :type="option.type">{{option.name}}</el-button>
    </div>
    <div v-if="type === 'input'">
      <el-input
        v-model="option.name"
        size="small"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'uiType',
  props: {
    type: {
      type: String,
      required: true,
      default () {
        return ''
      }
    },
    option: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  }
}
</script>
