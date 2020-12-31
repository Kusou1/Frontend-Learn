//此文件作为Generator的核心入口
//需要导出一个继承自 Yeoman Generator 的类型
// Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类的一些方法实现一些功能，例如文件写入

const Generator =require('yeoman-generator')

module.exports =class extends Generator {
    writing(){
        //Yeoman 自动在生成文件阶段调用此方法
        //我们这里尝试往项目目录中写入文件
        // this.fs.write(
        //     this.destinationPath('temp.text'),
        //     Math.random().toString()
        // )

        //通过模板方式写入文件到目标目录

        //模板文件路径
        const tmpl=this.templatePath('foo.txt')
        // 输出目标路径
        const output = this.destinationPath('foo.txt')
        //模板数据上下文
        const context={title:'Hello zsh~',success:false}

        this.fs.copyTpl(tmpl,output,context)
    }
}