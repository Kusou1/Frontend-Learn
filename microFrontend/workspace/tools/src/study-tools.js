import { ReplaySubject } from "rxjs";


// utility modules
// 用于放置跨应用共享的 JavaScript 逻辑，它也是独立的应用，需要单独构建单独启动
export function sayHello(who) {
  console.log(`%c${who} sayHello`, "color:skyblue");
}

// 使用RxJs，实现跨应用通信，
// ReplaySubject可以广播历史消息，当我们在react项目中发布一个广播，想在vue中接受这个广播，使用普通的方法的话是接受不到的，所以需要用ReplaySubject
export const sharedSubject = new ReplaySubject();
 