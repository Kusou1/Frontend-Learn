<template>
	<view class="list-box">

		<view @tap="gotoWeb('https://uniapp.dcloud.io/component/mp-weixin-plugin')" class="list">
			<view class="left-box">
				<text>隐私政策</text>
			</view>
			<view class="right-box">
				<image src="@/static/ic_arrow_smallgrey.png" />
			</view>
		</view>

		<view @tap="gotoWeb('https://developers.weixin.qq.com/miniprogram/dev/framework/')" class="list">
			<view class="left-box">
				<text>用户协议</text>
			</view>
			<view class="right-box">
				<image src="@/static/ic_arrow_smallgrey.png" />
			</view>
		</view>


		<button @click="logout" class="logout">退出登录</button>
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

			};
		},
		created: function() {},
		methods: {
			...mapActions(['userLogoutAction']),
			logout() {
				this.userLogoutAction()
				
				uni.$emit('meUserLogout')
				uni.$emit('indexUserLogout')
				
				uni.switchTab({
					url: '/pages/me/me'
				})
			},
			gotoWeb(url) {
				wx.navigateTo({
					url: '/pages/webview/webview?url=' + encodeURI(url)
				});
			},
		},
	};
</script>

<style lang="scss">
	.list-box {
		width: 100%;
		padding: 30rpx;
		font-size: 30rpx;
		background-color: #fafafa;

		.list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			height: 102rpx;
			font-weight: 700;
			border-top: 1rpx solid #F1F1F1;

			.left-box {
				display: flex;
				align-items: center;
				font-size: 30rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.right-box {
			display: flex;
			align-items: center;
			color: #b3b3b3;
			font-weight: 500;
			font-size: 28rpx;

			image {
				width: 24rpx;
				height: 24rpx;
				margin-left: 18rpx;
			}
		}
	}

	.logout {
		background-color: red;
		color: #ffffff;
		width: 70%;
		height: 88rpx;
		line-height: 88rpx;
		border-radius: 44rpx;
		position: absolute;
		bottom: 100rpx;
		left: 15%;
		right: 15%;
	}
</style>
