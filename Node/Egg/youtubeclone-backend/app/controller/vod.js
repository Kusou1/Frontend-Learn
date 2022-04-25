const Controller = require('egg').Controller

class VodController extends Controller {
  async createUploadVideo () {
    const query = this.ctx.query
    console.log(query)
    this.ctx.validate(
      {
        Title: { type: 'string' },
        FileName: { type: 'string' }
      },
      query
    )

    this.ctx.body = await this.app.vodClient.request('CreateUploadVideo', query, {})
  }

  async refreshUploadVideo () {
    const query = this.ctx.query
    this.ctx.validate(
      {
        VideoId: { type: 'string' }
      },
      query
    )

    this.ctx.body = await this.app.vodClient.request('RefreshUploadVideo', query, {})
  }

  async getVideoPlayAuth () {
    const query = this.ctx.query
    this.ctx.validate(
      {
        VideoId: { type: 'string' }
      },
      query
    )

    this.ctx.body = await this.app.vodClient.request('GetVideoPlayAuth', query, {})
  }
}

module.exports = VodController
