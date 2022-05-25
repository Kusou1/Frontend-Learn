const path = require("path")

// 以编程的方式创建页面
// function createPages({ actions }) {
//   // 用于创建页面的方法
//   const { createPage } = actions
//   // 获取模版的绝对路径
//   const template = require.resolve("./src/templates/person.js")
//   // 获取模版所需要的数据
//   const persons = [
//     { id: 0, name: "张三", age: 20 },
//     { id: 1, name: "李四", age: 18 },
//   ]
//   // 根据模版和数据创建页面
//   persons.forEach(person => {
//     createPage({
//       // 模版绝对路径
//       component: template,
//       // 访问地址
//       path: `/person/${person.id}`,
//       // 传递给模版的数据
//       context: person,
//     })
//   })
// }

async function createPages({ graphql, actions }) {
  const { createPage } = actions
  // 获取模版的绝对路径
  const template = require.resolve("./src/templates/article.js")
  // 获取页面访问标识
  let { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug {
              name
            }
          }
        }
      }
    }
  `)
  // 根据模版和数据创建页面
  data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      component: template,
      path: `/article/${node.fields.slug.name}`,
      context:{
          slug: node.fields.slug
      }
    })
  })
}

// 当创建节点node时候执行 GraphQl
function onCreateNode({ node, actions }) {
  // 给节点添加属性
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    // 获取文件名
    console.log(node);
    const slug = path.basename(node.fileAbsolutePath, ".md")
    console.log(slug)
    // 将文件名添加上节点，方便文章详情页使用
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports = {
  createPages,
  onCreateNode,
}
