<template>
	<view class="search">
		<u-toast ref="uToast"></u-toast>
		<view class="inputs">
			<u--input @blur="Search" v-model="value" :focus="true" placeholder="请输入搜索关键词" prefixIcon="search"
				suffixIcon="scan" prefixIconStyle="font-size: 20px;color: #909399"></u--input>
			<view class="icon" @click="twoCode"></view>
			<text class="texts" v-if="lists.length">历史搜索</text>
			<view class="main">
				<view v-if="lists.length">
					<view class="list" v-for="(item,index) of lists" :key="index">
						<view @click="Jump(item)" class="text">{{item}}</view>
						<view style="width: 100rpx;"><u-tag @click="Delete(item)" text="删除 ×" size="mini"
								type="primary"></u-tag></view>
					</view>
				</view>
				<view class="error" v-if="!lists.length">
					<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
					</image>
					<text>暂无历史搜索</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Search',
		data() {
			return {
				list: [],
				value: '',
				lists: [],
			}
		},
		methods: {
			twoCode() {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			Search(item) {
				if (item === '') {
					this.$refs.uToast.show({
						message: "搜索内容不能为空",
					});
					return;
				}
				this.list.push(item);
				this.$nextTick(() => {
					this.value = '';
				});
				uni.navigateTo({
					url:`/pages/goodsList/GoodsList`,
				});
				this.$store.commit('SEARCHVALUE',this.value);
			},
			Delete(item) {
				this.list = this.list.filter((p) => {
					return p !== item;
				});
			},
			Jump(item){
				uni.navigateTo({
					url:`/pages/goodsList/GoodsList`,
				});
				this.$store.commit('SEARCHVALUE',item);
			}
		},
		watch: {
			list: {
				deep: true,
				handler(value) {
					//console.log(1111,value);
					uni.setStorageSync('name', JSON.stringify(value));
					let data = JSON.parse(uni.getStorageSync('name'));
					console.log(888, data);
					this.lists = data;
				}
			}
		},
		onShow() {
			this.$nextTick(() => {
				let data = JSON.parse(uni.getStorageSync('name'));
				console.log(888, data);
				this.lists = data;
				this.list = data;
			});
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		padding: 15rpx;

		.inputs {
			margin-top: 15rpx;

			.icon {
				width: 60rpx;
				height: 40rpx;
				float: right;
				margin-top: -60rpx;
				margin-right: 10rpx;
			}
		}

		.texts {
			display: inline-block;
			font-size: 28rpx;
			color: #5e5d5f;
			margin-top: 30rpx;
			padding-bottom: 10rpx;
			width: 100%;
			border-bottom: 1px solid #e0dde2;
		}

		.main {
			.list {
				display: flex;
				justify-content: flex-end;
				height: 70rpx;
				border-bottom: 1px solid #e0dde2;
				align-items: center;
				padding: 15rpx;

				.text {
					flex: 1;
					margin-left: 0rpx;
				}
			}

			.error {
				display: flex;
				align-items: center;
				flex-direction: column;
				color: #5e5d5f;
			}
		}
	}
</style>