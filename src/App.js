import { useState } from 'react'
import Todo from './components/Todo'
import Click from './components/Click'
import Debug from './components/Debug'
import UserEventType from './components/UserEventType'
import Count from './components/Count'
import Mocking from './components/Mocking'
import MockMyChild from './components/MockMyChild'
import MockAFunction from './components/MockAFunction'

function App() {
  const todos = [
    { id: 1, title: 'wash dishes', completed: false },
    { id: 2, title: 'make dinner', completed: true },
  ]

  const [name, setName] = useState('')

  // A noop, short for no operation, is a function that does nothing
  const noop = () => {}

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
      <MockMyChild />
      <MockAFunction functionToMock={noop} />
    </>
  )
}

export default App
