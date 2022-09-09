import { range, interval, timer } from "rxjs"
import { take, takeWhile, takeUntil } from "rxjs/operators"


//**take**：获取数据流中的前几个
range(1, 10).pipe(take(5)).subscribe(console.log)


//**takeWhile：**根据条件从数据源前面开始获取。

range(1, 10)
    .pipe(takeWhile(n => n < 8))
    .subscribe(console.log)


//  ** takeUntil：** 接收可观察对象，当可观察对象发出值时，终止主数据源。
interval(100)
    .pipe(takeUntil(timer(2000)))
    .subscribe(console.log)
    // 结果少两个数据流的原因：第一次和最后一次，都需要延迟 100 毫秒。