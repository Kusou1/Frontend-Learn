<template>
	<view id="index">

		<!-- 顶部导航 -->
		<uni-nav-bar v-if="navBarShowTag">
			<view class="tabs-box">
				<view class="one-nav" :class="currentSwiperIndex === 0 ? 'nav-actived' : '' " @tap="swiperChange(0)">推荐</view>
				<view class="one-nav" :class="currentSwiperIndex === 1 ? 'nav-actived' : '' " @tap="swiperChange(1)">资讯</view>
			</view>
		</uni-nav-bar>

		<!-- 页面 header 相关部分 -->
		<view class="header-box">
			<!-- 顶部广告位轮播图 -->
			<swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="2500" :duration="500">
				<swiper-item v-for="item in swiperAdList" :key="item.id">
					<navigator open-type="navigate" :url=" '/pages/webview/webview?url='+item.link">
						<image class="banner-swiper-img" :src="item.image" mode="aspectFill" />
					</navigator>
				</swiper-item>
			</swiper>
			<!-- 遮罩使用弧形框 -->
			<image class="crile" src="@/static/crile.png" mode="aspectFill" />
			<!-- 两个选项按钮 -->
			<view class="card-header">
				<view class="card-one card-left" @tap="gotoFeeds('/pages/feeds/feeds')">
					<image class="img" src="@/static/coffee.png" mode="aspectFill" />
					<view class="iright">
						<view class="title">精彩动态</view>
					</view>
				</view>
				<view class="card-one card-right" @tap="gotoFeeds('/pages/me/me')">
					<image class="img" src="@/static/ran.png" mode="aspectFill" />
					<view class="iright">
						<view class="title">个人中心</view>
					</view>
				</view>
			</view>

			<!-- Tab 选项卡 -->
			<view class="tabs-box">
				<view class="one-nav" :class="currentSwiperIndex === 0 ? 'nav-actived' : '' " @tap="swiperChange(0)">推荐</view>
				<view class="one-nav" :class="currentSwiperIndex === 1 ? 'nav-actived' : '' " @tap="swiperChange(1)">资讯</view>
			</view>

		</view>

		<!-- 内容轮播导航实现 -->
		<swiper class="swiper-box" :style=" 'height:'+ swiperSliderHeight " :current="currentSwiperIndex" @animationfinish="swiperSlider">
			<!-- 推荐动态实现 -->
			<swiper-item class="swiper-item">
				<view class="page-item sns-now">
					<view class="feeds-box">
						<waterfall-sns v-model="feedsList" ref="waterfall">
							<template v-slot:left="{leftList}">
								<view class="feed-one" v-for="(item, index) in leftList" :key="index">
									<navigator open-type="navigate" :url=" '/subpages/feedinfo/feedinfo?id=' + item.id">
										<image class="feed-img" :src="item.cover" mode="widthFix" :lazy-load="true" />
										<view class="u-line-2 feed-title" v-if="!!item.feed_content">{{ item.feed_content }}</view>
										<view class="feed-info">
											<view class="iview">
												<image class="avatar" :src=" item.avatar" />
												<text class="name u-line-1">{{ item.name }}</text>
											</view>
											<view class="iview">
												<view class="ilike" @tap.stop="clickLove(item)">
													<image v-if="item.has_like" src="@/static/lover.png" class="micon" />
													<image v-else src="@/static/love.png" class="micon" />
													<text class="love-count" v-if="item.like_count>0">{{ item.like_count }}</text>
												</view>
											</view>
										</view>
									</navigator>
								</view>
							</template>
							<template v-slot:right="{rightList}">
								<view class="feed-one" v-for="(item, index) in rightList" :key="index">
									<navigator open-type="navigate" :url=" '/subpages/feedinfo/feedinfo?id=' + item.id">
										<image class="feed-img" :src="item.cover" mode="widthFix" :lazy-load="true" />
										<view class="u-line-2 feed-title" v-if="!!item.feed_content">{{ item.feed_content }}</view>
										<view class="feed-info">
											<view class="iview">
												<image class="avatar" :src=" item.avatar" />
												<text class="name u-line-1">{{ item.name }}</text>
											</view>
											<view class="iview">
												<view class="ilike" @tap.stop="clickLove(item)">
													<image v-if="item.has_like" src="@/static/lover.png" class="micon" />
													<image v-else src="@/static/love.png" class="micon" />
													<text class="love-count" v-if="item.like_count>0">{{ item.like_count }}</text>
												</view>
											</view>
										</view>
									</navigator>
								</view>
							</template>
						</waterfall-sns>
					</view>
				</view>
			</swiper-item>
			<!-- 资讯列表实现 -->
			<swiper-item class="swiper-item sns-news">
				<view v-for="(item, index) in newsList" :key="index">
					<navigator class="one-new" open-type="navigate" :url=" '/subpages/newinfo/newinfo?id=' + item.id">
						<view class="left">
							<view class="title u-line-2">{{item.title}}</view>
							<view class="uinfo">
								<view class="iview">
									<view class="utime">
										<text class="name">{{ item.author }}</text>
									</view>
								</view>
								<text class="uptime">{{ item.created_at | timeFormate }}发布</text>
							</view>
						</view>
						<view class="right">
							<image class="pic" mode="aspectFill" :src="item.cover" />
						</view>
					</navigator>
				</view>
			</swiper-item>

		</swiper>

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
	// 引入 时间日期格式化显示函数
	import timeFrom from '@/tools/timeFrom.js'
	// 引入 个性化 瀑布流组件
	import WaterfallSns from '@/components/waterfall-sns/index.vue'
	import feedMixin from '@/mixins/todoFeed.js'
	export default {
		mixins: [feedMixin],
		data() {
			return {
				// navBar 显示状态控制
				navBarShowTag: false,
				// 顶部 轮播图列表
				swiperAdList: [],
				// 动态列表数据
				feedsList: [],
				// 资讯列表数据
				newsList: [],
				// 当前 推荐 资讯 滑动位置
				currentSwiperIndex: 0,
				// 滑动页面轮播器的高度
				swiperSliderHeight: '500px',
				swiperSliderFeedsHeight: 0,
				swiperSliderNewsHeight: 0,
				// 记录滚动所在的位置
				oldFeedsScrollTop: 0,
				oldNewsScrollTop: 0
			}
		},
		components: {
			WaterfallSns
		},
		computed: {
			...mapState(['loginState', 'userInfo'])
		},
		async onLoad() {
			
			uni.$on('indexUserLogin', ()=>{
				this.currentSwiperIndex = 0
				this.feedsList = []
				this.$refs.waterfall.clear()
				this.getFeedsList()
			})
			uni.$on('indexUserLogout', ()=>{
				this.currentSwiperIndex = 0
				this.feedsList = []
				this.$refs.waterfall.clear()
				this.getFeedsList()
			})
			
			// 发布新的动态后，触发数据更新
			uni.$on("indexFeedsUpdate", ()=>{
				this.currentSwiperIndex = 0
				this.feedsList = []
				this.$refs.waterfall.clear()
				this.getFeedsList()
			})
			
			// 个人中心删除一条动态后，触发更新首页数据
			uni.$on("indexFeedRemove", fid =>{
				this.$refs.waterfall.remove(fid);
			})
			
			// 用户点赞一条动态后触发数据更新
			uni.$on('indexFeedLoveChange', item => {
				this.$refs.waterfall.modify(item.id, "like_count", item.like_count);
				this.$refs.waterfall.modify(item.id, "has_like", item.has_like);
			})

			// 我们要在这里初始化请求相关数据
			this.getAdverts()
			this.getFeedsList()
			this.getNewsList()

		},
		onPageScroll(event) {
			if (this.currentSwiperIndex === 0) {
				this.oldFeedsScrollTop = event.scrollTop
			} else {
				this.oldNewsScrollTop = event.scrollTop
			}
			if (event.scrollTop > 220) {
				this.navBarShowTag = true
			} else {
				this.navBarShowTag = false
			}
		},
		onReachBottom() {
			console.log('下拉到底啦')
			// 请求新的数据
			if (this.currentSwiperIndex === 0) {
				this.getFeedsList()
			} else {
				this.getNewsList()
			}
		},
		onPullDownRefresh() {
			console.log('顶部下拉刷新')
			this.feedsList = []
			this.$refs.waterfall.clear()
			if (this.currentSwiperIndex === 0) {
				this.getFeedsList()
			} else {
				this.getNewsList()
			}
		},
		filters: {
			timeFormate(timeDate) {
				let Time = new Date(timeDate);
				let timestemp = Time.getTime();
				let t = timeFrom(timestemp, "yyyy年mm月dd日");
				return t;
			}
		},
		methods: {
			// 请求 广告轮播图信息
			async getAdverts() {
				let adverts = await this.$u.api.getAdvert({
					space: '1,2,3'
				})
				this.swiperAdList = adverts.data.map(item => {
					return {
						id: item.id,
						link: item.data.link,
						image: item.data.image
					}
				})
			},
			// 请求 feeds 列表数据
			async getFeedsList() {
				let feeds = await this.$u.api.getFeeds()
				let feedList = feeds.data.feeds.map(item => {
					return {
						...item,
						cover: this.BaseFileURL + item.images[0].file,
						avatar: !!item.user.avatar ? item.user.avatar.url : '/static/nopic.png',
						name: item.user.name,
					}
				})
				this.feedsList = [...this.feedsList, ...feedList]
				// 在这里注册一个 uniAPP 的顶层事件，用来作为数据通信
				uni.$once("swiperHeightChange", height => {
					console.log('计算出来的高度为:'+ height)
					this.swiperSliderFeedsHeight = height
					this.swiperSliderHeight = height
				})
			},
			// 请求资讯列表数据
			async getNewsList() {
				let news = await this.$u.api.getNews()
				let newsList = news.data.map(item => {
					return {
						...item,
						cover: this.BaseFileURL + item.image.id
					}
				})

				this.newsList = [...this.newsList, ...newsList]
				console.log(this.newsList)
				this.swiperSliderNewsHeight = this.newsList.length * 95 + 100 + 'px'
				this.swiperSliderHeight = this.swiperSliderNewsHeight
			},
			// 页面滑动左右分页的时候实现的效果
			swiperSlider(event) {
				if (event.detail.current === 0) {
					this.swiperSliderHeight = this.swiperSliderFeedsHeight
					uni.pageScrollTo({
						duration: 0, //过渡时间必须为0，uniapp bug，否则运行到手机会报错
						scrollTop: this.oldFeedsScrollTop, //滚动到目标位置
					})
				} else {
					this.swiperSliderHeight = this.swiperSliderNewsHeight
					uni.pageScrollTo({
						duration: 0, //过渡时间必须为0，uniapp bug，否则运行到手机会报错
						scrollTop: this.oldNewsScrollTop, //滚动到目标位置
					})
				}
				this.currentSwiperIndex = event.detail.current
			},
			// 点击按钮实现切换效果
			swiperChange(index) {
				if (index === 0) {
					this.swiperSliderHeight = this.swiperSliderFeedsHeight
					uni.pageScrollTo({
						duration: 0, //过渡时间必须为0，uniapp bug，否则运行到手机会报错
						scrollTop: this.oldFeedsScrollTop, //滚动到目标位置
					})
				} else {
					this.swiperSliderHeight = this.swiperSliderNewsHeight
					uni.pageScrollTo({
						duration: 0, //过渡时间必须为0，uniapp bug，否则运行到手机会报错
						scrollTop: this.oldNewsScrollTop, //滚动到目标位置
					})
				}
				this.currentSwiperIndex = index
			},
			gotoFeeds(url) {
				uni.switchTab({
					url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#sns {
		background-color: #f1f1f1;
	}

	// 推荐、咨询 按钮样式
	.tabs-box {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 750upx;

		.one-nav {
			width: 120upx;
			color: #9B9B9B;
			font-size: 36upx;
			text-align: center;
			font-weight: blod;

			&.nav-actived {
				color: #0050FF;
			}
		}
	}

	.header-box {
		position: relative;
		left: 0;
		height: 500upx;
		background-color: #f1f1f1;
		z-index: 1;

		// 广告位轮播器相关样式
		.swiper {
			width: 750upx;
			height: 400upx;
			position: absolute;
			left: 0;
			top: 0;
			text-align: center;
			z-index: 1;

			.banner-swiper-img {
				width: 750upx;
				height: 400upx;
				box-shadow: 0 0 2px 0 rgb(188, 188, 188);
			}
		}

		.crile {
			width: 750upx;
			height: 50upx;
			position: absolute;
			left: 0;
			top: 355upx;
			z-index: 9;
		}

		// 新鲜事 活动墙 按钮样式
		.card-header {
			position: absolute;
			left: 0;
			top: 320upx;
			height: 160upx;
			z-index: 99;
			width: 710upx;
			margin-left: 20upx;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			align-content: center;

			.card-one {
				width: 328upx;
				height: 96upx;
				border-radius: 49upx;
				background-color: #fff;
				margin: 0 10upx;
				box-shadow: 0 0 2px 0 rgb(188, 188, 188);
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: flex-start;
				align-items: center;
				align-content: center;

				.img {
					width: 44upx;
					height: 44upx;
					margin-left: 50upx;
				}

				.iright {
					margin-left: 30upx;
					text-align: left;
					color: #888;

					.title {
						font-size: 30upx;
						color: #001432;
					}

					.iview {
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						justify-content: space-between;
						align-items: center;
						align-content: center;
						font-size: 20upx;
						margin-top: -5upx;
					}
				}
			}
		}

		// 推荐、咨询 按钮样式
		.tabs-box {
			width: 750upx;
			position: absolute;
			z-index: 1;
			left: 0;
			top: 480upx;
			display: flex;
			flex-direction: row;
			justify-content: center;

			.one-nav {
				height: 80upx;
				width: 110upx;
				color: #9B9B9B;
				font-size: 36upx;
				text-align: center;
				font-weight: blod;

				&.nav-actived {
					color: #0050FF;
				}
			}
		}
	}

	// 此刻 栏目样式\
	.swiper-box {
		background-color: #f1f1f1;
		padding: 60upx 0 40upx;
	}

	.sns-now {

		// 动态相关瀑布流样式
		.feeds-box {
			width: 735upx;
			margin-left: 13upx;
			padding-bottom: 20upx;

			.feed-one {
				width: 358upx;
				margin-bottom: 12upx;
				background-color: #FFF;
				border-radius: 20upx;

				position: relative;

				.feed-img {
					width: 358upx;
					height: 300upx;
					border-radius: 10upx;
				}

				.feed-title {
					width: 350upx;
					margin-top: 15upx;
					margin-left: 10upx;
					font-size: 28upx;
					line-height: 40upx;
					color: #001432;
					text-align: left;
				}

				.feed-info {
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: space-between;
					align-items: center;
					align-content: center;
					margin-top: 10upx;
					font-size: 20upx;
					color: #666;
					padding: 0 10upx 16upx;

					.iview {
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						justify-content: space-between;
						align-items: center;
						align-content: center;

						.ilike {
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							justify-content: space-between;
							align-items: center;
							align-content: center;
							height: 60upx;
							padding: 0 10upx;
							background-color: #FFFFFF;
						}
					}

					.avatar {
						margin-right: 10upx;
						height: 40upx;
						width: 40upx;
						border-radius: 50%;
						border: 1upx solid #eee;
					}

					.name {
						max-width: 120upx;
						color: #757474;
					}

					.micon {
						width: 32upx;
						height: 28upx;
					}

					.love-count {
						padding-left: 10upx;
						color: #757474;
					}
				}
			}
		}
	}

	// 轮播页面 资讯
	.sns-news {
		background-color: #fff;
		width: 750upx;

		.one-new {
			width: 700upx;
			height: 74px;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: flex-start;
			align-content: center;
			padding-bottom: 10px;
			padding-top: 10px;
			padding-left: 25upx;
			padding-right: 25upx;
			border-bottom: 1px solid #f1f1f1;

			.left {
				width: 490upx;
				height: 140upx;
				text-align: left;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;

				.title {
					font-size: 30upx;
					line-height: 42upx;
					color: #001432;
					margin-top: 21upx;
				}

				.uinfo {
					width: 490upx;
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: space-between;
					align-items: center;
					align-content: center;
					margin-top: 6upx;
					font-size: 20upx;
					color: #999;

					.utime {
						font-size: 24upx;

						.name {
							max-width: 120upx;
							color: #777;
						}
					}
				}
			}

			.right {
				width: 120upx;

				.pic {
					width: 120upx;
					height: 120upx;
					margin-top: 20upx;
					border-radius: 6upx;
				}
			}
		}
	}
</style>
