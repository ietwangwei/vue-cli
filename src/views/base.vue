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
        <uiType
          :type="item.type"
          :option="item.option"
        />
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
    height: 480px;
    margin-right: 24px;
    margin-bottom: 24px;
    text-align: left;
    overflow-y: auto;
  }
}
</style>
