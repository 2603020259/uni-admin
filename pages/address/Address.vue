<template>
	<view class="address">
		<u-toast ref="uToast"></u-toast>
		<view class="city">
			<span>省份</span>
			<view style="padding-right: 40rpx;">
				<view style="float: left; padding-left: 15rpx; font-size: 26rpx; color: #646365">{{province}}</view>
				<view class="right" @click="Toast">
					<u-icon size="18" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="city">
			<span>城市</span>
			<view style="padding-right: 40rpx;">
				<view style="float: left; padding-left: 15rpx; font-size: 26rpx; color: #646365">{{city}}</view>
				<view class="right" @click="Toast">
					<u-icon size="18" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="city">
			<span>区县</span>
			<view style="padding-right: 40rpx;">
				<view style="float: left; padding-left: 15rpx; font-size: 26rpx; color: #646365">{{district}}</view>
				<view class="right" @click="Toast">
					<u-icon size="18" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="user">
			<span>姓名</span>
			<view style="font-size: 26rpx; color: #646365">{{address.name}}</view>
		</view>
		<view class="user">
			<span>手机号码</span>
			<view style="font-size: 26rpx; color: #646365">{{address.number}}</view>
		</view>
		<view class="user">
			<span>详细地址</span>
			<view style="font-size: 26rpx; color: #646365">{{address.addre}}</view>
		</view>
		<view class="btn">
			<u-button type="primary" color="#1dd63c" text="保存" @click="saveAddress"></u-button>
		</view>
		<view class="btn">
			<u-button type="primary" color="#ff0000" @click="delAddress" text="删除该地址"></u-button>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'Address',
		data() {
			return {
				address: {},
				province: '',
				city: '',
				district: '',
			}
		},
		methods: {
			Toast() {
				this.$refs.uToast.show({
					message: "暂不支持修改",
				});
			},
			saveAddress() {
				this.$refs.uToast.show({
					message: "服务器请求失败",
				});
			},
			delAddress() {
				this.$refs.uToast.show({
					message: "服务器请求失败",
				});
			}
		},
		onLoad() {
			if(this.$store.state.address.lenght===undefined){
				this.address={name:'张三',number:13240722710,add:'江苏省无锡市滨湖区',addre:'山水西路'};
			}else{
				this.address=this.$store.state.address;
			}
			this.province = this.address.add.slice(0, 3);
			this.city = this.address.add.slice(3, 6);
			this.district = this.address.add.slice(6, 10);
		}
	}
</script>

<style lang="scss" scoped>
	.address {
		padding: 20rpx;

		.city {
			height: 90rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			border-bottom: 1px solid #dddadf;

			span {
				flex: 1;
				margin-left: 0rpx;
			}
		}

		.user {
			height: 90rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			border-bottom: 1px solid #dddadf;

			span {
				flex: 1;
				margin-left: 0rpx;
			}
		}

		.btn {
			margin-top: 30rpx;
		}
	}
</style>