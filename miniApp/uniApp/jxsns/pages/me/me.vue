<template>
	<view class="me">

		<uni-nav-bar :shadow="true" backState="2000" fontColor="#FFF" type="transparent">
			<view class="icon-setup" slot="left">
				<image class="setting" src="@/static/setup.png" mode="aspectFit" @tap="gotoLink('/subpages/setting/setting')" />
			</view>
		</uni-nav-bar>
		
		<uni-nav-bar backState="1000" :titleCenter="false" v-if="navBarShow">
			<view class="icon-setup" slot="left">
				<image class="setting" src="@/static/setup_b.png" mode="aspectFit" @tap="gotoLink('/subpages/setting/setting')" />
			</view>
		</uni-nav-bar>

		<!-- 页面区域 允许滚动 -->
		<view class="page-item">
			<!-- 用户信息卡片 -->
			<view class="user-info">
				<image class="hbg" src="@/static/hbg.png" mode="aspectFit" />
				<image class="user-info-content" src="@/static/ubg.png" mode="aspectFit" />
				<view class="user-content" @tap="checkLogin">
					<view class="user-imgbox">
						<view class="user-img">
							<u-avatar :src="avatar"></u-avatar>
						</view>
					</view>
					<view class="user-text">
						<text class="user-name">{{userInfo.name}}</text>
						<view class="user-brief">
							{{bio ? bio : '这个人有点懒，什么都没留下'}}
						</view>
					</view>
				</view>

				<!-- 下面的半圆导航 -->
				<view class="view-circle" />


				<view class="user-tabs">
					<view class="tab-item left" @tap="gotoLink('/subpages/setting/setting')">
						<image class="tab-svg" src="@/static/setup_b.png" mode="aspectFit" />
						<text class="tab-name">个人设置</text>
					</view>
					<view class="tab-item" @tap="viewMsg">
						<image class="tab-svg" src="@/static/bell.png" mode="aspectFit" />
						<text class="tab-name">我的消息</text>
						<text class="badges right" v-if="loginState">{{ userInfo.liked + userInfo.commented }}</text>
					</view>
				</view>
			</view>

			<view class="feeds-box">
				<u-waterfall v-model="feedsList" ref="waterfall">
					<template v-slot:left="{leftList}">
						<view class="feed-one" v-for="(item, index) in leftList" :key="index">
							<view @tap=" gotoLink('/subpages/feedinfo/feedinfo?id=' + item.id ) ">
								<image class="feed-img" :src="item.cover" mode="widthFix" :lazy-load="true" />
								<view class="u-line-2 feed-title" v-if="item.feed_content">{{ item.feed_content }}</view>
								<view class="feed-info">
									<view class="left">
										<!-- 点赞相关 -->
										<view class="mbtn" @tap.stop="clickLove(item)">
											<image v-if="item.has_like" src="@/static/lover.png" class="micon-loved" />
											<image v-else src="@/static/love.png" class="micon-love" />
											<text class="mtext" v-if=" item.like_count>0 ">{{ item.like_count }}</text>
										</view>
										<!-- 评论次数 -->
										<view class="mbtn">
											<image src="@/static/msg.png" class="micon-share" />
											<text class="mtext" v-if=" item.feed_comment_count>0 ">{{ item.feed_comment_count }}</text>
										</view>
									</view>
									<!-- 分享 -->
									<view class="right" @tap.stop="openSheet(item.id)">
										<image src="@/static/more.png" class="micon-more" />
									</view>
								</view>
							</view>
						</view>
					</template>
					<template v-slot:right="{rightList}">
						<view class="feed-one" v-for="(item, index) in rightList" :key="index">
							<view @tap=" gotoLink('/subpages/feedinfo/feedinfo?id=' + item.id ) ">
								<image class="feed-img" :src="item.cover" mode="widthFix" :lazy-load="true" />
								<view class="u-line-2 feed-title" v-if="item.feed_content">{{ item.feed_content }}</view>
								<view class="feed-info">
									<view class="left">
										<!-- 点赞相关 -->
										<view class="mbtn" @tap.stop="clickLove(item)">
											<image v-if="item.has_like" src="@/static/lover.png" class="micon-loved" />
											<image v-else src="@/static/love.png" class="micon-love" />
											<text class="mtext" v-if=" item.like_count>0 ">{{ item.like_count }}</text>
										</view>
										<!-- 评论次数 -->
										<view class="mbtn">
											<image src="@/static/msg.png" class="micon-share" />
											<text class="mtext" v-if=" item.feed_comment_count>0 ">{{ item.feed_comment_count }}</text>
										</view>
									</view>
									<!-- 分享 -->
									<view class="right" @tap.stop="openSheet(item.id)">
										<image src="@/static/more.png" class="micon-more" />
									</view>
								</view>
							</view>
						</view>
					</template>
				</u-waterfall>
			</view>
		</view>
		<!-- 分享按钮组件 -->
		<goto-share />
		<!-- 登陆组件 -->
		<login ref="login" />
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import feedMixin from '@/mixins/todoFeed.js'
	export default {
		mixins: [feedMixin],
		data() {
			return {
				// 是否显示 navbar
				navBarShow: false,
				feedsList: [],
				avatar: '',
				bio: ''
			}
		},
		computed: {
			...mapState(['loginState', 'userInfo'])
		},
		onPageScroll(res) {
			if (res.scrollTop > 100) {
				this.navBarShow = true;
			} else {
				this.navBarShow = false;
			}
		},
		onLoad() {
			this.getInfos()
			// 用户登录后触发数据更新
			uni.$on('meUserLogin', this.getInfos)
			
			// 用户退出后触发数据更新
			uni.$on('meUserLogout', () => {
				console.log('触发了退出操作')
				this.feedsList = []
				this.avatar = ''
				this.bio = ''
				this.$refs.waterfall.clear()
			})
			// 用户发布一条动态后触发数据更新
			uni.$on('myFeedsUpdate', ()=>{
				this.$refs.waterfall.clear()
				this.getInfos()
			})
			// 用户点赞一条动态后触发数据更新
			uni.$on('myFeedLoveChange', item => {
				this.$refs.waterfall.modify(item.id, "like_count", item.like_count);
				this.$refs.waterfall.modify(item.id, "has_like", item.has_like);
			})
			// 用户评论一条动态后触发数据更新
			uni.$on('myFeedCommentChange', item => {
				this.$refs.waterfall.modify(item.id, "feed_comment_count", item.feed_comment_count)
			})
			
		},
		onPullDownRefresh() {
			console.log('下拉刷新了')
			this.$refs.waterfall.clear()
			this.getInfos()
		},
		methods: {
			...mapActions(['userLoginAction', 'userLogoutAction']),
			// 检查是否处于登陆状态
			checkLogin() {
				if (!this.loginState) {
					this.$refs.login.openLogin()
					return
				}
			},
			// 登录后获取相关当前用户信息，包含当前用户发布的动态信息
			async getInfos() {
				// 判断当前登录状态，如果处于登陆状态，则定时轮询请求消息数据
				if (!this.loginState) {
					this.$refs.login.openLogin()
					return
				}
				// 获取当前登陆用户的相关信息，头像、简介，如果获取不到说明未曾登陆，则展开登陆框
				let resa = await this.$u.api.findUser({
					name: this.userInfo.name
				})
				if (resa.statusCode === 200) {
					this.avatar = !!resa.data.avatar ? resa.data.avatar.url : this.userInfo.avatar
					this.bio = resa.data.bio
				} else {
					this.$refs.login.openLogin()
					return
				}

				// 获取当前用户的 动态信息
				let res = await this.$u.api.getFeeds({
					type: 'users'
				})
				this.feedsList = res.data.feeds.map(item => {
					return {
						...item,
						cover: this.BaseFileURL + item.images[0].file
					}
				})
			},
			// 路由跳转
			gotoLink(url) {
				if (!this.loginState) {
					this.$refs.login.openLogin()
					return
				}
				uni.navigateTo({
					url
				})
			},
			viewMsg() {
				if (!this.loginState) {
					this.$refs.login.openLogin()
					return
				}
				uni.showModal({
					title: '我的消息',
					content: '消息查阅'
				})
			},
			// 选择删除一条动态
			async openSheet(fid) {
				uni.showActionSheet({
					itemList: ["删除"],
					success: async res => {
						
						console.log('删除 id 为' + fid + '的动态')
						await this.$u.api.deleteFeed({
							id: fid
						})
						this.$refs.waterfall.remove(fid);
						
						// 触发 首页动态 同步删除事件
						uni.$emit('indexFeedRemove', fid)
						
						uni.showToast({
							title: "当前动态已删除",
							duration: 1000
						})

					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	// 顶部设置按钮
	.icon-setup {
		padding-left: 50upx;
		display: flex;
		justify-content: center;
		align-items: center;

		.setting {
			width: 44upx;
			height: 44upx;
		}

		.nav-text {
			color: #111;
			margin-left: 10upx;
		}
	}

	.page-item {
		width: 750upx;
		overflow-x: hidden;
	}

	// 用户信息
	.user-info {
		position: relative;
		z-index: 1;
		display: flex;
		justify-content: center;
		width: 750upx;
		height: 708upx;
		background: linear-gradient(to top, #1d293c, #25354b);

		.hbg {
			position: absolute;
			width: 300upx;
			height: 300upx;
			top: 0;
			left: 0;
			z-index: 3;
		}

		.user-info-content {
			position: absolute;
			width: 620upx;
			height: 568upx;
			bottom: 0;
			z-index: 4;
		}

		.user-content {
			position: absolute;
			width: 620upx;
			height: 568upx;
			bottom: 0;
			z-index: 5;
			background-size: cover;
			border: none;
			border-radius: 20upx 20upx 0 0;
			font-size: 28upx;
			padding: 0;
			text-align: center;
			line-height: 40upx;
			font-weight: normal;
			font-style: normal;

			.user-text {
				text-align: left;
				width: 560upx;
				height: 180upx;
				position: absolute;
				top: 180upx;
				left: 50upx;
				z-index: 99;

				.user-name {
					font-weight: 400;
					font-size: 40upx;
					color: #001432;
					font-style: normal;
					letter-spacing: 0;
					line-height: 60upx;
					padding-bottom: 12upx;
				}

				.user-brief {
					width: 550upx;
					font-weight: 400;
					font-size: 24upx;
					color: #757474;
					font-style: normal;
					line-height: 36upx;
				}
			}

			.user-imgbox {
				height: 118upx;
				margin-top: 70upx;
				margin-bottom: 80upx;

				.user-img {
					width: 118upx;
					height: 118upx;
					margin-left: 30upx;
					overflow: hidden;
					border-radius: 30upx;

					image {
						width: 118upx;
						height: 118upx;
					}
				}
			}
		}

		.view-circle {
			overflow: hidden;
			border-width: 0;
			border-style: solid;
			position: absolute;
			z-index: 9;
			width: 750upx;
			height: 300upx;
			background: url(@/static/half-circle.png) no-repeat center;
			background-size: cover;
			bottom: 0;

			.view-circle-bg {
				width: 750upx;
				height: 100%;
			}
		}

		.user-tabs {
			position: absolute;
			height: 120upx;
			width: 610upx;
			display: flex;
			z-index: 11;
			bottom: 120upx;
			left: 90upx;

			.tab-item {
				width: 284upx;
				height: 112upx;
				background-color: rgba(0, 20, 50, 0.04);
				border-radius: 8upx;
				display: flex;
				justify-content: center;
				align-items: center;

				.badges {
					position: absolute;
					bottom: 70upx;
					right: 215upx;
					background-color: #f73c52;
					height: 36upx;
					line-height: 36upx;
					border-radius: 18upx;
					padding: 0 14upx;
					margin-left: 20upx;
					color: #ffffff;
					font-size: 20upx;

					&.left {
						right: 510upx;
					}
				}

				.tab-svg {
					width: 40upx;
					height: 40upx;
					margin-right: 20upx;
				}

				.tab-name {
					font-size: 32upx;
					color: #001432;
					font-style: normal;
					letter-spacing: 0px;
					line-height: 20px;
					margin-left: 10upx;

					&.left {
						margin-right: 10upx;
					}
				}

				&.left {
					margin-right: 10upx;
				}
			}
		}
	}

	// 动态相关瀑布流样式
	.feeds-box {
		width: 735upx;
		margin-left: 13upx;
		padding-bottom: 20upx;

		.feed-one {
			width: 358upx;
			margin-bottom: 12upx;
			border-radius: 10upx;
			position: relative;
			background-color: #f9f9f9;

			.feed-img {
				width: 358upx;
				border-radius: 10upx 10upx 0 0;

				&.h-img {
					height: 488upx;
				}

				&.w-img {
					height: 358upx;
				}
			}

			.feed-title {
				width: 350upx;
				padding-top: 10upx;
				margin-left: 10upx;
				font-size: 28upx;
				line-height: 40upx;
				color: #001432;
				text-align: left;
			}

			.fvicon {
				position: absolute;
				right: 10upx;
				top: 10upx;
				z-index: 1;

				.play-icon {
					width: 40upx;
					height: 40upx;
				}
			}

			.feed-info {
				width: 350upx;
				height: 60upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-top: 0;
				font-size: 20upx;
				color: #666;

				.left {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					width: 200upx;
					height: 60upx;

					.mbtn {
						padding: 0 20upx 10upx 10upx;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						justify-content: center;
						background-color: #f9f9f9;
					}

					.micon-love {
						width: 32upx;
						height: 28upx;
					}

					.micon-loved {
						width: 32upx;
						height: 28upx;
					}

					.micon-share {
						width: 28upx;
						height: 28upx;
					}

					.mtext {
						color: #999;
						font-size: 24upx;
						margin-left: 10upx;
					}

					.minfo {
						color: #999;
						font-size: 22upx;
						margin-left: 12upx;
						padding-bottom: 6upx;
					}
				}

				.right {
					.micon-more {
						width: 36upx;
						height: 32upx;
						padding-top: 16upx;
						padding-right: 6upx;
					}
				}
			}
		}
	}
</style>
