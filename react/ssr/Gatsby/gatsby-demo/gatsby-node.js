// 以编程的方式创建页面
function createPages({actions}){
    // 用于创建页面的方法
    const {createPage} = actions
    // 获取模版的绝对路径
    const template = require.resolve("./src/templates/person.js")
    // 获取模版所需要的数据
    const persons = [{id:0,name: "张三", age: 20},{id:1,name:"李四",age:18}]
    // 根据模版和数据创建页面
    persons.forEach(person => {
        createPage({
            // 模版绝对路径
            component: template,
            // 访问地址
            path:`/person/${person.id}`,
            // 传递给模版的数据
            context: person
        })
    })

}

module.exports = {
    createPages
}