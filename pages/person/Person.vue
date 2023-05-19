<template>
	<view class="persons">
		<u-toast ref="uToast"></u-toast>
		<view class="person">
			<view class="text">绑定手机号</view>
			<view class="number">13240722710</view>
		</view>
		<view class="person" @click="Address">
			<view class="text">收货地址</view>
			<view><u-icon name="arrow-right"></u-icon></view>
		</view>
		<view class="person" @click="Errors">
			<view class="text">交易密码</view>
			<view class="password">
				<view class="title">设置交易密码</view>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="person" @click="Errors">
			<view class="text">我的收藏</view>
			<view><u-icon name="arrow-right"></u-icon></view>
		</view>
		<view class="person" @click="Errors">
			<view class="text">修改资料</view>
			<view><u-icon name="arrow-right"></u-icon></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Person',
		data() {
			return {

			}
		},
		methods: {
			Address() {
				uni.navigateTo({
					url: "/pages/address/changeAdress",
				});
			},
			Errors() {
				this.$refs.uToast.show({
					message: "服务器请求失败",
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.persons {
		.person {
			display: flex;
			justify-content: flex-start;
			height: 70rpx;
			align-items: center;
			padding: 15rpx;
			border-bottom: 1px solid #e0dde2;
			font-size: 28rpx;
			color: #5e5d5f;

			.text {
				flex: 1;
				margin-left: 0rpx;
			}

			.password {
				display: flex;
				justify-content: flex-start;
				align-items: center;

				.title {
					flex: 1;
					margin-right: 15rpx;
				}
			}
		}
	}
</style>