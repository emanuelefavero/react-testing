import { render, screen, cleanup } from '@testing-library/react'
import Todo from '../Todo'

afterEach(() => {
  cleanup()
})

test('should render non-completed todo', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false }
  render(<Todo todo={todo} />)
  const todoElement = screen.getByTestId('todo-1')
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('wash dishes')

  // - the not keyword is used to invert the matcher
  expect(todoElement).not.toContainHTML('<strike>')
})

test('should render completed todo', () => {
  const todo = { id: 2, title: 'make dinner', completed: true }
  render(<Todo todo={todo} />)
  const todoElement = screen.getByTestId('todo-2')
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('make dinner')

  // Check if a todo element is completed (a todo element is completed if it has a strike tag)
  expect(todoElement).toContainHTML(
    '<div data-testid="todo-2"><strike><h1>make dinner</h1></strike></div>'
  )
})

test('matches snapshot', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false }
  const { component } = render(<Todo todo={todo} />)
  expect(component).toMatchSnapshot()
})
