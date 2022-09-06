import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: [
  ]
})
export class PersonComponent implements OnInit {

  @Input("name") name: string = ""

  @Input("age") age: any = 0
  constructor() { }

  @Output() sendData = new EventEmitter()
  onClick() {
    this.sendData.emit("我是子组件中的数据")
  }
  ngOnInit(): void {
  }

}
