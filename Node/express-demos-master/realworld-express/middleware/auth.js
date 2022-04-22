module.exports = async (req, res, next) => {
  // 检查有没有 Session user
  const sessionUser = req.session.user
  if (sessionUser) {
    return next()
  }

  // 未登陆的时候，重定向到登录页
  // 302 Location /login
  res.redirect('/login')
}
