// 可选成员、只读成员、动态成员

export {} // 确保跟其它示例没有成员冲突

// -------------------------------------------

//添加readonly后在初始化过后就不允许修改了
interface Post {
  title: string
  content: string
  subtitle?: string
  readonly summary: string
}

const hello: Post = {
  title: 'Hello TypeScript',
  content: 'A javascript superset',
  summary: 'A javascript'
}

// hello.summary = 'other'

// ----------------------------------

//动态接口，可添加任意个属性，不过都是string类型的键值
interface Cache {
  [prop: string]: string
}

const cache: Cache = {}

cache.foo = 'value1'
cache.bar = 'value2'