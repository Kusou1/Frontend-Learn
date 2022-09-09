import { of } from "rxjs"


//将参数列表作为数据流返回。
of("a", "b", [], {}, true, 20).subscribe(v => console.log(v))