<template>
  <div class="ui-type">
    <!-- 文字样式 -->
    <div v-if="type === 'text'">
      <div
        v-for="(item, index) in option.data"
        :key="index"
        class="text-item"
      >
        <span :class="item.class">{{ item.name }}</span>
        <br>
        <span :class="item.class">样式名称：{{ item.class }}</span>
      </div>
    </div>
    <!-- 按钮样式 -->
    <div v-if="type === 'btn'">
      <el-button
        v-for="(item, index) in option.data"
        :key="index"
        :type="item.type"
        size="small"
      >{{item.name}}</el-button>
    </div>
    <!-- 表单组件 -->
    <div v-if="type === 'form'">
      <span class="inline-flex margin-bottom12">
        <div class="label">选择组件：</div>
        <el-select
          v-model="option.selectValue"
          size="small"
          multiple
          @change="option.changeHandler(option)"
        >
          <el-option
            v-for="(item, index) in option.data"
            :key="index"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </span>
      <FormConfigble
        :formData="option.formData"
        :formConfig="option.formConfig"
      />
      <el-button type="text" @click="showCode(option)" v-if="option.selectValue.length">代码</el-button>
    </div>
    <!-- 图表 -->
    <div v-if="type === 'chart'">
      <span class="inline-flex margin-bottom12">
        <div class="label">选择图表：</div>
        <el-select
          v-model="option.selectValue"
          size="small"
          @change="option.changeHandler(option)"
        >
          <el-option
            v-for="(item, index) in option.data"
            :key="index"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </span>
      <BaseChart
        :option="option.chartOption"
      />
      <el-button type="text" @click="showCode(option)" v-if="option.selectValue">代码</el-button>
    </div>
    <!-- 案卡 -->
    <div v-if="type === 'caseCard'">
      <CaseCard
        v-for="(item, index) in option.data"
        :key="index"
        :config="item"
      />
      <el-button type="text" @click="showCode(option)">代码</el-button>
    </div>
    <div v-if="type === 'message'">
      <el-button
        v-for="(item, index) in option.data"
        :key="index"
        size="small"
        @click="action(item.type)"
      >{{item.name}}</el-button>
      <el-button type="text" @click="showCode(option)">代码</el-button>
    </div>
    <!-- 侧边栏 -->
    <div v-if="type === 'sliderMenu'">
      <SliderMenu :menus="option.menus" />
    </div>
    <!-- 列表 -->
    <div v-if="type === 'table'">
      <span class="inline-flex margin-bottom12">
        <div class="label">配置分页：</div>
        <el-select
          v-model="option.selectValue"
          size="small"
          @change="option.changeHandler(option)"
        >
          <el-option
            v-for="(item, index) in option.data"
            :key="index"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </span>
      <TableConfigble
        :tableConfig="option.tableConfig"
        :pageConfig="option.pageConfig"
        @pageChanged="option.pageChanged"
      />
      <el-button type="text" @click="showCode(option)">代码</el-button>
    </div>
    <el-dialog
      :visible="visible"
      title="代码展示"
      @close="visible = false"
    >
      <pre>
        {{ dialogConfig.code.html }}
      </pre>
      <JsonViewer
        :value="dialogConfig.code.js"
        :expand-depth="3"
        copyable
        boxed
        sort
      />
    </el-dialog>
  </div>
</template>

<script>
import BaseChart from './BaseChart'
import CaseCard from './CaseCard'
import SliderMenu from './SliderMenu'
import FormConfigble from './FormConfigble'
import JsonViewer from 'vue-json-viewer'
import TableConfigble from './TableConfigble'

export default {
  name: 'uiType',
  components: {
    BaseChart,
    CaseCard,
    SliderMenu,
    FormConfigble,
    JsonViewer,
    TableConfigble
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
    return {
      visible: false,
      dialogConfig: {
        codeType: '',
        code: {}
      }
    }
  },
  methods: {
    showCode (option) {
      this.visible = true
      this.dialogConfig.code = option.code
      this.dialogConfig.codeType = option.codeType
    },
    action (type) {
      if (type === 'message') {
        this.$message.warning('你好')
      } else {
        this.$confirm({
          title: '确认',
          message: '请确认信息',
          confirm (instance) {
            instance.visible = false
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
.inline-flex {
  display: inline-flex;
  align-items: center;
}

.ui-type {
  .text-item {
    margin-bottom: 10px;
    font-size: 12px;
  }

  .base-chart {
    width: 300px;
    height: 300px;
  }

  .el-form-item {
    margin-bottom: 12px;
  }

  pre {
    white-space:pre-wrap; /* css3.0 */
    white-space:-moz-pre-wrap; /* Firefox */
    white-space:-pre-wrap; /* Opera 4-6 */
    white-space:-o-pre-wrap; /* Opera 7 */
    word-wrap:break-word; /* Internet Explorer 5.5+ */
  }
}
</style>
