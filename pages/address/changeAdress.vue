<template>
	<view class="changes">
		<u-toast ref="uToast"></u-toast>
		<view class="address">
			<view class="addre" :key="item">
				<view>
					<view class="number">{{address.name}} {{address.number}}</view>
					<view class="ad">{{address.addre}}</view>
				</view>
				<view class="right" @click="Edit">
					<u-icon size="24" name="file-text"></u-icon>
				</view>
			</view>
		</view>
		<view class="btn"><u-button @click="newAddress" color="#1dd63c" icon="plus-circle" type="primary" text="新增收货地址"></u-button></view>
	</view>
</template>

<script>
	export default {
		name: 'ChangeAddress',
		data() {
			return {
              address:{},
			}
		},
		methods: {
			Edit() {
				uni.navigateTo({
					url: "/pages/address/Address",
				});
			},
			newAddress(){
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
		}
	}
</script>

<style lang="scss" scoped>
	.changes {
		.address {
			margin-bottom: 160rpx;

			.addre {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 30rpx 15rpx 30rpx 15rpx;
				border-bottom: 1px solid #d7d4d9;

				.ad {
					color: #646365;
					font-size: 26rpx;
					margin-top: 20rpx;
				}

				.right {
					flex: 1;
					margin-left: 400rpx;
				}
			}
		}

		.btn {
			height: 100rpx;
			z-index: 999;
			background-color: #fff;
			position: fixed;
			bottom: 0rpx;
			padding-bottom: 40rpx;
			width: 100%;
		}
	}
</style>