<template>
  <div class="form-configable">
    <el-form
      v-model="formData"
    >
      <el-form-item
        v-for="item in formConfig.props"
        :key="item.prop"
        :label="item.label"
      >
        <!-- 输入框 -->
        <el-input
          v-if="item.type === 'input'"
          v-model="formData[item.prop]"
          :type="item.mode || 'input'"
          :placeholder="item.placeholder"
          :suffix-icon="item.suffixIcon || 'search'"
          size="small"
        ></el-input>
        <!-- 选择框 -->
        <el-select
          v-if="item.type === 'select'"
          v-model="formData[item.prop]"
          :placeholder="item.placeholder"
          size="small"
        >
          <el-option
            v-for="option in item.options"
            :key="option.value"
            :value="option.value"
            :label="option.label"
          />
        </el-select>
        <!-- 级联选择框 -->
        <el-cascader
          v-if="item.type === 'cascader'"
          v-model="formData[item.prop]"
          :placeholder="item.placeholder"
          :options="item.options"
          size="small"
        />
        <!-- 单选框 -->
        <el-radio-group
          v-if="item.type === 'radio'"
          v-model="formData[item.prop]"
          size="small"
          @change="item.changeHanlder"
        >
          <el-radio
            v-for="radio in item.radios"
            :key="radio.label"
            :label="radio.label"
          >{{ radio.name }}</el-radio>
        </el-radio-group>
        <!-- 日期选择器 -->
        <el-date-picker
          v-if="item.type === 'date'"
          v-model="formData[item.prop]"
          type="date"
          :placeholder="item.placeholder"
          size="small"
        >
        </el-date-picker>
        <!-- 时间选择器 -->
        <el-time-select
          v-if="item.type === 'time'"
          v-model="formData[item.prop]"
          :placeholder="item.placeholder"
          size="small"
        >
        </el-time-select>
        <!-- 上传 -->
        <el-upload
          v-if="item.type === 'upload'"
          class="upload-demo"
          action=""
          multiple
          :http-request="item.uploadFunction"
          :limit="item.max"
          :before-upload="item.beforeUpload"
          :accept="item.accept || defaultConfig.accept"
        >
          <el-button size="small" type="primary">上传文件</el-button>
          <div slot="tip" class="el-upload__tip">{{ item.tip }}</div>
          <div class="file-list">
            <div
              v-for="(file, index) in formData[item.prop]"
              :key="index"
              class="file-item"
            >
              <span class="margin-right24">{{ file.name }}</span>
              <i class="el-icon-close margin--left24" @click.stop="remove(index)"></i>
            </div>
          </div>
        </el-upload>
        <!-- tree组件 -->
        <el-tree
          v-if="item.type === 'tree'"
          :data="item.treeData"
          node-key="id"
          default-expand-all
          show-checkbox
          :default-checked-keys="formData[item.prop]"
          @check-change="item.callback()"
        >
        </el-tree>
        <!-- 穿梭框 -->
        <el-transfer
          v-if="item.type === 'transfer'"
          v-model="formData[item.prop]"
          :data="item.data"
          :titles="['专家姓名', '已选参会专家']"
          :button-texts="['加入左侧', '加入右侧']"
          :filter-method="item.filterMethod"
          filter-placeholder="请输入专家姓名"
          :render-content="item.renderMethod"
          filterable
        ></el-transfer>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'formConfigable',
  props: ['formData', 'formConfig'],
  data () {
    return {
      defaultConfig: {
        placeholderInput: '请输入',
        placeholderSelect: '请选择',
        accept: ''
      }
    }
  },
  methods: {
    remove (index) {
      this.$emit('remove', index)
    }
  }
}
</script>
