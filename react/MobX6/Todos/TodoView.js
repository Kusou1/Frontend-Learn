function TodoView() {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>Hello MobX</label>
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li>
  )
}

export default TodoView
