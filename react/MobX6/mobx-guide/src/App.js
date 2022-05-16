import Counter from "./components/Counter/Counter"
import TodoListView from "./components/Todos/TodoListView"
import { RootStore, RootStoreProvider } from "./stores/RootStore"

const rootStore = new RootStore()

function App() {
  return (
    <RootStoreProvider store={rootStore}>
      <TodoListView />
      <Counter />
    </RootStoreProvider>
  )
}

export default App
