import Todo from './components/Todo'
import Click from './components/Click'
import Debug from './components/Debug'

function App() {
  const todos = [
    { id: 1, title: 'wash dishes', completed: false },
    { id: 2, title: 'make dinner', completed: true },
  ]

  return (
    <>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />
      })}
      <Click />
      <Debug />
    </>
  )
}

export default App
