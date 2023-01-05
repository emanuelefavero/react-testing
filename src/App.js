import { useState } from 'react'
import Todo from './components/Todo'
import Click from './components/Click'
import Debug from './components/Debug'
import UserEventType from './components/UserEventType'
import Count from './components/Count'
import Mocking from './components/Mocking'

function App() {
  const todos = [
    { id: 1, title: 'wash dishes', completed: false },
    { id: 2, title: 'make dinner', completed: true },
  ]

  const [name, setName] = useState('')

  return (
    <>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />
      })}
      <Click />
      <Debug />
      <UserEventType />
      <Count />
      <Mocking name={name} setName={setName} />
    </>
  )
}

export default App
