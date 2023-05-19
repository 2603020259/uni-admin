<template>
	<view class="help">
		<u-toast ref="uToast"></u-toast>
		<view>
			<u-toast ref="uToast" :loading="true"></u-toast>
		</view>
		<view class="u-demo-block__content main">
			<u-row justify="space-between" gutter="10">
				<!--左侧tabs栏-->
				<u-col span="3">
					<view class="tabs">
						<view class="tab" :class="{active:item.isnab}" v-for="item of tabs" :key="item.title"
							@click="tabItem(item)">
							{{item.title}}
						</view>
					</view>
				</u-col>
				<!--右侧内容部分-->
				<u-col span="9">
					<view class="commod">
						<!--常见问题-->
						<view v-show="isNabCommod===1">
							<view>
								<view class="problem" v-for="item of Problem" :key="item.text" v-if="Problem.length"
									@click="Jump">
									<view class="text">{{item.text}}</view>
									<view><u-icon name="arrow-right"></u-icon></view>
								</view>
							</view>
							<view class="error" v-if="!Problem.length">
								<image
									src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
								</image>
								<text>暂无记录</text>
							</view>
						</view>
						<!--购物指南-->
						<view v-show="isNabCommod===2">
							<view>
								<view class="problem" v-for="item of shoppingGuide" :key="item.text"
									v-if="shoppingGuide.length" @click="Jump">
									<view class="text">{{item.text}}</view>
									<view><u-icon name="arrow-right"></u-icon></view>
								</view>
							</view>
							<view class="error" v-if="!shoppingGuide.length">
								<image
									src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
								</image>
								<text>暂无记录</text>
							</view>
						</view>
						<!--订单指南-->
						<view v-show="isNabCommod===3">
							<view>
								<view class="problem" v-for="item of orderGuide" :key="item.text"
									v-if="orderGuide.length" @click="Jump">
									<view class="text">{{item.text}}</view>
									<view><u-icon name="arrow-right"></u-icon></view>
								</view>
							</view>
							<view class="error" v-if="!orderGuide.length">
								<image
									src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
								</image>
								<text>暂无记录</text>
							</view>
						</view>
						<!--支付问题-->
						<view v-show="isNabCommod===4">
							<view>
								<view class="problem" v-for="item of payment" :key="item.text" v-if="payment.length"
									@click="Jump">
									<view class="text">{{item.text}}</view>
									<view><u-icon name="arrow-right"></u-icon></view>
								</view>
							</view>
							<view class="error" v-if="!payment.length">
								<image
									src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
								</image>
								<text>暂无记录</text>
							</view>
						</view>
						<!--物流问题-->
						<view v-show="isNabCommod===5">
							<view>
								<view class="problem" v-for="item of logistics" :key="item.text" v-if="logistics.length"
									@click="Jump">
									<view class="text">{{item.text}}</view>
									<view><u-icon name="arrow-right"></u-icon></view>
								</view>
							</view>
							<view class="error" v-if="!logistics.length">
								<image
									src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
								</image>
								<text>暂无记录</text>
							</view>
						</view>
						<!--售后问题-->
						<view v-show="isNabCommod===6">
							<view>
								<view class="problem" v-for="item of After" :key="item.text" v-if="After.length"
									@click="Jump">
									<view class="text">{{item.text}}</view>
									<view><u-icon name="arrow-right"></u-icon></view>
								</view>
							</view>
							<view class="error" v-if="!After.length">
								<image
									src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
								</image>
								<text>暂无记录</text>
							</view>
						</view>
						<!--退货细则-->
						<view v-show="isNabCommod===7">
							<view>
								<view class="problem" v-for="item of returnGoods" :key="item.text"
									v-if="returnGoods.length" @click="Jump">
									<view class="text">{{item.text}}</view>
									<view><u-icon name="arrow-right"></u-icon></view>
								</view>
							</view>
							<view class="error" v-if="!returnGoods.length">
								<image
									src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
								</image>
								<text>暂无记录</text>
							</view>
						</view>
						<!--协议规则-->
						<view v-show="isNabCommod===8">
							<view>
								<view class="problem" v-for="item of http" :key="item.text" v-if="http.length"
									@click="Jump">
									<view class="text">{{item.text}}</view>
									<view><u-icon name="arrow-right"></u-icon></view>
								</view>
							</view>
							<view class="error" v-if="!http.length">
								<image
									src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
								</image>
								<text>暂无记录</text>
							</view>
						</view>
						<!--招商加盟-->
						<view v-show="isNabCommod===9">
							<view>
								<view class="problem" v-for="item of lnves" :key="item.text" v-if="lnves.length"
									@click="Jump">
									<view class="text">{{item.text}}</view>
									<view><u-icon name="arrow-right"></u-icon></view>
								</view>
							</view>
							<view class="error" v-if="!lnves.length">
								<image
									src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2">
								</image>
								<text>暂无记录</text>
							</view>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Help',
		data() {
			return {
				//tab栏标题
				tabs: [{
					title: '常见问题',
					num: 1,
					isnab: true
				}, {
					title: '购物指南',
					num: 2,
					isnab: false
				}, {
					title: '订单指南',
					num: 3,
					isnab: false
				}, {
					title: '支付问题',
					num: 4,
					isnab: false
				}, {
					title: '物流问题',
					num: 5,
					isnab: false
				}, {
					title: '售后问题',
					num: 6,
					isnab: false
				}, {
					title: '退货细则',
					num: 7,
					isnab: false
				}, {
					title: '协议规则',
					num: 8,
					isnab: false
				}, {
					title: '招商加盟',
					num: 9,
					isnab: false
				}],
				//常见问题数据
				Problem: [{
					text: '商品质量为题',
				}, {
					text: '超时未收到货',
				}, {
					text: '物流地址发错',
				}],
				//购物指南数据
				shoppingGuide: [{
					text: '发什么快递',
				}, {
					text: '全场包邮吗',
				}, {
					text: '是否是正品',
				}],
				//订单指南数据
				orderGuide: [{
					text: '如何查询订单',
				}],
				//支付问题数据
				payment: [],
				//物流问题数据
				logistics: [],
				//售后问题数据
				After: [],
				//退货细则数据
				returnGoods: [],
				//协议规则数据
				http: [{
					text: '正品保证',
				}, {
					text: '买贵必赔',
				}, {
					text: '全场包邮',
				}],
				//招商加盟数据
				lnves: [],
				isNabCommod: 1,
			}
		},
		methods: {
			tabItem(item) {
				this.tabs.forEach((p) => {
					p.isnab = false;
				});
				item.isnab = true;
				this.isNabCommod = item.num;
				this.show();
			},
			show() {
				this.$refs.uToast.show({
					type: 'loading',
					title: '正在加载',
					message: "正在加载",
					duration: '500'
				});
			},
			Jump() {
				this.$refs.uToast.show({
					message: "服务器请求失败",
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.help {
		.main {
			position: relative;

			.tabs {
				.tab {
					width: 100%;
					height: 100rpx;
					line-height: 100rpx;
					text-align: center;
					font-size: 30rpx;
					margin-bottom: 15rpx;
				}

				.active {
					border-left: 8rpx solid #b842ff;
					background-color: #fff;
					color: #b842ff;
				}
			}

			.commod {
				position: absolute;
				top: 0rpx;
				width: 72%;

				.problem {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					border-bottom: 1px solid #e0dde2;
					height: 100rpx;

					.text {
						flex: 1;
						margin-right: 0rpx;
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
	}
</style>