import { makeObservable, observable, action } from "mobx"

class TodoStore {
  id = Math.random()
  title = ""
  completed = false
  constructor(title) {
    this.title = title
    makeObservable(this, {
      completed: observable,
      toggle: action.bound
    })
  }
  toggle() {
    this.completed = !this.completed
  }
}
export default TodoStore
