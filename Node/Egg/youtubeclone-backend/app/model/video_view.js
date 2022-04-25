module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const viewSchema = new Schema({
    user: { // 用户
      type: mongoose.ObjectId,
      ref: 'User',
      required: true
    },
    video: { // 视频
      type: mongoose.ObjectId,
      ref: 'Video',
      required: true
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

  return mongoose.model('View', viewSchema)
}
