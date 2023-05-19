<template>
	<view class="goodslist">
		<view>
			<u-toast ref="uToast" :loading="true"></u-toast>
		</view>
		<view class="inputs">
			<u--input @blur="Search" shape="circle" v-model="value" placeholder="请输入搜索关键词" suffixIcon="search"
				prefixIconStyle="font-size: 20px;color: #909399"></u--input>
		</view>
		<view tabs>
			<u-tabs :current="current" :list="list" @click="click" lineColor="#b842ff" :activeStyle="{color:'#b842ff'}"
				lineWidth="35" itemStyle="padding-left: 30px; padding-right: 30px; height: 44px;"></u-tabs>
		</view>
		<view class="main">
			<!--综合内容-->
			<view v-if="item==='综合'">
				<view v-if="comper.length">
					<view class="good" v-for="item of comper" :key="item.path">
						<view class="image">
							<u--image radius="15rpx" :showLoading="true" :src="item.path" width="90px"
								height="90px"></u--image>
						</view>
						<view class="title">
							<view>{{item.text}}</view>
							<view class="text">
								<span>¥ {{item.price}}</span>
								<view @click="Jump(item)">
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
						</view>
					</view>
					<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
				</view>
				<view class="error" v-if="!comper.length">
					<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
					</image>
					<text>暂无内容</text>
				</view>
			</view>
			<!--新品内容-->
			<view v-if="item==='新品'">
				<view v-if="newGoods.length">
					<view class="good" v-for="item of newGoods" :key="item.path">
						<view class="image">
							<u--image radius="15rpx" :showLoading="true" :src="item.path" width="90px"
								height="90px"></u--image>
						</view>
						<view class="title">
							<view>{{item.text}}</view>
							<view class="text">
								<span>¥ {{item.price}}</span>
								<view @click="Jump(item)">
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
						</view>
					</view>
					<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
				</view>
				<view class="error" v-if="!newGoods.length">
					<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
					</image>
					<text>暂无内容</text>
				</view>
			</view>
			<!--销量内容-->
			<view v-if="item==='销量'">
				<view v-if="sales.length">
					<view class="good" v-for="item of sales" :key="item.path">
						<view class="image">
							<u--image radius="15rpx" :showLoading="true" :src="item.path" width="90px"
								height="90px"></u--image>
						</view>
						<view class="title">
							<view>{{item.text}}</view>
							<view class="text">
								<span>¥ {{item.price}}</span>
								<view @click="Jump(item)">
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
						</view>
					</view>
					<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
				</view>
				<view class="error" v-if="!sales.length">
					<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
					</image>
					<text>暂无内容</text>
				</view>
			</view>
			<!--价格内容-->
			<view v-if="item==='价格'">
				<view v-if="prices.length">
					<view class="good" v-for="item of prices" :key="item.path">
						<view class="image">
							<u--image radius="15rpx" :showLoading="true" :src="item.path" width="90px"
								height="90px"></u--image>
						</view>
						<view class="title">
							<view>{{item.text}}</view>
							<view class="text">
								<span>¥ {{item.price}}</span>
								<view @click="Jump(item)">
									<uni-icons custom-prefix="custom-icon" type="cart" size="28" color="red"
										style="float: right;"></uni-icons>
								</view>
							</view>
						</view>
					</view>
				</view>
				<u-divider style="opacity: 1;" text="宠物也是有底线滴"></u-divider>
			</view>
			<view class="error" v-if="!prices.length">
				<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
				</image>
				<text>暂无内容</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GoodsList',
		data() {
			return {
				value: '',
				current: 0,
				item: '综合',
				list: [{
					name: '综合',
				}, {
					name: '新品',
				}, {
					name: '销量',
				}, {
					name: '价格',
				}],
				//综合内容数据
				comper: [{
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
				//新品内容数据
				newGoods: [{
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
				//销量内容数据
				sales: [],
				//价格内容数据
				prices: [{
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
			}
		},
		methods: {
			click(item) {
				this.item = item.name;
				this.show();
			},
			show() {
				this.$refs.uToast.show({
					type: 'loading',
					title: '正在加载',
					message: "正在加载",
					duration:'600'
				})
			},
			Jump(item) {
				console.log(item);
				uni.navigateTo({
					url: `../commod/Commod?item=` + encodeURIComponent(JSON.stringify(item)),
				});
			},
		},
		onLoad(options) {
			this.$nextTick(() => {
				this.value = this.$store.state.searchValue;
			});
		},
		onReady() {
			this.show()
		},
	}
</script>

<style lang="scss" scoped>
	.goodslist {
		padding: 15rpx;

		.main {
			.good {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 26rpx;
				color: #646365;
				height: 220rpx;
				border: 1px solid #d7d4d9;
				padding: 15rpx;
				border-radius: 15rpx;
				margin-bottom: 20rpx;

				.title {
					flex: 1;
					margin-left: 0rpx;
					padding-left: 15rpx;
				}

				.text {
					display: flex;
					justify-content: flex-end;
					padding-top: 15rpx;

					span {
						flex: 1;
						color: red;
						font-size: 40rpx;
						margin-right: 15rpx;
					}
				}
			}

			.error {
				display: flex;
				align-items: center;
				flex-direction: column;
				color: #5e5d5f;
			}
		}
	}
</style>