<template>
	<view class="myasset">
		<u-toast ref="uToast"></u-toast>
		<view class="ass">
			<view class="number">
				<view>可用余额(元)</view>
				<view>0.00</view>
			</view>
			<view class="number">
				<view>冻结金额(元)</view>
				<view>0.00</view>
			</view>
			<view class="number">
				<view>累计消费(元)</view>
				<view>0.00</view>
			</view>
		</view>
		<view class="btn">
			<view>
				<u-button type="info" color="#df3354" :hairline="true" size="small" text="充值" @click="recharge"></u-button>
			</view>
		</view>
		<view class="tab">
			<u-tabs itemStyle="padding-left: 32px; padding-right: 32px; height: 44px;" lineColor="#df3354" lineWidth="40" :list="list" @click="click"></u-tabs>
		</view>
		<view class="mains">
			<view class="main" v-if="item==='资金明细'">
				<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2"></image>
				<text>暂无资金明细</text>
			</view>
			<view class="main" v-if="item==='提现记录'">
				<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2"></image>
				<text>暂无提现记录</text>
			</view>
			<view class="main" v-if="item==='押金记录'">
				<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2"></image>
				<text>暂无押金记录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MyAsset',
		data() {
			return {
				list: [{
					name: '资金明细'
				}, {
					name: '提现记录'
				}, {
					name: '押金记录'
				}],
				item:'资金明细',
			}
		},
		methods: {
			click(item) {
				console.log('item', item);
				this.item=item.name;
			},
			recharge(){
				this.$refs.uToast.show({
				    message: "服务器请求失败",
				});
			}
		} 
	}
</script>

<style lang="scss" scoped>
	.myasset {
		.ass {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 200rpx;
			color: #fff;
			background-color: #ff3753;

			.number {
				padding: 0rpx 20rpx 0rpx 20rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
			}
		}

		.btn {
			height: 100rpx;
			background-color: #ff3753;
			color: #fff;
			display: flex;
			justify-content: flex-end;
			padding-right: 40rpx;

		}
		.mains{
			.main{
				display: flex;
				align-items: center;
				flex-direction: column;
				color: #5e5d5f;
			}
		}
	}
</style>