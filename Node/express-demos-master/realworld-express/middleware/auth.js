module.exports = async (req, res, next) => {
  // 检查有没有 Session user
  const sessionUser = req.session.user
  if (sessionUser) {
    return next()
  }

  // 重定向到登录页
  // 302 Location /login
  res.redirect('/login')
}
