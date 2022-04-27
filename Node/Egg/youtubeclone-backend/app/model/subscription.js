module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const subscriptionSchema = new Schema({
    user: { // 订阅用户的id
      type: mongoose.ObjectId,
      ref: 'User',
      required: true
    },
    channel: { // 订阅频道的id
      type: mongoose.ObjectId,
      ref: 'User',
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

  return mongoose.model('Subscription', subscriptionSchema)
}
