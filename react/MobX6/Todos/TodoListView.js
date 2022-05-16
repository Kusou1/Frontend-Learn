import TodoHeader from "./TodoHeader"
import TodoFooter from "./TodoFooter"
import TodoView from "./TodoView"

function TodoListView() {
  return (
    <section className="todoapp">
      <TodoHeader />
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          <TodoView />
        </ul>
      </section>
      <TodoFooter />
    </section>
  )
}

export default TodoListView
