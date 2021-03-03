// @flow
//yarn babel src -d dist  babel插件命令，参数，文件所在目录，文件生成目录
//yarn flow-remove-types src -d dist   flow官方插件flow-remove-types，移除类型注解命令，参数，文件所在目录，文件生成目录

//flow 开发工具插件Flow Language Support，更直观的显示问题
function sum (a: number, b: number) {
  return a + b
}

sum(100, 100)

// sum('100', '100')

// sum('100', 100)
