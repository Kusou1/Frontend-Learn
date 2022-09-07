import { Component, ElementRef, ViewChild, ViewChildren, AfterViewInit, QueryList } from '@angular/core'
import { FormControl, FormGroup, NgForm } from '@angular/forms'
import { TestService } from './test.service'

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
      input.ng-touched.ng-invalid {
        border: 2px solid red;
      }
      `]
})
export class AppComponent implements AfterViewInit {
    constructor(private testService: TestService) {

    }
    contactForm: FormGroup = new FormGroup({
        name: new FormControl(),
        phone: new FormControl()
    })
    onSubmit() {
        console.log(this.contactForm.value)
        // console.log(form)
    }
    person = {
        name: 'union',
        age: 20
    }
    changeName() {
        // this.person.name='李四'
        // this.person.age=30
        this.person = {
            name: 'kusou1',
            age: 30
        }
    }
    getData(event: string) {
        alert(event)
    }
    date = new Date()
    money = 323121

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
    paragraphText = `shi pian shi lao jian shi jian shi kao yan
    詩篇是老件 時間是考驗
    wen zi shi dao xian bo dong shi dian nao tu li
    文字是導線 波動是腦電圖裡
    bei jing shi shan shui zi shi pan tui
    背景是山水 姿勢盤腿
    gan shi zan mei qin er duo shi ruan zui chun de
    幹是讚美 親耳朵是軟嘴唇的
    rao she shi jing pin liao cheng shi qing xing
    饒舌是精品 療程是清醒
    jie zou shi ding ning ding ning shi cui mian
    節奏是叮嚀 叮嚀是催眠
    cui mian shi ding ning
    催眠是叮嚀
    
    ling hun de di pin shi na yang de chen
    靈魂的低頻 是那樣的沈
    zhi ru na yang de xiang fa jiu hui cheng wei na yang de ren
    植入那樣的想法 就會成為那樣的人
    zhe li mei you feng rao yan shi na yang song xie
    這裡沒有風 燃煙是那樣鬆懈
    qi wei jiao zuo kong di yun shen hou nong lie
    氣味叫做空 底蘊深厚濃烈
    shu huan de pu chen shi qian zhi
    舒緩的鋪陳是前置
    xian rang qi fen xian shi bie shou rou ti qian zhi
    先讓氣氛閒適 別受肉體箝制
    fang xia jian chi yin yue shi jie zhi
    放下堅持 音樂是介質
    zhun bei chao yue xian shi
    準備超越現實
    bi shang yan zhi hou rang wo men kai shi
    閉上眼之後 讓我們開始
    diao ru
    掉入`
    imgUrl = 'https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1643230111752%2Fuv4w72h8g.png%3Fauto%3Dcompress&w=2048&q=75'
}
