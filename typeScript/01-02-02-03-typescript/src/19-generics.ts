// 泛型

export {} // 确保跟其它示例没有成员冲突

//泛型指的是定义的时候不去指定具体的类型，调用时再指定具体类型

function createNumberArray (length: number, value: number): number[] {
  const arr = Array<number>(length).fill(value)
  return arr
}

function createStringArray (length: number, value: string): string[] {
  const arr = Array<string>(length).fill(value)
  return arr
}

//让我们定义的时候不能够明确的类型，在我们使用的时候再去定义
function createArray<T> (length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}

// const res = createNumberArray(3, 100)
// res => [100, 100, 100]

const res = createArray<string>(3, 'foo')
