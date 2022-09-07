import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './demo1.component';



@NgModule({
  declarations: [
    Demo1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[Demo1Component]
})
export class Demo1Module { }
