<template>
  <view class="scroll-tabs-container">
    <view class='status_bar'></view>
    <view :class="{'scroll-tabs-sticky':sticky}" :style="{top:stickyTop || localStickyTop}">
      <easyTabs
          v-if="tabs.length"
          id="tabScrollTop"
          ref="tabScrollTop"
          v-model="active"
          :list='tabs'
          :label="reTabOptions.label"
          :activeColor="reTabOptions.activeColor"
          :inactiveColor="reTabOptions.inactiveColor"
          :duration="reTabOptions.duration"
          :barHeight="reTabOptions.barHeight"
          :barWidth="reTabOptions.barWidth"
          :flexBetween="reTabOptions.flexBetween"
          :itemStyle="reTabOptions.itemStyle"
          :height="reTabOptions.height"
          :customClass="reTabOptions.customClass"
          @change='handleChangeTab'
      />
    </view>
    <view class="content">
      <slot></slot>
    </view>
  </view>
</template>

<script>
import easyTabs from "../easy-tabs/easy-tabs"

/**
 * @description props参数说明
 * @property [number] scrollTop 外部传入的滚动条高度
 * @property [array] tabs tabs
 * @property [number] current 设置默认的tabIndex
 * @property [number]  stickyTop 固定定位的高度
 * @property [boolean] sticky 是否设置tab为固定定位
 * @property [number] itemOffsetTop 自定义滚动相隔间距，到达会切换tab
 * @property [object]  tabOptions tab的配置
 * @property [boolean] scrollTab 滚动时是否切换到指定的tab
 * @property [boolean] clickScroll 点击时是否滚动到相应位置
 * @property [number ] duration  滚动持续时长
 * @property [number] offsetTop 点击滚动到某一模块时的偏离值，每次点击滚动都会减去这个偏离值,这个值的单位是px，
 */
export default {
  components: {easyTabs},
  // #ifdef MP-WEIXIN
  options: {
    virtualHost: true
  },
  // #endif
  props: {
    value: {
      type: Number | String,
      default: null
    },
    scrollTab: {
      type: Boolean,
      default: true
    },
    clickScroll: {
      type: Boolean,
      default: true
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      default: () => ([])
    },
    // 设置默认的tabIndex
    current: {
      type: Number,
      default: 0
    },
    stickyTop: {
      type: String,
      default: null
    },
    // 是否将tab设为固定定位
    sticky: {
      type: Boolean,
      default: true
    },
    // 自定义间距 ,当 top小于等于这个距离的时候会切换tab
    itemOffsetTop: {
      type: Number,
      default: 60
    },
    tabOptions: {
      type: Object,
      default: () => ({})
    },
    duration: {
      type: Number,
      default: 300
    },
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tabTopHeight: 0,
      tabWindowTop: 0,
      active: 0,
      click: false,
      timer: null,
      localStickyTop: '0rpx',
    }
  },
  computed: {
    reTabOptions() {
      const defaultOptions = {
        label: 'label',
        activeColor: '#62C085',
        inactiveColor: '#666666',
        duration: 0.5,
        barHeight: 6,
        barWidth: 50,
        flexBetween: false,
        customClass: ''
      }
      return Object.assign(defaultOptions, this.tabOptions)
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function (nVal, oVla) {
        this.$nextTick(() => {
		  this.active = nVal
        })
      }
    },
    scrollTop() {
      if (!this.click) {
        this.scrollToTab()
      }
    },
    current: {
      immediate: true,
      handler: function (nVal) {
        this.active = nVal
        this.$nextTick(() => {
          this.scrollToElement()
        })
      }
    }
  },
  mounted() {
    this.getScrollTabTopHeight()

  },
  methods: {
    // 获取选项卡的高度
    async getScrollTabTopHeight() {
      // 获取tab的高度
      const query = await this.createSelectorQueryForThis('#tabScrollTop')
      if (!query) return;
      this.tabTopHeight = query.height

      const _query = await this.createSelectorQueryForThis('.status_bar')
      this.tabWindowTop = _query.top
    },

    handleChangeTab(tab) {
      this.scrollToElement()
      this.$emit('onChange', tab, this.active)
      this.$emit('input', this.active)
    },

    // 滚动时切换到指定的tab
    async scrollToTab() {
      if (!this.scrollTab && !this.click) return false
      const length = this.tabs.length
      let allClass = ''
      for (let i = 0; i < length; i++) {
        const {scroll_id} = this.tabs[i]
        allClass += i < length - 1 ? `.${scroll_id},` : `.${scroll_id}`
      }
      const queryData = await this.createSelectorQuery(allClass, true)
      for (let i = 0; i < queryData.length; i++) {
        if (queryData[i].top <= this.itemOffsetTop) {
          this.active = i
        }
      }
    },

    // 点击滑动到指定元素
    async scrollToElement() {
      if (!this.clickScroll) return false
      const tab = this.tabs[this.active]
      if (!tab) return
      const {scroll_id} = tab
      if (!scroll_id) return false
      this.click = true
      clearTimeout(this.timer)
      const queryData = await this.createSelectorQuery(`.${scroll_id}`)
      if (this.tabTopHeight === 0) await this.getScrollTabTopHeight()

      if (!queryData) {
        this.click = true
        return false
      }

      let scrollTop = this.scrollTop + queryData.top - this.offsetTop

      // #ifndef H5
      // 非H5端，顶部的状态栏是会占用位置的
      scrollTop -= this.tabTopHeight
      // #endif

      // #ifdef H5
      const stickyTop = this.stickyTop || this.localStickyTop
      if (this.tabWindowTop === 0) {
        scrollTop -= this.tabTopHeight
      }
      // #endif
	  
      // 页面滚动函数
      uni.pageScrollTo({
        scrollTop,
        duration: this.duration,
        success: () => {
          this.timer = setTimeout(() => {
            this.click = false
          }, this.duration + 500)
        }
      });
    },

    createSelectorQueryForThis(selector, all) {
      return new Promise(resolve => {
        uni.createSelectorQuery().in(this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(rect => {
          resolve(rect)
        }).exec()
      })
    },

    createSelectorQuery(selector, all) {
      return new Promise(resolve => {
        uni.createSelectorQuery()[all ? 'selectAll' : 'select'](selector).boundingClientRect(rect => {
          resolve(rect)
        }).exec()
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.scroll-tabs-container {
  .status_bar {
    display: none;
    // height: var(--status-bar-height);
  }

  .scroll-tabs-sticky {
    position: sticky;
    z-index: 9999;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translate3d(0, 0, 0);
    background: white;
  }
}
</style>
