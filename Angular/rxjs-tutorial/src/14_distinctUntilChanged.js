import { of } from "rxjs"
import { distinctUntilChanged } from "rxjs/operators"

//检测数据源当前发出的数据流是否和上次发出的相同，如相同，跳过，不相同，发出。
of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
  .pipe(distinctUntilChanged())
  .subscribe(x => console.log(x)) // 1, 2, 1, 2, 3, 4