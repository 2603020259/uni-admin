<template>
	<view>
		<view class="u-demo-block">
			<u-swiper :list="list5" @change="e => current = e.current" :autoplay="false" :height="160" :radius="0">
				<view slot="indicator" class="indicator">
					<view class="indicator__dot" v-for="(item, index) in list5" :key="index"
						:class="[index === current && 'indicator__dot--active']">
					</view>
				</view>
			</u-swiper>
			<u-gap bgColor="transparent" height="15"></u-gap>
		</view>
		<view class="nav">
			<view class="upnav">
				<view v-for="item of upNavArr" :key="item" @click="classData(item)">
					<image :src="`../../static/${item.path}.png`"></image>
					<text>{{item.title}}</text>
				</view>
			</view>
			<view class="downnav">
				<view v-for="item of downNavArr" :key="item" @click="classData(item)">
					<image :src="`../../static/${item.path}.png`"></image>
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		<view>
			<u-notice-bar bgColor="#eee" color="#9000d6" :text="text1" mode="link" speed="50"
				url="/pages/announcement/Announcement"></u-notice-bar>
		</view>
		<view>
			<u-divider text="🔥  爆品推荐" textSize="16"></u-divider>
		</view>
		<view class="main">
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="6">
					<view class="demo-layout bg-purple-light">
						<view class="left" v-for="item of leftArr" :key="item.path" @click="Jump(item)">
							<u-image :border-radius="10" width="100%" height="380rpx" :src="item.path"></u-image>
							<view class="text">{{item.text}}</view>
							<span> ¥{{item.price}}</span>
						</view>
					</view>
				</u-col>
				<u-col span="6">
					<view class="demo-layout bg-purple">
						<view class="right" v-for="item of rightArr" :key="item.path"  @click="Jump(item)">
							<u-image :border-radius="10" width="100%" height="380rpx" :src="item.path"></u-image>
							<view class="text">{{item.text}}</view>
							<span>¥{{item.price}}</span>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view>
			<u-divider text="宠物也是有底线滴"></u-divider>
		</view>
	</view>
</template>
<script>
	import route from '../../uni_modules/uview-ui/libs/util/route';
	export default {
		data() {
			return {
				list5: [
					'https://gd-hbimg.huaban.com/ba3b841bd27c1756078ec45b48d49d7f4a132f19f9631-zUEVL2',
				],
				text1: '【必读】 【必读】推荐有奖，推荐好友成功领取奖励臻品猫粮一袋',
				upNavArr: [{
						path: '宠物',
						title: '宠物精选',
						num: 1,
					},
					{
						path: '宠物医疗',
						title: '宠物药品',
						num: 2,
					},
					{
						path: '宠物寄养',
						title: '宠物之家',
						num: 3,
					},
					{
						path: '宠物睡窝',
						title: '户外物品',
						num: 4,
					},
					{
						path: '宠物玩具的副本',
						title: '宠物玩具',
						num: 5,
					},
				],
				downNavArr: [{
						path: '宠物洗澡',
						title: '洗浴工具',
						num: 6,
					},
					{
						path: '宠物外出',
						title: '宠物传送',
						num: 7,
					},
					{
						path: '宠物乐园',
						title: '宠物乐园',
						num: 8,
					},
					{
						path: '宠物疫苗',
						title: '宠物点滴',
						num: 9,
					},
					{
						path: '宠物玩具的副本2',
						title: '宠物训练',
						num: 10,
					},
				],
				leftArr: [{
						path: 'https://gd-hbimg.huaban.com/830654c528a73cabb3f7701f48b36d34ea195c6d1ff91-EMKF16_fw1200',
						text: '布偶猫幼猫纯种猫咪幼崽海双蓝双仙女猫活体繁育级赛级血统宠物',
						price: 14599,
					},
					{
						path: 'https://gd-hbimg.huaban.com/f5bd6a6668ae2dc9aa5359c812b7d0145511de1e2cb61-SHHS0M_fw1200',
						text: '加菲猫一般指异国短毛猫，由美国短毛猫和波斯猫进行交配繁育而成，除拥有浓密皮毛外，还保留了波斯猫独特的可爱表情与圆滚滚的体型',
						price: 13299,
					},
					{
						path: 'https://gd-hbimg.huaban.com/c27f48ae4461e998cbe1aa0206b01fcbd7bde26b5ad81-4tN8hv_fw1200',
						text: '折耳猫的外观可爱迷人，因此吸引了很多人的兴趣，但有趣的是，当时它们在国外要比在家乡--英国的苏格兰更常见，',
						price: 6299,
					},
					{
						path: 'https://gd-hbimg.huaban.com/a160fef52ed2aa80d157b32dcdfc02c46cde759332d99-XJJITF_fw1200',
						text: '短毛猫是家养宠物猫的常见品种，短毛猫的品种非常的广泛多见，大多数的短毛猫性情都非常的温和，非常的聪明顾家',
						price: 2999,
					},
					{
						path: 'https://gd-hbimg.huaban.com/c8b4d678eb694ad483d85ebfa2ecf648b487e29937df3e-GeH7nt_fw1200',
						text: '波斯猫是最常见的长毛猫，以阿富汗的土种长毛猫和土耳其的安哥拉长毛猫为基础在英国经过100多年的选种繁殖于1860年诞生的一个品种',
						price: 39999,
					},
					{
						path: 'https://gd-hbimg.huaban.com/f0657685d32cf98246a6a395e9a28b80cdfe2c8743ea-czjQsr_fw1200',
						text: '暹罗猫是世界著名的短毛猫，也是短毛猫的代表品种，种族历史暹罗猫原产于泰国，在200多年前，这种珍贵的猫仅在泰国的皇宫和大寺院中饲养，是足不出户的贵族',
						price: 8999,
					}
				],
				rightArr: [{
						path: 'https://gd-hbimg.huaban.com/36fd1db64d41e1dc4a1bd6a335594a85dd614f0c5192c-JJ70xR_fw1200',
						text: '虎斑猫原产美国，黄棕色的底色，夹有纯黑色的斑纹图案，且有一圈较浅的铜色呈环状包围。头部圆润，两耳间距较近，颈略短，肌肉发达',
						price: 22599,
					},
					{
						path: 'https://gd-hbimg.huaban.com/bf4da58319eb8402ca165408ea26013082b43d1fa64d2-FecIcL_fw1200',
						text: '金吉拉猫是最早纯人工育种，经过多年精心繁育而成的一个特色猫种，原产国在英国，特征是毛尖颜色不如银色渐层猫的清楚，属颜色较浅的猫',
						price: 66666,
					},
					{
						path: 'https://gd-hbimg.huaban.com/229afa7eb08c0f2ab1df693f047416f89f57e52d2c08-m2Xwri_fw1200',
						text: '巴厘猫是哈瓦那猫种群里的长毛型变种，是从在美国出生的暹逻猫幼崽中自然产生的毛发较长的个体演变过来的',
						price: 29999,
					},
					{
						path: 'https://gd-hbimg.huaban.com/b791334f90c4e15db60cfd5cdf3b7b789957c15b57e0-Xej2MY_fw1200',
						text: '埃及猫为中型短毛猫品种，胎生，体重2.5～7千克，皮肤和毛色上都有像豹的斑纹，埃及猫形体适中，肌肉发达',
						price: 99999,
					},
					{
						path: 'https://gd-hbimg.huaban.com/3d793173054d98c4f3a25beed9d83e6a1c8c5d05423c0-wMpo20_fw1200',
						text: '缅因猫因原产于美国缅因州而得名，是北美自然产生的第一个长毛品种，约于18世纪中叶形成较稳定品种',
						price: 16999,
					},
					{
						path: 'https://gd-hbimg.huaban.com/c710bb20512fd97f1f3fb72f3c29d50839dc114828d46-jaDSQM_fw1200',
						text: '欧西猫，体型类似于阿比西尼亚猫，非常活泼，好运，好奇而且贪玩。尽管外形看似野猫，但是非常友好、温柔、感情丰富，不能忍受孤独',
						price: 22599,
					},
				]
			}
		},
		methods: {
			Jump(item) {
				console.log(item);
				uni.navigateTo({
					url: `../commod/Commod?item=` + encodeURIComponent(JSON.stringify(item)),
				});
			},
			classData(item){
				uni.switchTab({
					url:'/pages/class/Class?item='+encodeURIComponent(JSON.stringify(item)),
				});
				console.log(1111,item);
				uni.$emit('classDatas',{
					item:item,
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.indicator {
		@include flex(row);
		justify-content: center;

		&__dot {
			height: 6px;
			width: 6px;
			border-radius: 100px;
			background-color: #fff;
			margin: 0 5px;
			transition: background-color 0.3s;
		}
	}

	.indicator-num {
		padding: 2px 0;
		background-color: rgba(0, 0, 0, 0.35);
		border-radius: 100px;
		width: 35px;
		@include flex;
		justify-content: center;
	}

	.nav {
		width: 710rpx;
		height: 300rpx;
		border: 1px solid #ccc;
		border-radius: 10rpx;
		margin: 0rpx 20rpx 20rpx 20rpx;

		.upnav {
			display: flex;
			justify-content: space-between;
			margin: 10rpx 10rpx 40rpx 10rpx;

			view {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				height: 120rpx;

				image {
					width: 90rpx;
					height: 90rpx;
				}

				text {
					font-size: 20rpx;
					padding: 10rpx;

					span {
						padding: 10rpx;
					}
				}
			}
		}

		.downnav {
			margin: 10rpx;
			display: flex;
			justify-content: space-between;

			view {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				height: 120rpx;

				image {
					width: 90rpx;
					height: 90rpx;
				}

				text {
					font-size: 20rpx;
				}
			}
		}
	}

	.wrap {
		padding: 12px;
	}

	.demo-layout {
		height: 25px;
	}

	.bg-purple {
		height: 100%;

		.right {
			height: 480rpx;
			border: 1px solid #ccc;
			border-radius: 10rpx;
			margin: 15rpx;

			.img {
				border-radius: 10px;
				overflow: hidden;
			}

			.text {
				font-size: 26rpx;
				color: #282728;
				height: 40rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-break: keep-all;
			}

			span {
				color: red;
				font-size: 40rpx;
				font-weight: bold;
				margin-top: 40rpx;
			}
		}
	}

	.bg-purple-light {
		height: 100%;

		.left {
			height: 480rpx;
			border: 1px solid #ccc;
			border-radius: 10rpx;
			margin: 15rpx;

			.img {
				border-radius: 10px;
				overflow: hidden;
			}

			.text {
				font-size: 26rpx;
				color: #282728;
				height: 40rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-break: keep-all;
			}

			span {
				color: red;
				font-size: 40rpx;
				font-weight: bold;
				margin-top: 40rpx;
			}
		}
	}

	.bg-purple-dark {
		background: #000;
	}

	.main {
		height: 100%;
		margin-bottom: 0px;
	}
</style>