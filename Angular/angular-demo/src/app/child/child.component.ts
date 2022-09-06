import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit,AfterContentInit,AfterViewInit,OnChanges {

  // @Input() name : string = ''
  // @Input() age : number = 0
  @Input('person') person = {name:'',age:0}

  @ContentChild("box") box:ElementRef<HTMLDivElement> | undefined
  @ViewChild("p") p:ElementRef<HTMLParagraphElement> | undefined

  constructor(private test: TestService) {
    console.log('constructor')
    console.log(this.test)
    console.log(this.person.name) // constructor拿不到输入属性的
  }

  // 在首次接收到输入属性值后执行，在此处可以执行请求操作。
  ngOnInit(): void {
    console.log('ngOnInit')
    console.log(this.person.name) // ngOnInit可以拿到输入属性的
  }

  //当内容投影初始渲染完成后调用。
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
    console.log(this.box) // ngAfterContentInit可以拿到内容投影
  }

  //当组件视图渲染完成后调用。
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.p)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 存储发送变化的数据
    console.log(changes)
    console.log('ngOnChanges')
  }
}
