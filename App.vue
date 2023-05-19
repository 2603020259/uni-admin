<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')//页面首次挂在
		},
		onShow: function() {
			console.log('App Show') //页面显示
		},
		onHide: function() {
			console.log('App Hide')  //页面隐藏
		},
		onError:function(err){
			console.log('报错了',err); //页面错误的时候
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>

