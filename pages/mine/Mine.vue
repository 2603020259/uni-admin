<template>
	<view class="mine">
		<u-toast ref="uToast"></u-toast>
		<view class="image" v-show="isShow">
			<image :src="`https://gd-hbimg.huaban.com/7730112216b0fb5596a28215eb35c82aa092715e2a281-czrk4o`"></image>
		</view>
		<view class="main">
			<view class="me">
				<view v-show="isShow">
					<u--image :showLoading="true" :src="`https://inews.gtimg.com/newsapp_bt/0/14084378007/1000`"
						shape="circle" width="80px" height="80px"></u--image>
				</view>
				<view class="user" :class="{active:!isShow}">
					<view>用户ID: 3456853</view>
					<view class="name">用户名称: 开发喵</view>
				</view>
				<view class="right" :class="{active:!isShow}">
					<u-icon size="35" :name="iconName" color="#5e5d5f" @click="isEnd"></u-icon>
				</view>
			</view>
			<view class="prices">
				<view class="price" @click="Asset">
					<view class="num">0.00</view>
					<view class="text">余额</view>
				</view>
				<view class="price" @click="Asset">
					<view class="num">0.00</view>
					<view class="text">冻结</view>
				</view>
				<view class="price">
					<view class="num">0</view>
					<view class="text">等级成长</view>
				</view>
			</view>
			<view class="orderState">
				<view class="state" v-for="item of orderState" :key="item.icon" @click="orderList(item.text)">
					<view>
						<u-icon size="29" :name="item.icon"></u-icon>
					</view>
					<view>{{item.text}}</view>
				</view>
			</view>
			<view style="padding: 27rpx; border-bottom: 1px solid #e0dde2;">常用功能</view>
			<view class="commonlys">
				<view class="commonly" v-for="item of commonly" :key="item.icon" @click="MyAsset(item.text)">
					<view>
						<u-icon size="29" :name="item.icon"></u-icon>
					</view>
					<view>{{item.text}}</view>
				</view>
			</view>
			<view style="padding: 27rpx; border-bottom: 1px solid #e0dde2;">其他功能</view>
			<view class="orthers">
				<view class="orther" @click="Help">
					<view class="text">帮助中心</view>
					<view><u-icon name="arrow-right"></u-icon></view>
				</view>
				<view class="orther" @click="Person">
					<view class="text">个人信息</view>
					<view><u-icon name="arrow-right"></u-icon></view>
				</view>
				<view class="orther" @click="System">
					<view class="text">系统设置</view>
					<view><u-icon name="arrow-right"></u-icon></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Mine',
		data() {
			return {
				isShow: false,
				iconName: 'bell',
				active: {
					paddingTop: '20rpx'
				},
				orderState: [{
					icon: 'order',
					text: '待付款'
				}, {
					icon: 'car',
					text: '待发货'
				}, {
					icon: 'bag',
					text: '待收货'
				}, {
					icon: 'thumb-up',
					text: '待评价'
				}, {
					icon: 'chat',
					text: '售后'
				}],
				commonly: [{
					icon: 'rmb-circle',
					text: '优惠买单'
				}, {
					icon: 'red-packet',
					text: '资金明细'
				}, {
					icon: 'coupon',
					text: '优惠券'
				}, {
					icon: 'calendar',
					text: '签到赚积分'
				}],
			}
		},
		methods: {
			isEnd() {
				this.isShow = !this.isShow;
				if (this.isShow === true) {
					this.iconName = 'bell-fill';
				}
				if (this.isShow === false) {
					this.iconName = 'bell';
				}
			},
			Asset() {
				uni.navigateTo({
					url: "/pages/myAsset/MyAsset",
				});
			},
			orderList(item) {
				uni.navigateTo({
					url: `/pages/orderList/OrderList?item=${item}`,
				});
			},
			MyAsset(item){
				//console.log(item);
				if(item==='资金明细'){
					this.Asset();
				}else{
					this.$refs.uToast.show({
					    message: "服务器请求失败",
					});
				}
			},
			Help(){
				uni.navigateTo({
					url:"/pages/help/Help",
				})
			},
			Person(){
				uni.navigateTo({
					url:"/pages/person/Person",
				});
			},
			System(){
				uni.navigateTo({
					url:"/pages/system/System",
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mine {
		.image {
			height: 430rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.main {
			width: 100%;
			background-color: #fff;
			border-radius: 50rpx 50rpx 0rpx 0rpx;
			margin: -50rpx auto;
			z-index: 999;
			position: fixed;

			.me {
				display: flex;
				justify-content: flex-start;
				height: 190rpx;
				align-items: center;
				padding: 15rpx;
				border-bottom: 1px solid #e0dde2;

				.user {
					flex: 1;
					margin-left: 50rpx;
					font-size: 28rpx;
					color: #5e5d5f;
				}
			}
		}

		.prices {
			height: 160rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #e0dde2;

			.price {
				padding: 0rpx 20rpx 0rpx 20rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				color: #5e5d5f;
			}
		}

		.orderState {
			height: 160rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #e0dde2;
			font-size: 28rpx;

			.state {
				padding: 0rpx 20rpx 0rpx 20rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				color: #5e5d5f;
			}
		}

		.commonlys {
			height: 160rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #e0dde2;
			font-size: 28rpx;

			.commonly {
				padding: 0rpx 20rpx 0rpx 20rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				color: #5e5d5f;
			}
		}

		.orthers {
			.orther {
				padding: 20rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				height: 50rpx;
				border-bottom: 1px solid #e0dde2;
				color: #5e5d5f;
				font-size: 28rpx;

				.text {
					flex: 1;
					margin-right: 0rpx;
				}
			}
		}

		.active {
			padding-top: 55rpx;
		}
	}
</style>