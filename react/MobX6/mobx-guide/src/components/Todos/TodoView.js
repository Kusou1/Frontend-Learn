import { useRootStore } from "../../stores/RootStore"
import { observer } from "mobx-react-lite"

function TodoView({ todo }) {
  const { todoListStore } = useRootStore()
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          checked={todo.checked}
          onChange={todo.toggle}
          className="toggle"
          type="checkbox"
        />
        <label>{todo.title}</label>
        <button
          onClick={() => todoListStore.removeTodo(todo.id)}
          className="destroy"
        />
      </div>
      <input className="edit" />
    </li>
  )
}

export default observer(TodoView)
