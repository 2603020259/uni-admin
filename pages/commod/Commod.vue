<template>
	<view class="commod">
		<!-- tabs却换栏-->
		<view class="tabs">
			<u-tabs :current="current" :list="list" @click="click" lineColor="#b842ff" :activeStyle="{color:'#b842ff'}"
				lineWidth="50" itemStyle="padding-left: 32px; padding-right: 32px; height: 44px;"></u-tabs>
		</view>
		<!--商品详情主要内容-->
		<view class="main">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll">
				<!--商品介绍-->
				<view class="lunbo">
					<u-swiper imgMode="scaleToFill" height="330" radius="0" :list="listImg" indicator
						indicatorMode="line" circular></u-swiper>
					<view class="number">
						<span>¥ {{item.price}}</span><br>
						<view class="text">{{item.text}}</view>
					</view>
					<text style="font-size: 26rpx; padding: 15rpx;">选择商品规格</text>
					<view class="numbers">
						<text>购买数量</text>
						<u-number-box v-model="value" @change="valChange"></u-number-box>
					</view>
				</view>
				<!--商品详情-->
				<view class="images">
					<view class="title">
						<span></span>
						<text>商品详情</text>
					</view>
					<view class="img">
						<image src="https://gd-hbimg.huaban.com/94d84e7b5521c894dfe6089aa5323497f48ac00c1f56f-5kvLTy_fw1200"></image>
						<image src="https://gd-hbimg.huaban.com/2986c80604ab8614c6b04999730b882e82abd32e1eda31-HNarN4_fw1200"></image>
						<image src="https://gd-hbimg.huaban.com/e6758ddca62bd0ecf5f0b8aed907b6ec8054550e2a2e86-gbMqNV_fw1200"></image>
						<image src="https://gd-hbimg.huaban.com/6e0cec422ae3a326c5adfc6260200714ab7cdd185e6fc-r4UH6o_fw1200"></image>
						<image src="https://gd-hbimg.huaban.com/467a7f56a0a649756046b3d58f19a6caa075ad3636f5d-IQtLho"></image>
						<image src="https://gd-hbimg.huaban.com/e1cb23a4957aac1403e5c564a73071e321318b61524f2-eIswND_fw1200"></image>
						<image src="https://gd-hbimg.huaban.com/45960775be192296d2372c4dedd7ece249bb2cc7cab745-0joMHn"></image>
						<image src="https://gd-hbimg.huaban.com/c50a52feb2e35f333413933487dc838019b8db2545e7f-OQKppd_fw1200"></image>
						<image src="https://gd-hbimg.huaban.com/3db7ecf7b5e4366fcd4fe2cb121e0d5c1901b6858b9bf-e5C28C_fw1200"></image>
					</view>
				</view>
				<!--商品评价-->
				<view class="Evalue">
					<view class="title">
						<span></span>
						<text>商品评价</text>
					</view>
					<view style="border: 1px solid #ccc; border-radius: 8rpx; margin-bottom: 15rpx;"
						v-for="(index,item) of 7" :key="index">
						<view class="image">
							<u--image src="http://n.sinaimg.cn/front/480/w640h640/20181009/EEym-hkvrhpt3161696.jpg"
								style="padding: 15rpx;" shape="circle" width="55px" height="55px"
								@click="click"></u--image>
							<view class="title">
								<text>2023-05-03 14:24:37</text>
								<u-rate size="16" :count="5" v-model="values"></u-rate>
							</view>
						</view>
						<view style="font-size: 24rpx; padding: 15rpx;">和活泼，玩累了就睡，睡醒了就玩根小孩子一样很招人稀罕。</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!--底部导航 -->
		<view class="banny">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
		<!--底部弹出层-->
		<view class="bottomNav">
			<u-popup :show="show" mode="bottom" @close="close" @open="open">
				<view class="commods">
					<view class="commod">
						<u--image :showLoading="true" :src="item.path" width="100px" height="100px"
							radius="10"></u--image>
						<view class="text">{{item.text}}<br>
							<span>¥ {{item.price}}</span>
						</view>
					</view>
					<view class="number">
						<text>星乐猫咖尊贵套餐</text>
						<view style="width: 190rpx; margin-top: 40rpx; margin-bottom: 40rpx;">
							<u-tag text="店铺推荐" size="large" type="warning" plain></u-tag>
						</view>
						<view class="num">
							<text>购买数量</text>
							<u-number-box :disabledInput="true" v-model="value" @change="valChange"
								class="aa"></u-number-box>
						</view>
					</view>
				</view>
				<view style="margin-top: 40rpx;">
					<u-button color="#ff0000" size="large" text="加入购物车" @click="submit(item)"></u-button>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				current: 0,
				scrollTop: 0,
				item: {},
				value: 1,
				values: 5,
				show: false,
				info: 0,
				orderData: [],
				old: {
					scrollTop: 0
				},
				list: [{
						name: '商品简介',
					},
					{
						name: '商品详情',
					},
					{
						name: '商品评价',
					}
				],
				listImg: [
					'https://gd-hbimg.huaban.com/7127b4a013ab1475b462e989e70ff69a146caadb43f79-oKPA5a',
					'https://gd-hbimg.huaban.com/5d31d35917bb412d997869b7eecdfe8d355a7fd9a9eaf-6qqVnF_fw1200',
					'https://gd-hbimg.huaban.com/98907bacc0b0df84a4774495cf52bd150d1da9697d104-RdRIHE_fw1200',
				],
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'heart',
					text: '收藏',
				}, {
					icon: 'cart',
					text: '购物车',
					info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			click(item) {
				if (item.index === 0) {
					this.scrollTop = 0;
				} else if (item.index === 1) {
					this.scrollTop = 510;
				} else if (item.index === 2) {
					this.scrollTop = 4650;
				}
			},
			submit() {
				this.options[2].info = this.info;
				this.show = false;
				this.$set(this.item, 'num', this.value);
				this.$set(this.item, 'isShow', false);
				this.$set(this.item, 'isEnd', true);
				this.$store.commit('ORDER', this.item);
				this.initData();
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			buttonClick(e) {
				//这是添加购物车
				if (e.index === 0) {
					console.log('添加购物车');
					//this.options[2].info = this.info;
					this.show = true;
				}
				//这是立即购买
				if (e.index === 1) {
					this.show = true;
					console.log('立即购买');
					uni.switchTab({
						url: "/pages/order/Order",
					});
					this.options[2].info = this.info;
					//this.show = false;
					this.$set(this.item, 'num', this.value);
					this.$set(this.item, 'isShow', false);
					this.$set(this.item, 'isEnd', true);
					this.$store.commit('ORDER', this.item);
				}
			},
			onClick(e) {
				//console.log(e);
				//这是收藏按钮
				if (e.index === 1) {
					if (e.content.icon === 'heart') {
						e.content.icon = 'heart-filled';
					} else {
						e.content.icon = 'heart';
					}
				}
				//这是购物车按钮
				if (e.index === 2) {
					uni.switchTab({
						url: "/pages/order/Order",
					})
				}
			},
			scroll: function(e) {
				//console.log(1111,e.detail.scrollTop);
				if (e.detail.scrollTop <= 480) {
					this.current = 0;
				} else if (e.detail.scrollTop >= 480) {
					this.current = 1;
				}
				if (e.detail.scrollTop >= 4650) {
					this.current = 2;
				}
				this.old.scrollTop = e.detail.scrollTop
			},
			valChange(e) {
				console.log('当前值为: ' + e.value)
				this.value = e.value;
			},
			initData() {
				this.orderData = this.$store.state.orderData;
				this.options[2].info = this.orderData.length;
			}
		},
		onLoad(options) {
			this.item = JSON.parse(decodeURIComponent(options.item));
			this.listImg.unshift(this.item.path);
		},
		onShow() {
           this.initData();
		}
	}
</script>

<style lang="scss" scoped>
	.commod {
		position: relative;

		.tabs {
			position: fixed;
			top: 0rpx;
			z-index: 999;
			background-color: #fff;
			width: 100%;
		}

		.main {
			margin-top: 70rpx;

			.scroll-Y {
				height: 1300rpx;
			}

			.scroll-view_H {
				white-space: nowrap;
				width: 100%;
			}

			.scroll-view-item_H {
				display: inline-block;
				width: 100%;
				height: 300rpx;
				line-height: 300rpx;
				text-align: center;
				font-size: 36rpx;
			}

			.lunbo {
				height: 1020rpx;
				width: 100%;
				border-bottom: 1px solid #ccc;

				.number {
					padding: 15rpx;

					span {
						font-size: 50rpx;
						font-weight: bold;
						color: red;
					}

					.text {
						font-size: 20rpx;
						margin-top: 20rpx;
						margin-bottom: 20rpx;
					}
				}

				.numbers {
					padding: 15rpx;
					display: flex;
					justify-content: flex-start;

					text {
						flex: 1;
						font-size: 25rpx;
						margin-top: 10rpx;
					}
				}
			}

			.images {
				height: 8249rpx;
				border-bottom: 1px solid #ccc;
				padding: 15rpx;

				.title {
					flex: 1;
					display: flex;
					justify-content: flex-start;
					padding-bottom: 15rpx;

					span {
						display: inline-block;
						width: 8rpx;
						height: 60rpx;
						background-color: #b842ff;
					}

					text {
						padding-left: 10rpx;
						font-size: 35rpx;
						font-weight: bold;
						padding-top: 6rpx;
					}
				}

				.img {
					image {
						width: 100%;
						height: 900rpx;
					}
				}
			}

			.Evalue {
				height: 1700rpx;
				padding: 15rpx;
				border-bottom: 1px solid #ccc;

				.title {
					display: flex;
					justify-content: flex-start;
					padding-bottom: 15rpx;

					span {
						display: inline-block;
						width: 8rpx;
						height: 60rpx;
						background-color: #b842ff;
					}

					text {
						padding-left: 10rpx;
						font-size: 35rpx;
						font-weight: bold;
						padding-top: 6rpx;
					}
				}

				.image {
					display: flex;
					justify-content: flex-start;

					.title {
						padding-left: 30rpx;
						display: flex;
						flex-direction: column;
						margin-top: 25rpx;

						text {
							padding-bottom: 15rpx;
							font-size: 20rpx;
							margin-right: 0rpx;
						}
					}
				}
			}
		}

		.banny {
			position: fixed;
			bottom: 0rpx;
			width: 100%;
			padding-bottom: 25rpx;
			background-color: #fff;
			z-index: 999;
		}

		.bottomNav {
			.commods {
				.commod {
					display: flex;
					align-items: center;
					height: 240rpx;
					background-color: #f7f4f9;
					margin-top: 15rpx;
					margin-bottom: 45rpx;

					.text {
						flex: 1;
						font-size: 24rpx;
						margin-left: 0rpx;
						margin-left: 15rpx;
						padding-bottom: 15rpx;
					}

					span {
						color: red;
						font-size: 36rpx;
					}
				}

				.number {
					font-size: 28rpx;
					color: #222122;
					margin-left: 40rpx;

					.num {
						display: flex;
						justify-content: flex-end;

						text {
							padding-left: 0rpx;
							flex: 1;
							padding-top: 8rpx;
						}
					}
				}
			}
		}
	}
</style>