import axios from "axios"
import { forkJoin, from } from "rxjs"

// forkJoin 是 Rx 版本的 Promise.all()，即表示等到所有的 Observable 都完成后，才一次性返回值。
axios.interceptors.response.use(response => response.data)

forkJoin({
  goods: from(axios.get("http://localhost:3005/goods")),
  category: from(axios.get("http://localhost:3005/category"))
}).subscribe(console.log)