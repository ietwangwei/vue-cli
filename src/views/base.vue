<template>
  <div class="base">
    <div class="title">ui统一规范</div>
    <el-card
      v-for="(item, index) in cards"
      :key="index"
      class="box-card el-col-6"
    >
      <div slot="header" class="clearfix">
        <span>{{ item.title }}</span>
      </div>
      <div
        v-for="(option, subIndex) in item.options"
        :key="subIndex"
        class="text-item"
      >
        <uiType
          :type="item.type"
          :option="option"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
import cards from '../utils/card'
import uiType from '@/components/uiType.vue'

export default {
  name: 'baseUi',
  components: {
    uiType
  },
  data () {
    return {
      cards
    }
  }
}
</script>

<style lang="scss">
.base {
  .box-card {
    margin-right: 24px;
    margin-bottom: 24px;
    text-align: left;

    .text-item {
      margin-bottom: 10px;
      font-size: 12px;
    }
  }
}
</style>
