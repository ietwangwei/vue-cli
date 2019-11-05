<template>
  <div class="table-component">
    <el-table
      :data="config.data"
      style="width: 100%;"
      :stripe="config.stripe"
      :border="config.border"
      :empty-text="config.emptyText"
      :height="config.height"
      @selection-change="selectionChange"
      @cell-click="cellClick"
      header-cell-class-name="table-header"
      :header-cell-style="{background:'#FAFAFA',color:'#000'}"
      :row-style="{height:'53px',padding:0}"
    >
      <el-table-column v-if="config.expand" type="expand" width="50">
        <!-- 用来自定义展开模板的 -->
        <template slot-scope="scope">
          <slot name="expandTemplate" />
        </template>
      </el-table-column>
      <el-table-column label="序号" width="80" v-if="config.showIndex" type="index"></el-table-column>
      <el-table-column v-if="config.selection" type="selection" width="55"></el-table-column>
      <el-table-column
        v-for="item in config.headers"
        :key="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <div class="label">
            <span style="position: relative;">
              <span v-if="!item.personalDefine">{{ scope.row[item.prop] }}</span>
              <span v-else v-html="item.define(scope.row)"></span>
              <slot v-if="item.render">
                <span v-html="item.render(scope.row)"></span>
              </slot>
            </span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        v-if="config.operate && config.operate.length"
        label="操作"
        min-width="100px"
        class="caozuo"
      >
        <template slot-scope="scope">
          <el-button
            v-for="(btn, index) in config.operate"
            :key="index"
            :loading="scope.row.isLoading"
            type="text"
            @click="btn.callback(scope.row)"
          >{{ btn.label }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="pageConfig.show"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pageConfig.pageIndex"
      :page-size="pageConfig.pageSize"
      layout="prev, pager, next"
      :total="pageConfig.total"
       background
      class="margin-top12 text-right"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    tableConfig: {
      type: Object,
      required: true,
      default: () => ({})
    },
    pageConfig: {
      type: Object,
      required: false,
      default: () => ({
        pageIndex: 1,
        pageSize: 20,
        layout: 'prev, pager, next',
        total: 0
      })
    }
  },
  data () {
    return {
      defaultConfig: {
        width: '100',
        height: null,
        stripe: false,
        border: false,
        emptyText: '暂无数据',
        selection: false,
        templateMode: 'IndexHome',
        showIndex: false,
        slot: false
      }
    }
  },
  computed: {
    config () {
      return Object.assign(this.defaultConfig, this.tableConfig)
    }
  },
  methods: {
    selectionChange (val) {
      this.$emit('selectionChange', val)
    },
    cellClick (row, column, cell, event) {
      this.$emit('cellClick', { row, column, cell, event })
    },
    handleSizeChange (pageSize) {
      this.$emit('sizeChanged', pageSize)
    },
    handleCurrentChange (pageIndex) {
      this.$emit('pageChanged', pageIndex)
    }
  }
}
</script>
