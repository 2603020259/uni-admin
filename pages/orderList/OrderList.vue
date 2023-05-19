<template>
	<view class="orderlist">
		<view class="tab">
			<u-tabs :current="current" :list="list" @click="click" lineColor="#b842ff" :activeStyle="{color:'#b842ff'}" lineWidth="35"
				itemStyle="padding-left: 26px; padding-right: 26px; height: 44px;"></u-tabs>
		</view>
		<view class="mains">
			<view class="main" v-if="item==='全部'">
				<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2"></image>
				<text>暂无订单</text>
			</view>
			<view class="main" v-if="item==='待付款'">
				<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2"></image>
				<text>暂无订单</text>
			</view>
			<view class="main" v-if="item==='待发货'">
				<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2"></image>
				<text>暂无订单</text>
			</view>
			<view class="main" v-if="item==='待收货'">
				<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2"></image>
				<text>暂无订单</text>
			</view>
			<view class="main" v-if="item==='待评价'">
				<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2"></image>
				<text>暂无订单</text>
			</view>
			<view class="main" v-if="item==='售后中'">
				<image src="https://gd-hbimg.huaban.com/3f7c8a196579c03c0092682752388cc65c03156ff14b-cHTXE2"></image>
				<text>暂无订单</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'OrderList',
		data() {
			return {
				list: [{
					name: '全部'
				}, {
					name: '待付款'
				}, {
					name: '待发货'
				}, {
					name: '待收货'
				}, {
					name: '待评价'
				}, {
					name: '售后中'
				}],
				item:'全部',
				current:0,
			}
		},
		methods: {
			click(item) {
				console.log('item', item);
				this.item=item.name;
			}
		},
		onLoad(options) {
			//console.log('订单列表', options);
			if(options.item==='待付款'){
				this.current=1;
			}
			if(options.item==='待发货'){
				this.current=2;
			}
			if(options.item==='待收货'){
				this.current=3;
			}
			if(options.item==='待评价'){
				this.current=4;
			}
			if(options.item==='售后'){
				this.current=5;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.orderlist {
		.mains {
			.main {
				display: flex;
				align-items: center;
				flex-direction: column;
				color: #5e5d5f;
			}
		}
	}
</style>