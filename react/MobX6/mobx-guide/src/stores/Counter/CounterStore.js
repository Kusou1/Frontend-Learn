import { makeAutoObservable } from "mobx"

class CounterStore {
  count = 10
  person = { name: "张三" }
  constructor() {
    // 将参数对象中的属性设置为 observable state
    // 将参数对象中的方法设置为 action
    // target: 将目标对象中的属性和方法设置为 observable state 和 action
    // overrides: 覆盖默认设置, 将 target 对象中的某些属性或者方法设置为普通属性
    // options: 配置对象, autoBind, 使 action 方法始终拥有正确的 this 指向
    makeAutoObservable(this, { reset: true }, { autoBind: true })
  }
  increment() {
    this.count += 1
  }
  reset() {
    this.count = 0
  }
}

export default CounterStore
