// NgModule: Angular 模块装饰器
import { NgModule, ReflectiveInjector } from '@angular/core'
// BrowserModule 提供了启动和运行浏览器应用所必需的服务
// CommonModule 提供各种服务和指令, 例如 ngIf 和 ngFor, 与平台无关
// BrowserModule 导入了 CommonModule, 又重新导出了 CommonModule, 使其所有指令都可用于导入 BrowserModule 的任何模块
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
// 根组件
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module';
import { DemoComponent } from './demo/demo.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoverDirective } from './directives/hover.directive';
import { SummaryPipe } from './pipes/summary.pipe';
import { PersonComponent } from './component/person/person.component';
import { ChildComponent } from './child/child.component';
import { Demo1Module } from './demo1/demo1.module';
import { FormArrayComponent } from './form-array/form-array.component';
import { ValidatorsComponent } from './validators/validators.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

// 调用 NgModule 装饰器, 告诉 Angular 当前类表示的是 Angular 模块
@NgModule({
    // 声明当前模块拥有哪些组件
    declarations: [AppComponent, DemoComponent, HoverDirective, SummaryPipe, PersonComponent, ChildComponent, FormArrayComponent, ValidatorsComponent, FormBuilderComponent],
    // 声明当前模块依赖了哪些其他模块
    imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule,Demo1Module,FormsModule,ReactiveFormsModule],
    // 声明服务的作用域, 数组中接收服务类, 表示该服务只能在当前模块的组件中使用，声明当前模块拥有那些服务
    providers: [],
    // 可引导组件, Angular 会在引导过程中把它加载到 DOM 中
    bootstrap: [AppComponent]
})
export class AppModule { }

class MailService { }

const injector = ReflectiveInjector.resolveAndCreate([
    {
      provide: "mail", useClass: MailService
    }
  ])

const mailService = injector.get('mail')


console.log(mailService)