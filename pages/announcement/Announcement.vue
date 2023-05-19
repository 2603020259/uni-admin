<template>
	<view class="announ">
		<view class="text">【必读】 【必读】推荐有奖，推荐好友成功领取奖励臻品猫粮一袋</view>
		<view class="main">
			<view class="content">
			<text style="font-size: 45rpx; font-weight: bold; margin-top: 60rpx;">活动内容:</text>
			<view class="title">本项目【星乐猫咖】是自研项目,此项目为前端部分(前台用户端),【星乐猫咖后台管理系统】还有前端部分(中后台管理员端)。因为本人对宠物猫比较喜欢，所以得此灵感设计了此产品。</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'Announcement',
	}
</script>

<style lang="scss" scoped>
	.announ{
		.text{
			font-size: 26rpx;
			padding: 15rpx;
			border-bottom: 1px solid #f1eef4;
		}
		.main{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			.content{
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				.title{
					padding: 15rpx;
					color: #68676d;
					font-size: 26rpx;
				}
			}
		}
	}
</style>