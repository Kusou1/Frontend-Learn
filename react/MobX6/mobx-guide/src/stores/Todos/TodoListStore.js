import TodoStore from "./TodoStore"
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction
} from "mobx"

import axios from "axios"

class TodoListStore {
  todos = []
  filter = "all"
  constructor(todos) {
    if (todos) this.todos = todos
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      removeTodo: action,
      unCompletedTodoCount: computed,
      filter: observable,
      changeFilter: action,
      filterTodos: computed
    })
    this.loadTodos()
  }
  get unCompletedTodoCount() {
    return this.todos.filter(todo => !todo.completed).length
  }
  get filterTodos() {
    switch (this.filter) {
      case "all":
        return this.todos
      case "active":
        return this.todos.filter(todo => !todo.completed)
      case "completed":
        return this.todos.filter(todo => todo.completed)
      default:
        return this.todos
    }
  }
  changeFilter(filter) {
    this.filter = filter
  }
  createTodo(title) {
    this.todos.push(new TodoStore(title))
  }
  removeTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos.splice(index, 1)
  }
  async loadTodos() {
    let todos = await axios
      .get("http://localhost:3005/todos")
      .then(response => response.data)
    runInAction(() => {
      todos.forEach(todo => {
        this.todos.push(new TodoStore(todo.title))
      })
    })
  }
}

export default TodoListStore
