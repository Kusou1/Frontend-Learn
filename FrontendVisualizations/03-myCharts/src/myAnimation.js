// 公用动画绘制function
export default function myAnimation(param) {
  let current = 0
  let looped
  const ctx = this.ctx
  const _canvas = this._canvas
  const callback = param.render
  const successCb = param.success;
  (function looping() {
    // 浏览器在下次重绘之前调用指定的回调函数更新动画
    looped = requestAnimationFrame(looping)
    // 当前值小于目标值继续去做动画
    if (current < param.percent) {
      // 清空画布
      ctx.clearRect(0, 0, _canvas.width, _canvas.height)
      // 超过时等于param.percent，没超过就做自增
      current = current + 4 > param.percent ? param.percent : current + 4
      callback(current)
    } else {
      window.cancelAnimationFrame(looping)
      looped = null
      successCb && successCb()
    }
  })()
}