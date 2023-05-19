<template>
  <view
      :class="customClass ? customClass : ''"
      class="easy-tabs-container"
  >
    <view id="easy-tabs-scroll-container" >
      <scroll-view
          :scrollLeft="scrollLeft"
          :style="{ position: fixed ? 'fixed' : 'relative', zIndex: 9 }"
          class="easy-tabs-scroll"
          scroll-with-animation
          scroll-x
      >
        <view
            id='_easy-tabs-box'
            :class="{'easy-tabs-box-flex-space-between': flexBetween}"
            class="easy-tabs-box"
        >
          <!--列表-->
          <view
              v-for="(item,index) in list"
              :id="'easy-tab-item-'+index"
              :key="index"
              :class="index === active ? 'is-active' : 'not-active'"
              :style="[tabItemStyle(index)]"
              class="easy-tabs-item"
              @tap="handleSelectItem(index)"
          >
            {{item[label]}}
          </view>
          <!--滚动条-->
          <view
              :style="[tabBarStyle]"
              class="easy-tab-bar"
          />
        </view>
      </scroll-view>
      <view
          v-show="fixed"
          :style="{height}"
          class='easy-placeholder'
      />
    </view>
  </view>
</template>

<script>
/**
 * @description 参数说明
 * @property [array]   list  tab列表
 * @property [number]  current 当前选中项 支持.sync (v1.1.1版本起废弃)
 * @property [string]  label label字段名
 * @property [string]  activeColor 选中颜色
 * @property [string]  inactiveColor   默认颜色
 * @property [number]  duration  过渡时间 (s)
 * @property [number]  barHeight tabBar的高度
 * @property [string | number] barWidth  tabBar的宽 设置为auto的时候，会根据tab的宽度自动变化
 * @property [boolean] flexBetween 是否开启均匀分布
 * @property [object]  itemStyle  tab-item的内联样式
 * @property [string]  customClass 最外层自定义class
 * @property [number]  value 新版本使用v-model来进行index同步，废弃旧的方式
 * @property [boolean] fixed 是否开启固定定位
 * @property [string]  height tabItem的高度
 * @property [string]  padding tabItem的内边距
 * @property [string]  barColor tabbar颜色，不定义此项则跟文本颜色一致
 * @property [string]  barRadius  圆角度数
 **/
import props from "./props"
export default {
  name: "easy-tabs",
  mixins:[ props ],
  data(){
    return {
      active:0,
      privateBarWidth:0,
      parentInfo:{},
      scrollLeft:0,     // scroll-view 距离左边的距离
      tabItemsInfo:[],  // 所有的tab的信息
      scrollBarLeft: 0, // 移动bar需要通过translateX()移动的距离
    }
  },
  watch:{
    value:{
      immediate: true,
      handler:function (nVal,oVla) {
		  console.log(nVal,'nVal')
		  console.log(oVla,'oVla')
        this.$nextTick(() => {
          this.active = nVal
          this.scrollTabBar()
        })
      }
    }
  },
  computed:{
    tabBarStyle(){
      let style = {
        'transition-duration':this.duration + 's',
        height:this.barHeight + 'rpx',
        background: this.barColor || this.activeColor,
        transform: `translate(${this.scrollBarLeft}px, -100%)`,
        width: this.privateBarWidth + 'rpx',
        borderRadius:this.barRadius
      }
      return style
    },
    tabItemStyle(){
      return (index) => {
        const style = {
          height:this.height,
          padding:this.padding
        }

        style.color = index === this.active ?  this.activeColor :  this.inactiveColor
        Object.assign(style,this.itemStyle)
        return style
      }
    }
  },
  mounted() {
    this.init();
  },
  methods:{
    // 初始化
    async init(){
      this.active = this.value
      this.privateBarWidth = this.barWidth
      if (this.list.length){
        this.parentInfo = await this.createSelectorQuery('#easy-tabs-scroll-container')
        this.getTabInfo()
      }
    },
    // 获取所有节点的信息
    getTabInfo(){
      const length = this.list.length
      let ids = ''
      for (let i = 0; i < length; i++) {
        ids += i !== length - 1 ? `#easy-tab-item-${i},` : `#easy-tab-item-${i}`
      }
      this.createSelectorQuery(ids,true).then(data => {
        this.tabItemsInfo = data
        this.scrollTabBar()
      })
    },
    // 移动滚动条并设置可选项
    scrollTabBar(){
      // 当前项
      let tabInfo = this.tabItemsInfo[this.active]
      if (!tabInfo) return;
      let parentLeft = this.parentInfo.left
      // 实际距离，因为uni的api获取都是可视范围内的距离
      let offsetLeft  = tabInfo.left - parentLeft

      // 如果是适应宽度，直接将bar移动到当前项的左边界就行
      if (this.barWidth === 'auto'){
        this.privateBarWidth = tabInfo.width * 2
        this.scrollBarLeft = offsetLeft
      }else{
        // 当前活动item的中点点到左边的距离减去滑块宽度的一半，即可得到滑块所需的移动距离 注意px 与 rpx
        this.scrollBarLeft = offsetLeft + tabInfo.width/2 - uni.upx2px(this.privateBarWidth)/2
      }

      // 同时滑动scroll-view
      let scrollLeft = offsetLeft - (this.parentInfo.width - tabInfo.width) / 2;
      this.scrollLeft = scrollLeft < 0 ? 0 : scrollLeft;
    },
    // 选中tab
    handleSelectItem(index){
      if (index === this.active) return
      this.active = index
      this.scrollTabBar()
      const tab = this.list[index]
      this.$emit('input',index)
      // this.$emit('update:current',index)
      this.$emit('change',tab)
    },
    createSelectorQuery(selector,all){
      return new Promise(resolve => {
        uni.createSelectorQuery().
        in(this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(rect => {
          if (all && Array.isArray(rect) && rect.length) { resolve(rect) }
          if (!all && rect) { resolve(rect) }
        }).exec()
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.easy-tabs-container{
  .easy-tabs-scroll{
    background: #ffffff;
    width: 100%;
    white-space: nowrap;
    position: relative;
  }
  .easy-tabs-box{
    position: relative;
    .is-active{}
  }
  .easy-tabs-box-flex-space-between{
    display: flex;
    justify-content: space-between;
  }
  .easy-tabs-item{
    //display: inline-block;
    //text-align: center;
    transition-property: background-color, color;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .easy-tab-bar{
    position: absolute;
    bottom: -1px;
  }
}

</style>
