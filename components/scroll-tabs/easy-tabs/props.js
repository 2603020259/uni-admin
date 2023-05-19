/**
 * @author: 三里清风
 * @description：props
 * @update: 2022-08-19 09:26
 */
export default {
   props:{
	   value:{
	      type:Number,
	      default:0
	   },
      fixed:{
         type:Boolean,
         default:false
      },
      list:{
         type:Array,
         default:() => []
      },
      label:{
         type:String,
         default:'label'
      },
      activeColor:{
         type:String,
         default:"#62C085",
      },
      inactiveColor:{
         type:String,
         default:"#666666",
      },
      duration:{
         type: [ String, Number ],
         default: 0.5
      },
      barHeight:{
         type:Number,
         default:6
      },
      barWidth:{
         type:[ String,Number ],
         default:50
      },
      barRadius:{
         type: String,
         default: '0rpx'
      },
      barColor:{
         type:String,
         default:null,
      },
      flexBetween:{
         type:Boolean,
         default:false
      },
      itemStyle:{
         type:Object,
         default:() => ({})
      },
      customClass:{
         type:String,
         default:null
      },
      height:{
         type:String,
         default:'70rpx'
      },
      padding:{
         type:String,
         default:' 0 30rpx'
      },
   },
}
