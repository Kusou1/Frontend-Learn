<template>
	<view class="container">

		<!-- 聊天列表 -->
		<view class="chat-body">
			<block v-for="(item, index) in chatList" :key="index">
				<view class="chat-one" v-if="!item.isMe">
					<image class="chat-face" src="@/static/faces/1-thump.jpg" />
					<view class="chat-box">
						<view class="chat-sender">知心姐姐</view>
						<view class="chat-content" v-if="item.type === 'txt'">{{item.content}}</view>
						<image class="chat-img" v-if="item.type === 'img'" :src="item.content" mode='widthFix' />
					</view>
				</view>
				<view v-else class="chat-one chat-one-mine">
					<view class="chat-box">
						<view class="chat-content" v-if="item.type === 'txt'">{{item.content}}</view>
						<image class="chat-img" v-if="item.type === 'img'" :src="item.content" mode='widthFix' />
					</view>
					<image class="chat-face" src="@/static/faces/6-thump.jpg" />
				</view>
			</block>
			
		</view>
		<!-- 聊天输入 -->
		<view class="chat-footer">
			<input class="msg-input" type="text" cursor-spacing="16" v-model="myInput"/>
			<image class="img-chose" src="@/static/img.png" @click="choseImgAndSend"/>
			<view class="send-btn" @click="sendMsg">发送</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 保存聊天的内容
				chatList:[{
					isMe: false,
					type: 'txt',
					content: '你好，我是可爱的知心姐姐，请问你想和我聊什么呢？'
				},{
					isMe: false,
					type: 'img',
					content: '/static/imgs/1.jpg'
				},{
					isMe: true,
					type: 'txt',
					content: '哇，你真漂亮'
				},{
					isMe: true,
					type: 'img',
					content: '/static/imgs/2.jpg'
				}],
				myInput:''
			}
		},
		onShow(){
			if(!!uni.getStorageSync('chatList')){
				this.chatList = JSON.parse(uni.getStorageSync('chatList'))
				uni.pageScrollTo({
					scrollTop: 999999,
					duration: 0
				})
			}
		},
		methods:{
			choseImgAndSend(){
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: res => {
						console.log(res.tempFilePaths[0])
						
						let senMsg = {
							isMe: true,
							type: 'img',
							content: res.tempFilePaths[0]
						}
						this.chatList.push(senMsg)
						
						let resMsg = {
							isMe: false,
							type: 'img',
							content: res.tempFilePaths[0]
						}
						this.chatList.push(resMsg)
						
						uni.pageScrollTo({
							scrollTop: 999999,
							duration: 0
						})
						
						uni.setStorageSync('chatList', JSON.stringify(this.chatList))
						
					}
				})
			},
			sendMsg(){
				if(!this.myInput) return
				let senMsg = {
					isMe: true,
					type: 'txt',
					content: this.myInput
				}
				this.chatList.push(senMsg)

				let resMsg = {
					isMe: false,
					type: 'txt',
					content: this.myInput
				}
				this.chatList.push(resMsg)
				
				this.myInput = ''
				
				uni.pageScrollTo({
					scrollTop: 999999,
					duration: 0
				})
				
				uni.setStorageSync('chatList', JSON.stringify(this.chatList))
			}
		}
	}
</script>


<style lang="scss" scoped>
	.container {
		background-color: #f1f1f1;
		min-height: 100vh;
	}

	.chat-body {
		padding-bottom: 178upx;

		.chat-time {
			text-align: center;
			color: #888;
			padding: 40upx 0 0;
		}

		.chat-one {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-items: flex-start;
			padding: 20upx 0;
		}

		.chat-one-begin {
			padding: 40upx 0 0;
		}

		.chat-one-mine {
			justify-content: flex-end;
		}

		.chat-face {
			width: 84upx;
			height: 84upx;
			border-radius: 10upx;
			margin-left: 40upx;
		}

		.chat-one-mine .chat-face {
			margin-left: 0;
			margin-right: 40upx;
		}

		.chat-box {
			max-width: calc(100% - 290upx);
			margin-left: 20upx;
			font-size: 30upx;
		}

		.chat-one-mine .chat-box {
			margin-right: 20upx;
		}

		.chat-sender {
			color: #888;
			font-size: 28upx;
			margin-top: -8upx;
			margin-bottom: 10upx;
		}

		.chat-content {
			background-color: #fff;
			border-radius: 5px;
			padding: 10px;

			.micon {
				margin-right: 20upx;
				color: #666;
			}
		}

		.chat-img {
			float: left;
			max-width: 60%;
			border-radius: 5px;
		}

		.chat-one-mine .chat-img {
			float: right;
		}
	}

	.chat-footer {
		width: 670upx;
		padding: 0 40upx;
		height: 120upx;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #f1f1f1;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		border-top: 1upx solid #ddd;

		.msg-input {
			background-color: #fff;
			width: calc(100% - 300upx);
			height: 70upx;
			line-height: 70upx;
			font-size: 30upx;
			border-radius: 10upx;
			padding: 0 20upx;
		}
		
		.img-chose{
			height: 70upx;
			width: 70upx;
		}
			
		.send-btn {
			height: 60upx;
			line-height: 60upx;
			width: 120upx;
			text-align: center;
			background-color: green;
			color: #FFFFFF;
			border-radius: 12upx;
		}

	}
</style>
