import { Component, ElementRef, ViewChild, ViewChildren, AfterViewInit, QueryList } from '@angular/core'

interface List {
    id: Number
    name: String
    age: Number
}
;[]

@Component({
    // 指定组件的使用方式, 当前为标记形式
    // app-home   =>  <app-home></app-home>
    // [app-home] =>  <div app-home></div>
    // .app-home  =>  <div class="app-home"></div>
    selector: 'app-root',
    // 关联组件模板文件
    // templateUrl:'组件模板文件路径'
    // template: `<div>App Works</div>
    //     <app-layout></app-layout>`,
    templateUrl: './app.component.html',
    // 关联组件样式文件
    // styleUrls : ['组件样式文件路径']
    // styles : [`组件样式`]
    styles: [`
      .even{
        background-color:orange
      }
      .odd{
        background-color:skyblue
      }
      `]
})
export class AppComponent implements AfterViewInit {
    title = 'angular-demo'
    message: String = 'Hello Angular'
    htmlString: String = '<h1>htmlString</h1>'
    a = 1
    b = 1
    isActive = true
    onChange(event: Event, btn: HTMLButtonElement) {
        this.isActive = !this.isActive
        console.log(btn)
    }
    onKeyUp(event: Event) {
        console.log(event)
    }
    getInfo() {
        return '我是getInfo方法中返回的内容'
    }

    list: List[] = [
        {
            id: 1,
            name: '芜湖',
            age: 13
        },
        {
            id: 2,
            name: '你好',
            age: 16
        }
    ]
    // 双向数据绑定
    username = ''
    setData() {
        this.username = 'hello angular'
    }
    // 获取一个元素
    @ViewChild('paragraph') paragraph: ElementRef<HTMLParagraphElement> | undefined
    // 获取一组元素
    @ViewChildren('items') items: QueryList<HTMLLIElement> | undefined
    ngAfterViewInit() {
        console.log(this.paragraph?.nativeElement)
        console.log(this.items?.toArray())
    }
    imgUrl = 'https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1643230111752%2Fuv4w72h8g.png%3Fauto%3Dcompress&w=2048&q=75'
}
