const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs').promises  // fs 的promise写法
const {createReadStream} = require('fs')
// 用来判断类型的模块
const mime = require('mime')
// ejs 模版
const ejs = require('ejs')
const {promisify} = require('util')

function mergeConfig (config) {
  return{
    port: 1234, 
    // 把当前工作目录设置成默认值
    directory: process.cwd(),
    ...config
  }
}

class Server{
  constructor(config) {
    this.config = mergeConfig(config)
    // console.log(this.config)
  }
  start() {
    let server = http.createServer(this.serveHandle.bind(this))
    server.listen(this.config.port, () => {
      console.log('服务端已经启动了.......')
    })
  }
  async serveHandle(req, res) {
    // 当前url请求的pathname
    let {pathname} = url.parse(req.url)
    pathname = decodeURIComponent(pathname)
    let abspath = path.join(this.config.directory, pathname)
    // console.log(abspath)
    try {
      // 获取路径的详细信息
      let statObj = await fs.stat(abspath)
      if (statObj.isFile()) {
        this.fileHandle(req, res, abspath)
      } else {
        let dirs = await fs.readdir(abspath)
        console.log(dirs);
        dirs = dirs.map((item) => {
          return{
            // pathname加上item就等于目标path
            path: path.join(pathname, item),
            dirs: item
          }
        })
        console.log(dirs);

        // console.log(dirs)
        // // 将 ejs.renderFile 处理成 async... 风格
        let renderFile = promisify(ejs.renderFile)

        // 当前请求路径的dirname返回的符号parentpath
        let parentpath = path.dirname(pathname)
        // console.log(parentpath);
        let ret = await renderFile(path.resolve(__dirname, 'template.html'), {
          arr: dirs,
          // 如果不是跟目录，就会有父级菜单
          parent: pathname == '/' ? false : true,
          // 父级菜单
          parentpath: parentpath,
          title: path.basename(abspath)
        })
        res.end(ret)
      }
    } catch (err) {
      this.errorHandle(req, res, err)
    }
  }
  errorHandle(req, res, err) {
    console.log(err)
    res.statusCode = 404
    res.setHeader('Content-type', 'text/html;charset=utf-8')
    res.end('Not Found')
  }
  fileHandle(req, res, abspath) {
    res.statusCode = 200
    // mimes.getType 给到正确格式
    res.setHeader('Content-type', mime.getType(abspath) + ';charset=utf-8')
    createReadStream(abspath).pipe(res)
  }
}

module.exports = Server