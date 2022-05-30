<template>
	<view>
		<text>我</text>
		<text>{{name}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: 'aaaa'
			}
		},
		onLoad(){
			uni.$on('getInfo', name =>{
				console.log('Me 页面中的全局事件被触发了')
				this.name = name
			})
			
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
