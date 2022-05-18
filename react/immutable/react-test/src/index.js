import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import App from "./App"
import { fromJS } from "immutable"

const initialState = fromJS({ count: 0 })

function reducer(state = initialState, action) {
  const count = state.get("count")
  switch (action.type) {
    case "increment":
      return state.set("count", count + 1)
    case "decrement":
      return state.set("count", count - 1)
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
