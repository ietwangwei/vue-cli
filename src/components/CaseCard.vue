<script>
export default {
  name: 'caseCard',
  props: {
    config: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },
  render () {
    return (
      <div class={`case-card ${this.config.state}`}>
        <div class="card-name">{ this.config.name }</div>
        <div class="card-value">{ this.config.value }</div>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.case-card {
  height: 163px;
  padding: 0 20px;
  background:rgba(255,255,255,1);
  box-sizing: border-box;
  text-align: left;
  padding-top: 34px;

  &.active {
    box-shadow: 0px 0px 6px 0px rgba(57, 159, 254, 0.76);
    border: 2px solid #399ffe;
  }

  .card-name {
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 25px;
    font-size: 18px;
  }
  .card-value {
    margin-top: 4px;
    font-size: 46px;
    color: rgba(0, 0, 0, 1);
    line-height: 62px;
  }
}
</style>
