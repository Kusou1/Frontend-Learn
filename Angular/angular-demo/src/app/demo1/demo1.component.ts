import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styles: [
  ]
})
export class Demo1Component implements OnInit {

  constructor(public testService: TestService) { }

  ngOnInit(): void {
  }

}
