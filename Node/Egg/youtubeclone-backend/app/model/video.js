module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const videoSchema = new Schema({
    title: { // 视频标题
      type: String,
      required: true
    },
    description: { // 视频介绍
      type: String,
      required: true
    },
    vodVideoId: { // VOD 视频 ID
      type: String,
      required: true
    },
    cover: { // 视频封面
      type: String,
      required: true
    },
    user: {
      type: mongoose.ObjectId, // 视频作者
      required: true,
      ref: 'User'
    },
    commentsCount: { // 评论数量
      type: Number,
      default: 0
    },
    dislikesCount: { // 不喜欢数量
      type: Number,
      default: 0
    },
    likesCount: { // 喜欢数量
      type: Number,
      default: 0
    },
    viewsCount: { // 观看次数
      type: Number,
      default: 0
    },
    createdAt: { // 创建时间
      type: Date,
      default: Date.now
    },
    updatedAt: { // 更新时间
      type: Date,
      default: Date.now
    }
  })

  return mongoose.model('Video', videoSchema)
}
