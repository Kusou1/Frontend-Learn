import { useSelector, useDispatch } from "react-redux"

function App() {
  const count = useSelector(state => state.get("count"))
  const dispatch = useDispatch()
  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </div>
  )
}

export default App
