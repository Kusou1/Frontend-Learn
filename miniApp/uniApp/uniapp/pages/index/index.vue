<template>
	<view class="content">
		<text>首页</text>
		<view>
			<navigator url="/subpages/chat/chat">前往和知心姐姐聊天</navigator>
		</view>
		<child :msg="title" @childEvent="sayHello"></child>
	</view>
</template>

<script>
	import Child from '@/components/child.vue'
	export default {
		data() {
			return {
				title: '我是父组件定义的数据信息'
			}
		},
		components:{
			Child
		},
		onShow(){
			console.log('Index page show')
		},
		onLoad() {
			console.log(getCurrentPages())
		},
		onPullDownRefresh(){
			console.log('页面下拉刷新了')
		},
		methods: {
			sayHello(msg){
				this.title = msg
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
