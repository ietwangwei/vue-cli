<template>
  <div class="confirm-dialog">
    <el-dialog
      :visible="visible"
      width="433px"
      :show-close="false"
      custom-class="confirm-dialog"
    >
      <div class="title" slot="title">
        <img src="../../assets/question.png" alt="">
        <span class="margin-left16">{{ config.title }}</span>
      </div>
      <div class="message">{{ config.message }}</div>
      <div class="footer">
        <el-button size="small" @click="visible = false">取消</el-button>
        <el-button size="small" type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'confirmDialog',
  data () {
    return {
      visible: false,
      config: {
        type: 'default',
        title: '',
        message: ''
      }
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="scss">
  .confirm-dialog, .ed-dialog {
    border-radius:4px;
    padding: 12px 24px;

    .el-dialog__header {
      border-bottom: 0!important;
      padding: 0!important;
      .title {
        display: inline-flex;
        align-items: center;
        font-weight:500;
        color:rgba(0,0,0,0.85);
        line-height:24px
      }
    }

    .el-dialog__body {
      padding: 0!important;
      font-size: 14px;
      text-align: left;
      margin-top: 12px;

      .message {
        margin-left: 40px;
        color: rgba(0,0,0,0.65);
        min-height: 24px;
      }
    }

    .footer {
      text-align: right;
    }
  }
</style>
