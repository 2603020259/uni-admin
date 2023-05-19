<template>
	<view class="order">
		<view v-if="orderData.length">
		<view class="commods">
			<view class="commod" @touchmove="scrolls(item)" @click="over(item)" v-for="item of orderData"
				:key="item.path">
				<view style="margin-left: 20rpx;" v-if="!item.isShow">
					<u-checkbox-group>
						<u-checkbox :checked="item.isEnd" shape="circle" activeColor="#1dd63c" size="24"
							@change="changeData(item)"></u-checkbox>
					</u-checkbox-group>
				</view>
				<view class="number">
					<view class="image">
						<u--image radius="10" :showLoading="true" :src="item.path" width="100px"
							height="100px"></u--image>
						<view class="text">{{item.text}}</view>
					</view>
					<view class="aa">
						<span>¥ {{item.price}}</span>
						<u-number-box :disabled="true" v-model="item.num" @change="valChange"></u-number-box>
					</view>
				</view>
				<view @click="Delete(item)">
					<view class="delete" v-if="item.isShow">删除</view>
				</view>
			</view>
		</view>
		<view class="tabsNav">
			<span> ¥ {{toPrice}}</span>
			<view style="width: 300rpx;">
				<u-button shape="circle" color="#ff0000" text="去结算" @click="orders"></u-button>
			</view>
		</view>
		</view>
		<view class="err" v-if="!orderData.length">
			<image src="https://gd-hbimg.huaban.com/e55825ebc8c90fb435408de40a82e2e28056fcc412d7c-LADEPm"></image>
			<view style="margin: 0rpx auto;">
			<view class="text">购物车空空如也~</view>
			</view>
			<view style="width: 150rpx; margin: 60rpx auto;">
			<u-button @click="home" shape="circle" type="primary" size="28" text="去逛逛" color="#ff0000"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Order',
		data() {
			return {
				orderData: [],
				toPrice: 0,
			}
		},
		methods: {
			changeData(item) {
				console.log(item);
				item.isEnd = !item.isEnd;
				this.initPrice();
			},
			over(item) {
				item.isShow = false;
			},
			Delete(item) {
				console.log(item);
				this.orderData = this.orderData.filter((p) => {
					return p.path !== item.path;
				});
				this.initPrice();
			},
			scrolls(item) {
				//this.isShow = false;
				console.log(item);
				item.isShow = true;
			},
			valChange(e) {
				console.log(e);
				this.initPrice();
			},
			orders() {
				uni.navigateTo({
					url: `/pages/confirm/Confirm?toPrice=${this.toPrice}`,
					
				});
			},
			home(){
				uni.switchTab({
					url:'/pages/home/Home'
				})
			},
			initPrice() {
				let sum = 0;
				this.orderData.forEach((p) => {
					if (p.isEnd === true) {
						sum += p.price * p.num;
					}
					//sum+=sum;
				});
				this.toPrice = sum;
			},
		},
		onShow() {
			console.log('页面挂载成功了');
			console.log(666, this.$store.state.orderData);
			this.orderData = this.$store.state.orderData;
			this.initPrice();
		},
	}
</script>

<style lang="scss" scoped>
	.order {
		.commods {
			height: 1140rpx;
			overflow-y: auto;

			.commod {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border: 1px solid #ccc;
				border-radius: 15rpx;
				margin: 15rpx;
				height: 310rpx;

				.number {

					flex: 1;
					float: right;
					font-size: 24rpx;

					.image {
						padding: 15rpx;
						display: flex;
						justify-content: flex-start;
						align-items: center;

						.text {
							flex: 1;
							margin-right: 0rpx;
							padding-left: 15rpx;
						}
					}

					.aa {
						padding: 15rpx;
						flex: 1;
						display: flex;
						justify-content: flex-end;

						span {
							color: red;
							flex: 1;
							font-size: 35rpx;
							margin-left: 0rpx;
						}
					}
				}

				.delete {
					width: 100rpx;
					background-color: #ff0000;
					height: 310rpx;
					line-height: 310rpx;
					text-align: center;
					color: #fff;
					border-radius: 0rpx 15rpx 15rpx 0rpx;
				}
			}
		}

		.tabsNav {
			position: fixed;
			width: 96%;
			bottom: 0rpx;
			padding: 20rpx;
			display: flex;
			justify-content: flex-end;
			background-color: #fff;

			span {
				color: red;
				flex: 1;
				margin-left: 0rpx;
				font-size: 35rpx;
				margin-top: 20rpx;
			}
		}
		.err{
			image{
				width: 100%;
				margin-top: 100rpx;
			}
			.text{
				font-size: 32rpx;
				color: #777678;
				text-align: center;
			}
		}
	}
</style>