<template>
	<view class="systems">
		<u-toast ref="uToast"></u-toast>
		<view class="system" @click="About">
			<view class="text">关于我们</view>
			<view><u-icon name="arrow-right"></u-icon></view>
		</view>
		<view class="system" @click="Errors">
			<view class="text">意见反馈</view>
			<view><u-icon name="arrow-right"></u-icon></view>
		</view>
		<view class="system" @click="Delete">
			<view class="text">清除缓存</view>
			<view><u-icon name="arrow-right"></u-icon></view>
		</view>
		<view class="system">
			<view class="text">当前版本</view>
			<view>X L 1 . 1 . 0 . 0 . 0</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'System',
		data(){
			return{
				
			}
		},
		methods:{
			About(){
				uni.navigateTo({
					url:"/pages/system/About",
				});
			},
			Errors(){
				this.$refs.uToast.show({
					message: "服务器请求失败",
				});
			},
			Delete(){
				this.$refs.uToast.show({
					message: "已清除",
					icon:'checkmark'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.systems {
		.system {
			display: flex;
			justify-content: flex-start;
			height: 60rpx;
			align-items: center;
			padding: 15rpx;
			border-bottom: 1px solid #e0dde2;
			font-size: 28rpx;
			color: #5e5d5f;

			.text {
				flex: 1;
				margin-left: 0rpx;
			}
		}
	}
</style>