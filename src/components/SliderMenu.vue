<script>
export default {
  name: 'sliderMenu',
  props: {
    menus: {
      type: Array,
      required: true,
      default () { }
    }
  },
  data () {
    return {
      selectedMenus: [],
      openMenus: []
    }
  },
  methods: {
    isOpen (menu) {
      return this.openMenus.includes(menu.value)
    },
    openMenu (menu) {
      if (!this.openMenus.includes(menu.value)) {
        this.openMenus.push(menu.value)
      } else {
        let index = this.openMenus.findIndex(i => {
          return i.value === menu.value
        })
        this.openMenus.splice(index, 1)
      }
    },
    selectMenu (menu) {
      if (!this.selectedMenus.includes(menu.value)) {
        this.selectedMenus.push(menu.value)
      } else {
        let index = this.selectedMenus.findIndex(i => {
          return i.value === menu.value
        })
        this.selectedMenus.splice(index, 1)
      }
    }
  },
  render (h) {
    const generateMenus = (menus, index = 0) => {
      index++
      return (
        menus.map(menu => {
          var className = this.selectedMenus.includes(menu.value) ? `crt-menu active menu-level-${index}` : `crt-menu menu-level-${index}`
          if (menu.children && menu.children.length) {
            return (
              <div class="menu-item">
                <div class={ className } onClick={ () => { this.selectMenu(menu) } }>
                  <div class={`left`}>
                    { menu.name }
                  </div>
                  { menu.level !== 1 ? <i class={ this.isOpen(menu) ? 'el-icon-arrow-down pointer margin-left24' : 'el-icon-arrow-right pointer margin-left24'} onClick={ (e) => { this.openMenu(menu, e) } } /> : null}
                </div>
                <div style={ `display: ${this.isOpen(menu) ? 'block' : 'none'}`} class="sub-menus">{ generateMenus(menu.children, menu.level, index) }</div>
              </div>
            )
          } else {
            return (
              <div class={className} onClick={() => { this.selectMenu(menu) }}>
                <div class="left">
                  {menu.name}
                </div>
              </div>
            )
          }
        })
      )
    }
    return (
      <div class="slider-menu">
        <el-scrollbar wrap-class="menus-scroll" is-native={true}>
          {generateMenus(this.menus, 0)}
        </el-scrollbar>
      </div>
    )
  }
}
</script>

<style lang="scss">
.slider-menu {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: left;

  .menus-scroll {
    max-height: 750px;
  }

  .crt-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding-right: 20px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    cursor: pointer;

    &.active {
      position: relative;
      background:rgba(230,247,255,1);

      &:after {
        content: "";
        position: absolute;
        height: 100%;
        right: 1px;
        background-color: rgba(59,115,244,1);;
        width: 2px;
      }
    }
  }
}
</style>
