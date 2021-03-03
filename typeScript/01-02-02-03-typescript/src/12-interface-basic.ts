// 接口

export {} // 确保跟其它示例没有成员冲突

//具体的去约束每个对象成员，并约束每个成员的类型

interface Post {
  title: string
  content: string
}

function printPost (post: Post) {
  console.log(post.title)
  console.log(post.content)
}

printPost({
  title: 'Hello TypeScript',
  content: 'A javascript superset'
})