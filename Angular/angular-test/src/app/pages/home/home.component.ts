import { Component, ElementRef, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

interface List {
  id :number
  name:string
  age:number
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})


export class HomeComponent implements OnInit {

  constructor() { }
  // 获取Dom对象
  @ViewChild("paragraph") paragraph:ElementRef<HTMLParagraphElement> | undefined
  // 获取一组元素
  @ViewChildren("items") items: QueryList<HTMLLIElement> | undefined

  ngAfterViewInit(){
    console.log(this.paragraph?.nativeElement);
    console.log(this.items?.toArray())
  }

  list: List[] = [
    { id: 1, name: "张三", age: 20 },
    { id: 2, name: "李四", age: 30 }
  ]
  
  date = new Date()
  

  title ="一套框架 多种平台 移动端 & 桌面端"
  isActive=true
  onClick(event:Event){
    console.log(this.title); 
  }
  onKeyUp(username:string){
    console.log(username)
  }
  ngOnInit(): void {
  }

  money="12.00"

}
