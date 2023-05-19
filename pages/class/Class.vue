<template>
	<view class="class">
		<view>
			<u-toast ref="uToast" :loading="true"></u-toast>
		</view>
		<!--搜索部分-->
		<view class="input" @click="Search">
			<u--input placeholder="请输入搜索关键词" prefixIcon="search" shape="circle" :disabled="true" suffixIcon="scan"
				prefixIconStyle="font-size: 20px;color: #909399"></u--input>
		</view>
		<!--主要部分-->
		<view class="u-demo-block__content main">
			<u-row justify="space-between" gutter="10">
				<!--左侧tabs栏-->
				<u-col span="3">
					<view class="tabs">
						<view class="tab" :class="{active:item.isnab}" v-for="item of tabs" :key="item.title"
							@click="tabItem(item)">
							{{item.title}}
						</view>
					</view>
				</u-col>
				<!--右侧内容部分-->
				<u-col span="9">
					<view class="commod">
						<!--宠物精选-->
						<view v-show="isNabCommod===1">
							<view class="commods" v-for="item of commodArr" :key="item.path" @click="Jump(item)">
								<u--image radius="10" :src="item.path" width="100px" height="100px"></u--image>
								<view class="title">
									<view class="text">{{item.text}}
									</view>
									<span>¥ {{item.price}}</span>
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
							<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
						</view>
						<!--宠物药品-->
						<view v-show="isNabCommod===2">
							<view class="commods" v-for="item of medicineArr" :key="item.path" @click="Jump(item)">
								<u--image radius="10" :src="item.path" width="100px" height="100px"></u--image>
								<view class="title">
									<view class="text">{{item.text}}
									</view>
									<span>¥ {{item.price}}</span>
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
							<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
						</view>
						<!--宠物之家-->
						<view v-show="isNabCommod===3">
							<view class="commods" v-for="item of homeArr" :key="item.path" @click="Jump(item)">
								<u--image radius="10" :src="item.path" width="100px" height="100px"></u--image>
								<view class="title">
									<view class="text">{{item.text}}
									</view>
									<span>¥ {{item.price}}</span>
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
							<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
						</view>
						<!--宠物物品-->
						<view v-show="isNabCommod===4">
							<view class="commods" v-for="item of outdoorArr" :key="item.path" @click="Jump(item)">
								<u--image radius="10" :src="item.path" width="100px" height="100px"></u--image>
								<view class="title">
									<view class="text">{{item.text}}
									</view>
									<span>¥ {{item.price}}</span>
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
							<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
						</view>
						<!--宠物玩具-->
						<view v-show="isNabCommod===5">
							<view class="commods" v-for="item of toyArr" :key="item.path" @click="Jump(item)">
								<u--image radius="10" :src="item.path" width="100px" height="100px"></u--image>
								<view class="title">
									<view class="text">{{item.text}}
									</view>
									<span>¥ {{item.price}}</span>
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
							<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
						</view>
						<!--洗浴工具-->
						<view v-show="isNabCommod===6">
							<view class="commods" v-for="item of bathArr" :key="item.path" @click="Jump(item)">
								<u--image radius="10" :src="item.path" width="100px" height="100px"></u--image>
								<view class="title">
									<view class="text">{{item.text}}
									</view>
									<span>¥ {{item.price}}</span>
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
							<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
						</view>
						<!--宠物传送-->
						<view v-show="isNabCommod===7">
							<view class="commods" v-for="item of transArr" :key="item.path" @click="Jump(item)">
								<u--image radius="10" :src="item.path" width="100px" height="100px"></u--image>
								<view class="title">
									<view class="text">{{item.text}}
									</view>
									<span>¥ {{item.price}}</span>
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
							<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
						</view>
						<!--宠物乐园-->
						<view v-show="isNabCommod===8">
							<view class="commods" v-for="item of paradArr" :key="item.path" @click="Jump(item)">
								<u--image radius="10" :src="item.path" width="100px" height="100px"></u--image>
								<view class="title">
									<view class="text">{{item.text}}
									</view>
									<span>¥ {{item.price}}</span>
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
							<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
						</view>
						<!--宠物点滴-->
						<view v-show="isNabCommod===9">
							<view class="commods" v-for="item of vaccineArr" :key="item.path" @click="Jump(item)">
								<u--image radius="10" :src="item.path" width="100px" height="100px"></u--image>
								<view class="title">
									<view class="text">{{item.text}}
									</view>
									<span>¥ {{item.price}}</span>
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
							<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
						</view>
						<!--宠物训练-->
						<view v-show="isNabCommod===10">
							<view class="commods" v-for="item of trainArr" :key="item.path" @click="Jump(item)">
								<u--image radius="10" :src="item.path" width="100px" height="100px"></u--image>
								<view class="title">
									<view class="text">{{item.text}}
									</view>
									<span>¥ {{item.price}}</span>
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
							<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>
<script>
	import {
		methods
	} from '../../uni_modules/uview-ui/libs/mixin/mixin'
	export default {
		name: 'Class',
		data() {
			return {
				isNabCommod: 1,
				//宠物精选数据
				commodArr: [{
					path: 'https://gd-hbimg.huaban.com/830654c528a73cabb3f7701f48b36d34ea195c6d1ff91-EMKF16_fw1200',
					text: '沙特尔猫别称沙特莱克斯猫，为法国传统品种，与俄罗斯蓝猫、英国短毛猫合称“世界三大蓝猫',
					price: 12999
				}, {
					path: 'https://gd-hbimg.huaban.com/2c10830eb2e4e18454a3cbd6f239a383dd48fc8616f35-xzvuYr_fw1200',
					text: '奥西猫兼具野生猫的精悍以及饲养猫的沉稳的气质，这种猫是在上个世纪50年代的后半开始由美国的饲养家们以阿比西尼亚猫为基础和暹罗猫',
					price: 33999
				}, {
					path: 'https://gd-hbimg.huaban.com/c43fc10935aa4aef8372ae339861546c16051fdf5699-9PWqKa_fw1200',
					text: '中国是狸花猫的源产地，它属于自然猫，因为是在千百年中经过许多品种的自然淘汰而保留下来的品种',
					price: 48899
				}, {
					path: 'https://gd-hbimg.huaban.com/60395ff670e15ecd8b9b0bd6fba2ffded10735da6a0654-hAw96B',
					text: '美国短尾猫体长0.7～1.2米，身高肩高36～38厘米，是分布在北美洲的一种猫科动物。短尾猫是有很强适应力的掠食者，栖息在林地、半沙漠、城市及沼泽',
					price: 6999
				}, {
					path: 'https://gd-hbimg.huaban.com/dfab4cec864e05e2b4a26359b6d00f58937cef7d1b308-bGFuaG_fw1200',
					text: '土耳其梵猫原产土耳其国，长型而结实体型，中长度长毛，被毛白而发亮，毛质如同丝绸般十分光滑',
					price: 68999
				}, {
					path: 'https://gd-hbimg.huaban.com/48797848f8d0c6351b7774217ac9c1c258ddd10b4a8a3-ASpDgI_fw1200webp',
					text: '索马里猫大小中等，外表有王者风度。形似阿比西尼亚猫，但被毛为半长毛。体重3.5到5.5公斤。活泼，但不热情过度',
					price: 22999
				}, {
					path: 'https://gd-hbimg.huaban.com/e5e7fa11eb5792274c74efe0877b65f4f719be2f3dba5-LLG3cT_fw1200webp',
					text: '东奇尼猫是英美两地用暹罗猫和缅甸猫杂交所培育出的纯种短毛猫，如同暹罗猫一样，这种猫也有重点色，不过远不如暹罗猫明显',
					price: 72999
				}, {
					path: 'https://gd-hbimg.huaban.com/1b6e48e54be6ea0bf0231776c2e13c681e29f8a51dba1-OpX8R6_fw1200',
					text: '挪威森林猫以白话直译的说法，就是在挪威森林里面栖息的、生存的猫，这是斯堪地半岛特有的品种',
					price: 43999
				}, {
					path: 'https://gd-hbimg.huaban.com/ed52a5293b263624c3e572f34c7796210ece11861b36a-qXF3ZG_fw1200webp',
					text: '新加坡猫原产新加坡，体型小巧玲珑，肌肉结实，在猫中属侏儒一类，成长后的雌猫不足2公斤，最重的雄猫也极少有超过2.5公斤以上重量的',
					price: 68888
				}, {
					path: 'https://gd-hbimg.huaban.com/40e934033eb4b81a39a120c5eb0e9f2fcdbf6bf4fd70-YjATQ0_fw1200webp',
					text: '卷毛猫分柯尼斯卷毛猫和德文卷毛猫以及塞尔凯克卷毛猫和拉波猫和西伯利亚卷毛猫五种',
					price: 99999
				}],
				//宠物药品数据
				medicineArr: [{
					path: 'https://gd-hbimg.huaban.com/961a9e5c40b805a6fcf4cfaf0b67c6d0ced98fcc43393-mNqFsT_fw1200webp',
					text: '盐酸多西环素片猫咪感冒药打喷嚏流鼻涕猫鼻支治疗药狗狗消炎片猫，猫咪感冒药狗狗宠物咳嗽发烧干呕打喷嚏流鼻涕猫支鼻消炎多西环素',
					price: 179
				}, {
					path: 'https://gd-hbimg.huaban.com/d926af488569d567203526ff06adb36f47652eab25e3d-g9eUDF_fw1200webp',
					text: '盐酸多西环素鼻支治疗呼吸道猫咪感冒药打喷嚏流鼻涕速诺消炎片猫，普安特宠物狗狗驱虫药猫咪体内外一体驱虫跳蚤蜱虫爱滴克非泼罗尼',
					price: 229
				}, {
					path: 'https://gd-hbimg.huaban.com/e44802ad76bd60e1671d0276a8934b1c0ac814d1de1c-068gfJ_fw1200',
					text: '健胃消食片兽用狗药宠物犬用猫咪腹泻呕吐拉稀便秘益生菌调理肠胃，宠物犬猫狗狗呼吸道感染 咳嗽 干呕 鱼腥草注射液狗药品肺炎清肺',
					price: 330
				}, {
					path: 'https://gd-hbimg.huaban.com/9c37f942d2e2bab78f2bd315223f733795bbbc127fb5-aYo6nQ_fw1200',
					text: '非泼罗尼滴剂3支盒装狗狗猫咪体外用驱虫药去跳蚤蜱虫 宠物药品，盐酸多西环素片猫鼻支治疗药猫咪感冒药打喷嚏流鼻涕速诺消炎片猫',
					price: 69
				}, {
					path: 'https://gd-hbimg.huaban.com/991ee415fe2a0600abee99b881d429409a5aae0d85c6-Yw1k5a_fw1200',
					text: '宠物猫咪狗狗体内外驱虫药皮肤病猫藓滴眼液滴耳液【药品清仓】，宠物消食片兔猫咪益生菌狗狗健胃片调理肠胃挑食增食欲幼犬肠胃宝',
					price: 288
				}, {
					path: 'https://gd-hbimg.huaban.com/f5165dac93980f0e6cc4f71877d8ea1ce1a6ea0b45020-6JvQNA_fw1200',
					text: '狗狗猫咪感冒药止咳犬用宠物泰迪消炎片咳嗽速诺发烧盐酸多西环素，狗狗猫咪感冒药止咳犬用宠物泰迪消炎片咳嗽速诺发烧盐酸多西环素',
					price: 79
				}, {
					path: 'https://gd-hbimg.huaban.com/5e92796d8e23b3674d26293c3b7bcdaadb237e8033468-Of6cxv_fw1200',
					text: '爱迪森果根素宠物狗狗犬窝咳甘胆口服液猫咪感冒药咳嗽流鼻涕，爱迪森果根素宠物狗狗犬窝咳甘胆口服液猫咪感冒药咳嗽流鼻涕',
					price: 499
				}, {
					path: 'https://gd-hbimg.huaban.com/ef18e96af0f03b001306741a6955b7cb428f87f338433-v74JXy_fw1200',
					text: '佑多萌宠呼宁盐酸多西环素片猫感冒呼吸道感染咳嗽鼻涕宠物消炎药，佑多萌宠呼宁盐酸多西环素片猫感冒呼吸道感染咳嗽鼻涕宠物消炎药',
					price: 379
				}],
				//宠物之家数据
				homeArr: [{
					path: 'https://gd-hbimg.huaban.com/89578ea728e47a80242a86560f8d8a8781979d2b5c84-lErNfJ_fw1200',
					text: '猫窝四季通用狗窝夏季半封闭式夏天垫子小猫屋睡觉的宠物猫咪用品，猫窝四季通用狗窝夏季半封闭式夏天垫子小猫屋睡觉的宠物猫咪用品',
					price: 699
				}, {
					path: 'https://gd-hbimg.huaban.com/3fbb44b7637103336156da696c1a003a9e5a21024c88a-daiYtf_fw1200webp',
					text: '猫窝四季通用猫咪夏天用睡觉的床夏季猫屋幼猫狗窝宠物用品大全套，猫窝四季通用猫咪夏天用睡觉的床夏季猫屋幼猫狗窝宠物用品大全套',
					price: 1299
				}, {
					path: 'https://gd-hbimg.huaban.com/a7a3dd5ed7c1d5dca6ea554ea14225f92ccf47b32fa4-6g627r_fw1200',
					text: '猫抓板窝圆形猫爪板耐磨瓦楞纸猫窝抓盘一体不掉屑猫玩具猫咪用品，猫抓板窝圆形猫爪板耐磨瓦楞纸猫窝抓盘一体不掉屑猫玩具猫咪用品',
					price: 788
				}, {
					path: 'https://gd-hbimg.huaban.com/d6527d50e2aae1e6d56c13964c65078521299333579c2-XOYCvC_fw1200',
					text: '猫窝四季通用夏季猫屋封闭式猫咪幼猫小猫床夏天狗窝冬季保暖用品，猫窝四季通用夏季猫屋封闭式猫咪幼猫小猫床夏天狗窝冬季保暖用品',
					price: 1399
				}, {
					path: 'https://gd-hbimg.huaban.com/2d53f9631f2d62f806b2422c8713ddf2a9787a3fe00e-aYkuNI_fw1200',
					text: '猫笼子家用室内别墅超大自由空间厕所一体猫咪幼猫养猫舍猫窝猫屋，猫笼子家用室内别墅超大自由空间厕所一体猫咪幼猫养猫舍猫窝猫屋',
					price: 2299
				}, {
					path: 'https://gd-hbimg.huaban.com/1c3f4bb9e18a0e54ad6dee9c2f5f6c360c0e558c6445f-Rt236S_fw1200',
					text: '网红猫窝四季通用狗窝夏季猫咪沙发床猫窝冬季保暖封闭式宠物用品，网红猫窝四季通用狗窝夏季猫咪沙发床猫窝冬季保暖封闭式宠物用品',
					price: 3299
				}, {
					path: 'https://gd-hbimg.huaban.com/97792b785f82a1f76d0cd734f485d740c983fab510241-zZVWND_fw1200',
					text: '猫爬架猫窝猫树一体猫玩具小型不占地猫架子猫抓板大型豪华猫别墅，猫爬架猫窝猫树一体猫玩具小型不占地猫架子猫抓板大型豪华猫别墅',
					price: 999
				}, {
					path: 'https://gd-hbimg.huaban.com/bca728d0276486554edda48c768b32d586bcff7a3ba1c-POIqMH_fw1200',
					text: 'catsle藤编猫窝吊篮夏季半封闭四季通用可拆洗宠物用品猫咪床别墅，catsle藤编猫窝吊篮夏季半封闭四季通用可拆洗宠物用品猫咪床别墅',
					price: 6666
				}],
				//户外物品数据
				outdoorArr: [{
					path: 'https://gd-hbimg.huaban.com/822cbd2a013e362fad59b017afcf8cd19d0ba49c21bf5-ME0SPA_fw1200',
					text: '猫包外出便携包太空舱透气双肩背包猫书包大容量猫咪外带宠物用品,猫包外出便携包太空舱透气双肩背包猫书包大容量猫咪外带宠物用品',
					price: 199
				}, {
					path: 'https://gd-hbimg.huaban.com/4c3e0acfd9899fa96982dfea77392de884d5e936bd65e-2HBKsb_fw1200',
					text: '猫包外出便携包太空舱透气双肩背包猫书包大容量猫咪外带宠物用品,猫包外出便携包太空舱透气双肩背包猫书包大容量猫咪外带宠物用品',
					price: 239
				}, {
					path: 'https://gd-hbimg.huaban.com/834770b5d6fe816deec667f859d5b989032724e76d72-lBGelU_fw1200',
					text: '猫包外出便携大容量双肩背包太空舱透气宠物猫咪外带书包笼子用品,猫包外出便携大容量双肩背包太空舱透气宠物猫咪外带书包笼子用品',
					price: 288
				}, {
					path: 'https://gd-hbimg.huaban.com/1565ced479717f3dcfd1e59fa092392bd0c83e3e2ed34-wK9zWc_fw1200',
					text: '猫包外出便携猫咪背包宠物太空舱坐车神器双肩斜挎狗狗大容量猫箱,猫包外出便携猫咪背包宠物太空舱坐车神器双肩斜挎狗狗大容量猫箱',
					price: 199
				}, {
					path: 'https://gd-hbimg.huaban.com/be0d0e7ab67ecd4306e9873e74a2a2b99ab8714c7ad6f-uHPWQT_fw1200',
					text: '猫包外出便携狗狗双肩猫咪背包宠物书包透气帆布笼子猫袋宠物用品,猫包外出便携狗狗双肩猫咪背包宠物书包透气帆布笼子猫袋宠物用品',
					price: 99
				}, {
					path: 'https://gd-hbimg.huaban.com/4bf63b228d4dce4fb9f649fad5a040fe41267307f5b4-eQcHGk_fw1200',
					text: '猫包外出便携夏天透气太空舱书包斜挎手提猫咪背包猫笼子外带用品,猫包外出便携夏天透气太空舱书包斜挎手提猫咪背包猫笼子外带用品',
					price: 126
				}, {
					path: 'https://gd-hbimg.huaban.com/3714ac4230f0583b3f2ac057de3b007e35eac35931474-blGJ7j_fw1200',
					text: '猫包外出便携书包太空舱冬天斜挎背包狗狗猫咪猫笼子外带携带用品,猫包外出便携书包太空舱冬天斜挎背包狗狗猫咪猫笼子外带携带用品',
					price: 439
				}, {
					path: 'https://gd-hbimg.huaban.com/a6d2670b7f7f67b74f02f5e28e6545e163138dec565f9-Oqahl0_fw1200',
					text: '猫包外出便携透气双肩猫书包宠物包外出手提不勒手狗狗背包大容量,猫包外出便携透气双肩猫书包宠物包外出手提不勒手狗狗背包大容量',
					price: 386
				}],
				//宠物玩具数据
				toyArr: [{
					path: 'https://gd-hbimg.huaban.com/96c990b4b97c2b9b0a2f34a353b8c4917e457b5c321ae-TuI6sa_fw1200',
					text: '梅花脚狗狗玩具球耐咬磨牙大型犬泰迪狗幼犬训练宠物解闷发声玩具，梅花脚狗狗玩具球耐咬磨牙大型犬泰迪狗幼犬训练宠物解闷发声玩具',
					price: 66
				}, {
					path: 'https://gd-hbimg.huaban.com/a9cf4d71254bd2c27fc144b2255a821c69a2c0399684f-BMsID6_fw1200',
					text: '狗狗玩具耐咬幼犬解闷发声磨牙棒比熊柯基泰迪小型犬小狗宠物用品，狗狗玩具耐咬幼犬解闷发声磨牙棒比熊柯基泰迪小型犬小狗宠物用品',
					price: 99
				}, {
					path: 'https://gd-hbimg.huaban.com/c399909d76e757647d26f2c449e6a0719002267978e14-tqMQMG_fw1200',
					text: '新款猫咪玩具薄荷毛绒仿真鱼磨牙耐咬逗猫棒猫猫自嗨解闷宠物用品，新款猫咪玩具薄荷毛绒仿真鱼磨牙耐咬逗猫棒猫猫自嗨解闷宠物用品',
					price: 68
				}, {
					path: 'https://gd-hbimg.huaban.com/3707dba11df0eeadcf320db6f28515c8e51359b42dec3-1bsvsB_fw1200',
					text: '猫咪玩具漏食球自嗨解闷冻干摇摇乐逗猫零食喂食器玩具用品大全，猫咪玩具漏食球自嗨解闷冻干摇摇乐逗猫零食喂食器玩具用品大全',
					price: 49
				}, {
					path: 'https://gd-hbimg.huaban.com/83d94cf82bf4cba961fe439d6896b4e826c9a6be235d5-OPLGLl_fw1200',
					text: '剑麻球猫玩具自嗨解闷逗猫棒耐咬磨牙猫抓板宠物不倒翁小猫咪用品，剑麻球猫玩具自嗨解闷逗猫棒耐咬磨牙猫抓板宠物不倒翁小猫咪用品',
					price: 129
				}, {
					path: 'https://gd-hbimg.huaban.com/cfde77dc4ed254b2aba95e24f11c15543bbcb771848ae-whgWBC_fw1200',
					text: '猫 玩具新款逗猫玩具自嗨猫咪玩具球趣味不倒翁猫抓球羽毛逗猫棒，猫 玩具新款逗猫玩具自嗨猫咪玩具球趣味不倒翁猫抓球羽毛逗猫棒',
					price: 36
				}, {
					path: 'https://gd-hbimg.huaban.com/04bebf49179e7ffbd39bb953922c8f9776284a071d9c2-yX6vwq_fw1200',
					text: 'PETSHY百宠千爱 迷失森林猫转盘玩具猫咪逗猫棒自嗨解闷神器用品，PETSHY百宠千爱 迷失森林猫转盘玩具猫咪逗猫棒自嗨解闷神器用品',
					price: 98
				}, {
					path: 'https://gd-hbimg.huaban.com/53d12056adac8156c48a45443f1e14611460cbb2711d0-kKLqyg_fw1200',
					text: '猫咪玩具自嗨解闷逗猫棒猫猫冻干漏食球小猫零食转盘宠物益智用品，猫咪玩具自嗨解闷逗猫棒猫猫冻干漏食球小猫零食转盘宠物益智用品',
					price: 99
				}],
				//宠物洗浴数据
				bathArr: [{
					path: 'https://gd-hbimg.huaban.com/9699936d50d45269c4a3611099b6aa5970cb212d45636-QNQ7gM_fw1200',
					text: '宠物洗澡手套狗狗猫咪洗澡神器泰迪金毛搓澡按摩刷子加厚防抓防咬，宠物洗澡手套狗狗猫咪洗澡神器泰迪金毛搓澡按摩刷子加厚防抓防咬',
					price: 19
				}, {
					path: 'https://gd-hbimg.huaban.com/fd069468d42bdecf8b99fe499da77f418253761474ee2-lijUpC_fw1200',
					text: '宠物洗澡刷狗狗洗澡神器给猫咪小狗搓澡专用硅胶刷子工具洗狗用品，宠物洗澡刷狗狗洗澡神器给猫咪小狗搓澡专用硅胶刷子工具洗狗用品',
					price: 49
				}, {
					path: 'https://gd-hbimg.huaban.com/1b04cc4dabdce024d1a8d3af149f75a5a62be3cb6a092-6OHWvg_fw1200',
					text: '宠物洗澡刷硅胶按摩刷狗狗猫咪洗澡专用柔软亲肤刷子宠物清洁用品，宠物洗澡刷硅胶按摩刷狗狗猫咪洗澡专用柔软亲肤刷子宠物清洁用品',
					price: 66
				}, {
					path: 'https://gd-hbimg.huaban.com/930923e989617383d3ce946d25ed81d6eac42ceb9f99d-83xIV8_fw1200',
					text: '宠物狗狗洗澡刷猫咪洗澡刷子沐浴硅胶按摩刷宠物搓澡神器颜色随机，宠物狗狗洗澡刷猫咪洗澡刷子沐浴硅胶按摩刷宠物搓澡神器颜色随机',
					price: 18
				}, {
					path: 'https://gd-hbimg.huaban.com/dff1357fd7a0155fb05832a4e7361e841577c2a8716f6-bR7FLW_fw1200',
					text: '宠物狗狗洗澡刷软毛按摩刷给狗搓澡神器猫咪梳毛专用梳子沐浴用品，宠物狗狗洗澡刷软毛按摩刷给狗搓澡神器猫咪梳毛专用梳子沐浴用品',
					price: 79
				}, {
					path: 'https://gd-hbimg.huaban.com/2c0831a880e0195bd69a50f6ee7ad4293602990561a69-7CWjvT_fw1200',
					text: '宠物洗澡刷狗洗澡刷猫咪洗澡按摩刷猫狗沐浴刷狗狗洗澡去毛工具，宠物洗澡刷狗洗澡刷猫咪洗澡按摩刷猫狗沐浴刷狗狗洗澡去毛工具',
					price: 39
				}, {
					path: 'https://gd-hbimg.huaban.com/08e902745a3d8eb1442f62328e9a3dc4013a3a1334999-lxD2AA_fw1200',
					text: '得乐按摩狗狗洗澡刷搓澡宠物喷头猫咪泰迪小狗金毛大型犬花洒沐浴，得乐按摩狗狗洗澡刷搓澡宠物喷头猫咪泰迪小狗金毛大型犬花洒沐浴',
					price: 39
				}, {
					path: 'https://gd-hbimg.huaban.com/a4bc7c94ea8a9c5d5dbedd12baf99a6fda34417e8371b-pGDJ7o',
					text: '宠物洗澡刷子沐浴刷套手刷狗狗搓澡猫咪洗澡刷毛器，宠物洗澡刷子沐浴刷套手刷狗狗搓澡猫咪洗澡刷毛器',
					price: 68
				}],
				//宠物传送数据
				transArr: [{
					path: 'https://gd-hbimg.huaban.com/2aa7a052e5261b758b7bef5cf9cc3d9d8991f8501283e5-YEdLjs_fw1200',
					text: '宠物产品用品拍摄狗狗服装玩具短视频猫咪食品广告模特兔水族摄影，宠物产品用品拍摄狗狗服装玩具短视频猫咪食品广告模特兔水族摄影',
					price: 1299
				}, {
					path: 'https://gd-hbimg.huaban.com/2d86410181659d446f82516072883d7422b5410a1e649a-1bWYBe_fw1200',
					text: '无版权动物宠物狗狗高清壁纸背景PS海报平面设计图片摄影照片素材，无版权动物宠物狗狗高清壁纸背景PS海报平面设计图片摄影照片素材',
					price: 699
				}, {
					path: 'https://gd-hbimg.huaban.com/a20a5d81cd2b398ac246593350285ae0476d0365dea1f-gMZ8ks_fw1200',
					text: 'billiebengal 宠物摄影素材大师电子版猫咪爱宠素材学习资料，billiebengal 宠物摄影素材大师电子版猫咪爱宠素材学习资料',
					price: 599
				}, {
					path: 'https://gd-hbimg.huaban.com/038bded75337e3ec7c997927398d56e4a6c9193765f6b-npTiiz',
					text: '手机拍照入门摄影教程人像宠物美食风景修图构图拍照技巧视频课程，手机拍照入门摄影教程人像宠物美食风景修图构图拍照技巧视频课程',
					price: 1199
				}, {
					path: 'https://gd-hbimg.huaban.com/353c5f0f16bfd2b6946715d2afdf7851f6c90e413ae1e-QHVjrZ_fw1200',
					text: '亚马逊产品拍摄淘宝摄影家具静物家纺拍照主图视频制作摄影服务，亚马逊产品拍摄淘宝摄影家具静物家纺拍照主图视频制作摄影服务',
					price: 1688
				}, {
					path: 'https://gd-hbimg.huaban.com/5c5d321431764a533fe48230e83b5952a431d62d4b95a-w37pob_fw1200',
					text: 'lyripapa摄影作品 儿童宠物家庭记录摄影参考 审美提升 家庭纪实，lyripapa摄影作品 儿童宠物家庭记录摄影参考 审美提升 家庭纪实',
					price: 648
				}, {
					path: 'https://gd-hbimg.huaban.com/4b07e23c6dd40c935dd33032612fc9561046de5f40102-R2cHnV',
					text: 'LR预设清新可爱宠物摄影调色PS动物猫咪狗狗PR飞思LUTs滤镜，LR预设清新可爱宠物摄影调色PS动物猫咪狗狗PR飞思LUTs滤镜',
					price: 1368
				}, {
					path: 'https://gd-hbimg.huaban.com/233102720bd43d9254939959abb5b84366ca8f9e27f44-O4eiQX',
					text: '日系猫咪宠物摄影相册画册日文字体排版PS后期设计素材PSD模板，日系猫咪宠物摄影相册画册日文字体排版PS后期设计素材PSD模板',
					price: 1600
				}],
				//宠物乐园数据
				paradArr: [{
					path: 'https://gd-hbimg.huaban.com/a40ac5dd6f56446c74f8c47cd27f14084de6ab92751dc-qvPxpk_fw1200',
					text: '仿真动物模型全套装野生动物园认知恐龙世界男孩礼物儿童动物玩具，仿真动物模型全套装野生动物园认知恐龙世界男孩礼物儿童动物玩具',
					price: 799
				}, {
					path: 'https://gd-hbimg.huaban.com/32dbdcabc5e9a94c7c01f7392dfd37f6bec03f3847aa7-UN2Lde',
					text: '海野生动物园是我国最大的国家级野生动物园，占地153公顷，距市区35公里。上海野生动物园汇集了世界各地具有代表性的珍稀动物200余种上万余头（只）',
					price: 999
				}, {
					path: 'https://gd-hbimg.huaban.com/2432cc3c0ddd7fed15607960fc5c84f1f6ec6a3c13f47-abI20H_fw1200',
					text: '在上海野生动物园车入区，您可看到具有绅士风度的长颈鹿，伸长它的脖子，盼望游人的到来；您可观赏到陆地上最大的哺乳动物——大象，温和地向游客致敬',
					price: 1299
				}, {
					path: 'https://gd-hbimg.huaban.com/7b93e1250290e65a10391e23c307f36627cc556dd7a03-bXPbom_fw1200',
					text: '上海野生动物园食草动物区――食草动物放养区面积有21公顷，上海野生动物园是车入区占地最大的区域。该区模拟动物生存的草、山丘、湖泊等生活环境',
					price: 699
				}, {
					path: 'https://gd-hbimg.huaban.com/4c99ddd1c1accc4f43fe92a4dcd964820a9ea9f8328ad7-mYNPwR',
					text: '上海野生动物园步行区，可观赏到白狮、白虎、白袋鼠、大熊猫、扬子鳄等世界珍稀动物；驼羊、骆驼、斑马、象等动物与您合影，让您惊奇体验，机会难得',
					price: 599
				}, {
					path: 'https://gd-hbimg.huaban.com/57ee8327071f24356232fb9a5fd5f3ac8a7c47136ca1d-KIPDkc_fw1200',
					text: '1995年5月破土动地，1997年5月24日正式开园。占地面积7.2平方公里，分6个大区。经过两年建设成初具规模的大连森林动物园',
					price: 899
				}, {
					path: 'https://gd-hbimg.huaban.com/8e36d4ece8ef24790f504f57f105d2de3c6be41767f1d-JJMR6C',
					text: '鸟园、孔雀园。鸵鸟园、杏花园、袋鼠园、银河广场，绿地葱郁、流泉鸣弦、鹤鸣幽谷。园内亭台小榭、草庐茅舍、信步园内让人宠辱皆忘、意趣盎然',
					price: 2299
				}, {
					path: 'https://gd-hbimg.huaban.com/1421f2383c257a186e0e1f174a39184bab88ab8a53361-A88ldy_fw1200',
					text: '建于2001年，在白云山的南面，占地100公顷。一二期之间用一条1.25公里的空中索道相连，二期分为三大部分：野生放养园、热带雨林馆、非常“6＋1”大象表演场',
					price: 1699
				}],
				//宠物点滴数据
				vaccineArr: [{
					path: 'https://gd-hbimg.huaban.com/dd63651f8aaa2bb40b0501c89662c9dd63cbaa5a3d82f-YAj7vC',
					text: '进口美国硕腾妙三多猫三联疫苗妙三多疫苗3针+狂犬幼猫咪疫苗套餐,进口美国硕腾妙三多猫三联疫苗妙三多疫苗3针+狂犬幼猫咪疫苗套餐',
					price: 399
				}, {
					path: 'https://gd-hbimg.huaban.com/774295221dafc7aa4597a987df53266b1441e94549118-TKOmjB',
					text: '进口英特威犬猫狂犬疫苗猫咪狗狗狂犬育苗宠物 猫狗用狂犬疫苗1针,进口英特威犬猫狂犬疫苗猫咪狗狗狂犬育苗宠物 猫狗用狂犬疫苗1针',
					price: 699
				}, {
					path: 'https://gd-hbimg.huaban.com/11a075b7721d54175dfb0e0df2ddcc32ee39e9a0233ee-vDClV9',
					text: '狂犬疫苗猫狗用成犬幼犬小狗宠物狗狗猫咪狂犬疫苗一套自打预防针,狂犬疫苗猫狗用成犬幼犬小狗宠物狗狗猫咪狂犬疫苗一套自打预防针',
					price: 799
				}, {
					path: 'https://gd-hbimg.huaban.com/ab00fbac43d0f7c0f981a092022d3c7ebf8b499c12e9f-ykvaQX',
					text: '美国辉瑞进口妙三多猫咪疫苗幼猫猫三联预防猫瘟狂犬育苗加强套餐,美国辉瑞进口妙三多猫咪疫苗幼猫猫三联预防猫瘟狂犬育苗加强套餐',
					price: 648
				}, {
					path: 'https://gd-hbimg.huaban.com/350cf197c2d4a4ee13cb013053eb1ee67913f44d4b3fc-GmOYWK',
					text: '进口英特威犬猫通用狂犬疫苗宠物狗狗狂犬成幼犬小猫咪打预防病针,进口英特威犬猫通用狂犬疫苗宠物狗狗狂犬成幼犬小猫咪打预防病针',
					price: 328
				}, {
					path: 'https://gd-hbimg.huaban.com/87b6554cbd2ee3370bd9f57c6788413d3a9cb3ba6484a-XKvZMw',
					text: '进口英特威狂犬疫苗幼犬疫苗狗狗四联疫苗套餐宠物小狗幼犬全套针,进口英特威狂犬疫苗幼犬疫苗狗狗四联疫苗套餐宠物小狗幼犬全套针',
					price: 369
				}, {
					path: 'https://gd-hbimg.huaban.com/c35cfee7d0e237ae1f90bdba45782f72744ec94a55693-oRVNZy',
					text: '「正品保证」美国辉瑞妙三多猫三联疫苗1针+狂犬疫苗成猫免疫套餐,「正品保证」美国辉瑞妙三多猫三联疫苗1针+狂犬疫苗成猫免疫套餐',
					price: 728
				}, {
					path: 'https://gd-hbimg.huaban.com/10d574c688d8c3349c68b5ee0b156f8abe63db715729c-rTceZ0',
					text: '雷米高猫咪驱虫药体内外一体狗狗体外滴剂跳蚤蜱虫宠物猫狗用,雷米高猫咪驱虫药体内外一体狗狗体外滴剂跳蚤蜱虫宠物猫狗用',
					price: 779
				}],
				//宠物运动数据
				trainArr: [{
					path: 'https://gd-hbimg.huaban.com/522c34c3c23d49e792d9ffcfb6c39b5217acbea91d459-aepecz_fw1200',
					text: 'PETSHY百宠千爱 迷失森林猫转盘玩具猫咪逗猫棒自嗨解闷神器用品，PETSHY百宠千爱 迷失森林猫转盘玩具猫咪逗猫棒自嗨解闷神器用品',
					price: 699
				}, {
					path: 'https://gd-hbimg.huaban.com/094392bdab921a73b034eaf8dac069cd42fff4db22263-bUFuiA_fw1200',
					text: '猫抓板猫咪猫笼挂式猫抓柱子剑麻耐磨耐抓不掉屑猫咪蹭痒磨爪麻绳，猫抓板猫咪猫笼挂式猫抓柱子剑麻耐磨耐抓不掉屑猫咪蹭痒磨爪麻绳',
					price: 299
				}, {
					path: 'https://gd-hbimg.huaban.com/bb36d2c4fff347c061ec988a64f192f1f23e30b34d26e-xMxH1G',
					text: '猫抓板耐磨不掉屑剑麻立式猫抓球耐抓自嗨解闷磨爪器猫玩具猫爪板，猫抓板耐磨不掉屑剑麻立式猫抓球耐抓自嗨解闷磨爪器猫玩具猫爪板',
					price: 229
				}, {
					path: 'https://gd-hbimg.huaban.com/abcac4742d20e7d6b3d01a4505251c61c550c129548e2-ip8WmS_fw1200',
					text: '猫墙角蹭毛器猫咪自助挠痒痒玩具蹭痒器按摩刷宠物用品蹭脸猫抓板，猫墙角蹭毛器猫咪自助挠痒痒玩具蹭痒器按摩刷宠物用品蹭脸猫抓板',
					price: 128
				}, {
					path: 'https://gd-hbimg.huaban.com/b87b64d33335aad091c9a88ac78c972f9f91ecb55e41e-UUIuyJ_fw1200',
					text: '宠物猫咪跑步机高纤维板健身静音滚轮抖音网红实木跑轮猫爬架玩具，宠物猫咪跑步机高纤维板健身静音滚轮抖音网红实木跑轮猫爬架玩具',
					price: 99
				}, {
					path: 'https://gd-hbimg.huaban.com/1ad7990c0f7c200de64ab97dfce384c893ab1da31b5c-wmrmaK_fw1200',
					text: '猫咪跑步机静音滚轮圈实木大型猫爬架高纤维宠物运动健身猫咪玩具，猫咪跑步机静音滚轮圈实木大型猫爬架高纤维宠物运动健身猫咪玩具',
					price: 68
				}, {
					path: 'https://gd-hbimg.huaban.com/522c34c3c23d49e792d9ffcfb6c39b5217acbea91d459-aepecz_fw1200',
					text: '猫咪跑步机滚轮猫抓板剑麻猫玩具自嗨解闷爪磨抓板不掉屑立式耐磨，猫咪跑步机滚轮猫抓板剑麻猫玩具自嗨解闷爪磨抓板不掉屑立式耐磨',
					price: 299
				}, {
					path: 'https://gd-hbimg.huaban.com/b87b64d33335aad091c9a88ac78c972f9f91ecb55e41e-UUIuyJ_fw1200',
					text: '宠物猫咪跑步机静音滚轮纤维板健身运动实木猫跑轮猫爬架转轮玩具，宠物猫咪跑步机静音滚轮纤维板健身运动实木猫跑轮猫爬架转轮玩具',
					price: 126
				}],
				tabs: [{
					title: '宠物精选',
					num: 1,
					isnab: true
				}, {
					title: '宠物药品',
					num: 2,
					isnab: false
				}, {
					title: '宠物之家',
					num: 3,
					isnab: false
				}, {
					title: '户外物品',
					num: 4,
					isnab: false
				}, {
					title: '宠物玩具',
					num: 5,
					isnab: false
				}, {
					title: '洗浴工具',
					num: 6,
					isnab: false
				}, {
					title: '宠物传送',
					num: 7,
					isnab: false
				}, {
					title: '宠物乐园',
					num: 8,
					isnab: false
				}, {
					title: '宠物点滴',
					num: 9,
					isnab: false
				}, {
					title: '宠物训练',
					num: 10,
					isnab: false
				}],
			}
		},
		methods: {
			tabItem(item) {
				this.tabs.forEach((p) => {
					p.isnab = false;
				});
				item.isnab = true;
				this.isNabCommod = item.num;
				this.show();
			},
			show() {
				this.$refs.uToast.show({
					type: 'loading',
					title: '正在加载',
					message: "正在加载",
					duration:'800'
				})
			},
			Jump(item) {
				console.log(item);
				uni.navigateTo({
					url: `../commod/Commod?item=` + encodeURIComponent(JSON.stringify(item)),
				});
			},
			Search(){
				uni.navigateTo({
					url:"/pages/search/Search",
				});
			},
		},
		onShow() {
			uni.$on('classDatas', (item) => {
				this.show();
				console.log(666, item.item);
				this.tabs.forEach((p) => {
					p.isnab = false;
				});
				this.tabs.forEach((i) => {
					if (i.num === item.item.num) {
						i.isnab = true;
					}
				});
				this.isNabCommod = item.item.num;
			});
		},
		onReady() {
			this.show()
		},
		onUnload() {
			uni.$off('classDatas');
		},
		
	}
</script>

<style lang="scss" scoped>
	.class {
		background-color: #f3f4f6;
		opacity: 0.8;
		height: 100%;

		.main {
			.tabs {
				.tab {
					width: 100%;
					height: 100rpx;
					line-height: 100rpx;
					text-align: center;
					font-size: 30rpx;
					margin-bottom: 15rpx;
				}

				.active {
					border-left: 8rpx solid #b842ff;
					background-color: #fff;
					color: #b842ff;
				}
			}

			.commod {
				height: 1165rpx;
				padding: 15rpx;
				overflow: auto;
				opacity: 1;

				.commods {
					margin-top: 15rpx;
					margin-bottom: 20rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					border: 1px solid #ccc;
					border-radius: 10rpx;
					height: 240rpx;
					padding-left: 15rpx;

					.title {
						flex: 1;
						padding-left: 15rpx;

						.text {
							font-size: 21rpx;
							padding-bottom: 25rpx;
						}

						span {
							font-size: 45rpx;
							font-weight: bold;
							color: red;
						}
					}
				}
			}
		}

		.input {
			padding: 20rpx;
		}

		.wrap {
			padding: 12px;
		}

		.demo-layout {
			height: 25px;
			border-radius: 4px;
		}
	}
</style>