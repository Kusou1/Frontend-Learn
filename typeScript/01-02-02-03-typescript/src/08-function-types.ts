// 函数类型

export {} // 确保跟其它示例没有成员冲突

//参数后添加？ 可使参数变成可选参数
//使用rest操作符...可使用任意个数参数
function func1 (a: number, b: number = 10, ...rest: number[]): string {
  return 'func1'
}

func1(100, 200)

func1(100)

func1(100, 200, 300)

// -----------------------------------------

const func2: (a: number, b: number) => string = function (a: number, b: number): string {
  return 'func2'
}
