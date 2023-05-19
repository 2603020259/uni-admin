<template>
	<view class="confirms">
		<u-toast ref="uToast"></u-toast>
		<view class="confirm" v-for="item of orderData" :key="item.path">
			<view class="image">
				<u--image :showLoading="true" :src="item.path" width="80px" height="80px"></u--image>
			</view>
			<view class="text">
				<view>{{item.text}}</view>
				<view class="num">
					<span>¥ {{item.price}}</span>
					<view class="title">x {{item.num}}</view>
				</view>
			</view>
		</view>
		<view class="from">
			<view class="delive">
				<view>配送方式</view>
				<view class="ridio">
					<u-radio-group activeColor="#1dd63c" size="24" v-model="radiovalue" @change="groupChange">
						<u-radio :customStyle="{marginBottom: '8px', marginRight:'5px'}"
							v-for="(item, index) in radiolist" :key="index" :label="item.name" :name="item.name">
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			<!--快递-->
			<view v-if="Mode==='快递'">
				<view @click="Addre">
					<view class="addre" @click="Addre" v-if="isEnd">
						<view class="jia">
							<u-icon size="24" name="plus-circle"></u-icon>
							<view class="text">新增收货地址</view>
						</view>
						<view class="right">
							<u-icon size="24" name="arrow-right"></u-icon>
						</view>
					</view>
					<view class="addres">
						<view>
							<view class="number">{{address.name}} {{address.number}}</view>
							<view class="ad">{{address.addre}}</view>
						</view>
						<view class="right">
							<u-icon size="20" name="arrow-right"></u-icon>
						</view>
					</view>
				</view>
			</view>
			<!--到店自取-->
			<view v-if="Mode==='到店自取'">
				<view class="userss">
					<u--form labelPosition="left">
						<u-form-item label="姓名" borderBottom ref="item1">
							<u--input placeholder="请输入联系人" border="none"></u--input>
						</u-form-item>
						<u-form-item label="电话" borderBottom ref="item1">
							<u--input placeholder="请输入联系电话" border="none"></u--input>
						</u-form-item>
					</u--form>
				</view>
			</view>
			<view class="forms">
				<u--form labelPosition="left">
					<u-form-item label="备注" borderBottom ref="item1">
						<u--input placeholder="如需备注请输入" border="none"></u--input>
					</u-form-item>
					<u-form-item label="订阅" borderBottom ref="item1">
						<view style="padding-left: 380rpx;margin-top: 10rpx;">
							<u-radio-group activeColor="#1dd63c" v-model="subScrValue" size="24" @change="groupChange">
								<u-radio :customStyle="{marginBottom: '8px', marginRight:'5px'}"
									v-for="(item, index) in subScr" :key="index" :label="item.name" :name="item.name"
									@change="radioChange">
								</u-radio>
							</u-radio-group>
						</view>
					</u-form-item>
				</u--form>
				<view class="feright">
					<view>运费</view>
					<span>¥ {{freight}}</span>
				</view>
			</view>
		</view>
		<view class="header">
			<span>合计：{{toPrice}}</span>
			<view class="btn">
				<u-button shape="circle" :loading="loading" color="#ff0000" type="primary" @click="submit" text="立即支付"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Confirm',
		data() {
			return {
				orderData: [],
				radiolist: [{
					name: '快递',
				}, {
					name: '到店自取',
				}],
				subScr: [{
					name: '开启'
				}, {
					name: '关闭'
				}],
				radiovalue: '快递',
				subScrValue: '关闭',
				loading:false,
				toPrice: '',
				Mode: '快递',
				freight: 60,
				isEnd: false,
				address: {
					name: '张三',
					number: 13240722710,
					add: '江苏省无锡市滨湖区',
					addre: '山水西路',
				},
			}
		},
		methods: {
			initData() {
				this.orderData = this.$store.state.orderData;
			},
			onShow() {
				this.initData();
				this.orderData = this.orderData.filter((p) => {
					return p.isEnd == true;
				})
			},
			groupChange(n) {
				console.log('groupChange', n);
				this.Mode = n;
				if (n === '到店自取') {
					this.freight = 0;
					this.toPrice = this.toPrice - 60;
				};
				if (n === '快递') {
					this.freight = 60;
					this.toPrice = this.toPrice + 60;
				}
			},
			Alert(){
				console.log(11111);
				this.$refs.uToast.show({
				    message: "支付成功",
					type: 'success',
				});
			},
			Addre() {
				uni.navigateTo({
					url: `/pages/address/changeAdress`,
				});
				 this.$store.commit('ADD',this.address);
			},
			submit(){
				this.loading=true;
				this.$store.commit('DELETE',this.orderData);
				setTimeout(()=>{
					uni.switchTab({
						url:"/pages/order/Order",
					});
					this.orderData=[];
				},2200);
				setTimeout(()=>{this.Alert();this.loading=false;},1600);
			}
		},
		onLoad(item) {
			console.log(999, item);
			this.toPrice = Number(item.toPrice) + 60;
		}
	}
</script>

<style lang="scss" scoped>
	.confirms {
		padding: 15rpx;
		padding-bottom: 160rpx;

		.confirm {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border: 1px solid #ccc;
			height: 170rpx;
			border-radius: 10rpx;
			padding: 15rpx;
			margin-bottom: 15rpx;

			.text {
				padding-left: 15rpx;
				font-size: 24rpx;
				color: #646365;

				.num {
					display: flex;
					justify-content: flex-start;
					margin-top: 15rpx;

					span {
						color: red;
						font-weight: bold;
						font-size: 32rpx;
					}

					.title {
						flex: 1;
						padding-left: 330rpx;
						padding-top: 5rpx;
					}
				}
			}
		}

		.from {
			.delive {
				display: flex;
				justify-content: flex-start;
				border-bottom: 1px solid #ccc;
				padding: 15rpx;

				.ridio {
					flex: 1;
					padding-left: 280rpx;
				}
			}

			.addre {
				display: flex;
				justify-content: flex-start;
				text-align: center;
				align-items: center;
				padding-bottom: 25rpx;
				border-bottom: 1px solid #ccc;
				padding-top: 25rpx;

				.jia {

					display: flex;
					justify-content: flex-start;

					.text {
						font-size: 25rpx;
						text-align: center;
						margin-top: 8rpx;
					}
				}

				.right {
					flex: 1;
					margin-left: 0rpx;
					float: right;
					padding-left: 470rpx;
				}
			}

			.addres {
				margin-top: 30rpx;
				border-bottom: 1px solid #eee;
				padding-bottom: 20rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;

				.right {
					flex: 1;
					padding-left: 400rpx;
				}

				.ad {
					color: #646365;
					font-size: 26rpx;
					margin-top: 20rpx;
				}
			}
		}

		.forms {
			.feright {
				height: 110rpx;
				border-bottom: 1px solid #eee;
				display: flex;
				justify-content: flex-start;
				color: #6c696e;
				align-items: center;

				span {
					flex: 1;
					margin-left: 560rpx;
				}
			}
		}

		.header {
			position: fixed;
			width: 96%;
			bottom: 0rpx;
			z-index: 999;
			padding: 20rpx;
			padding-bottom: 50rpx;
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

			.btn {
				width: 300rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>