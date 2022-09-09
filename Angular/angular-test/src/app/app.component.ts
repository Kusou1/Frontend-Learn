import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from "@angular/animations"
import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  // 指定组件的使用方式, 当前为标记形式
  // app-home   =>  <app-home></app-home>
  // [app-home] =>  <div app-home></div>
  // .app-home  =>  <div class="app-home"></div>
  selector: "app-root",
  // 关联组件模板文件
  // templateUrl:'组件模板文件路径'
  // template:`组件模板字符串`
  templateUrl: "./app.component.html",
  // 关联组件样式文件
  // styleUrls : ['组件样式文件路径']
  // styles : [`组件样式`]
  styles: [],
  animations: [
    trigger("routerAnimation", [
      transition("one => two, one => three, two => three", [
        query(":enter", style({ transform: "translateX(100%)", opacity: 0 })),
        group([
          query(
            ":enter",
            animate(
              "0.4s ease-in",
              style({ transform: "translateX(0)", opacity: 1 })
            )
          ),
          query(
            ":leave",
            animate(
              "0.4s ease-out",
              style({ transform: "translateX(-100%)", opacity: 0 })
            )
          )
        ])
      ]),
      transition("three => two, three => one, two => one", [
        query(
          ":enter",
          style({ transform: "translateX(-100%)", opacity: 0 })
        ),
        group([
          query(
            ":enter",
            animate(
              "0.4s ease-in",
              style({ transform: "translateX(0)", opacity: 1 })
            )
          ),
          query(
            ":leave",
            animate(
              "0.4s ease-out",
              style({ transform: "translateX(100%)", opacity: 0 })
            )
          )
        ])
      ])
    ])
  ]
})
export class AppComponent {
  // name:string = ""
  // change(){
  //   this.name="change"
  // }
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    let params = new HttpParams(
      {
        // fromObject: { name: "张三", age: "21" }
        fromString:"name=zhangsan&age=30"
      }
    )
    params.append('sex',"male")
    this.getUsers(params).subscribe(console.log)
  }
  getUsers(params: HttpParams) {
    return this.http.get("https://jsonplaceholder.typicode.com/users", {
      params: params
    })
  }
  prepare(outlet: RouterOutlet) {
    if (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animation
    ) {
      return outlet.activatedRouteData.animation
    }
  }
}
