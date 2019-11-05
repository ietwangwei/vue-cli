<template>
  <div class="ui-type">
    <div v-if="type === 'text'">
      <span :class="option.class">{{ option.name }}</span>
      <br>
      <span :class="option.class">样式名称：{{ option.class }}</span>
    </div>
    <div v-if="type === 'btn'">
      <el-button size="small" :type="option.type">{{option.name}}</el-button>
    </div>
    <div v-if="type === 'input'">
      <el-input
        v-model="option.name"
        size="small"
        :placeholder="option.placeholder"
      />
    </div>
    <div v-if="type === 'chart'">
      <BaseChart :option="option" />
    </div>
    <div v-if="type === 'caseCard'">
      <CaseCard :config="option" />
    </div>
    <div v-if="type === 'sliderMenu'">
      <SliderMenu :menus="option.menus" />
    </div>
  </div>
</template>

<script>
import BaseChart from './BaseChart'
import CaseCard from './CaseCard'
import SliderMenu from './SliderMenu'

export default {
  name: 'uiType',
  components: {
    BaseChart,
    CaseCard,
    SliderMenu
  },
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
