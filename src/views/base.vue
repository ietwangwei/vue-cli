<template>
  <div class="base">
    <div
      v-for="(item, index) in cards"
      :key="index"
      class="el-col-6"
    >
      <el-card
        class="box-card"
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
    <div class="clear"></div>
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
    min-height: 480px;
    margin-right: 24px;
    margin-bottom: 24px;
    text-align: left;

    .text-item {
      margin-bottom: 10px;
      font-size: 12px;
    }
  }

  .base-chart {
    width: 200px;
    height: 200px;
  }
}
</style>
