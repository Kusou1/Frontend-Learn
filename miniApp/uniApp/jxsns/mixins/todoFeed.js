let feedMixin = {
	methods: {
		// 点赞或者取消点赞一条动态
		async clickLove(item) {
			// 判断当前登录状态
			if (!this.loginState) {
				this.$refs.login.openLogin()
				return
			}
			// 动态点赞
			if (item.has_like) {
				--item.like_count;
				item.has_like = false;
				await this.$u.api.unlikeThisFeed({
					id: item.id,
				});
				uni.showToast({
					title: "取消点赞",
					icon: "success",
					duration: 1000,
				});
			} else {
				++item.like_count;
				item.has_like = true;
				await this.$u.api.likeThisFeed({
					id: item.id,
				});
				uni.showToast({
					title: "点赞成功",
					icon: "success",
					duration: 1000,
				});
			}
			uni.$emit('indexFeedLoveChange',item)
			uni.$emit('myFeedLoveChange',item)
		}
	}
}
export default feedMixin
