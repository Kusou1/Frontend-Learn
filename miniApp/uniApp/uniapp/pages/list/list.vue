<template>
	<view>
		<text>通讯录</text>
		<view>{{userName}}</view>
		<view>
			<button type="default" @click="login('蜡笔小新')">登陆</button>
			<button type="default" @click="logout">退出</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex' 
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			// #ifdef H5
			alert('你好，少年！ ')
			// #endif
			
			switch(uni.getSystemInfoSync().platform){
			 case 'android':
			    console.log('运行Android上')
			    break;
			 case 'ios':
			    console.log('运行iOS上')
			    break;
			 default:
			    console.log('运行在开发者工具上')
			    break;
			}
		},
		computed:{
			...mapState(['userName'])
		},
		methods: {
			...mapActions(['login', 'logout'])
		}
	}
</script>

<style>

</style>
