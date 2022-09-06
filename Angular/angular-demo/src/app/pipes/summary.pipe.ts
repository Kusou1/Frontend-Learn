import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  //Pipe类一定要实现transform这个方法
  transform(value: string, limit?: number): string {
    let res = value.slice(0,limit || 10)+ "..."
    return res;
  }
}
