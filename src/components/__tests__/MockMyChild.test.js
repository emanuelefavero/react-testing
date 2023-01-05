import { render, screen } from '@testing-library/react'
import MockMyChild from '../MockMyChild'

// Mocking a component
jest.mock('../ChildComponent', () => {
  const MockChildComponent = () => (
    <div data-testid='mock-child-component'></div>
  )
  return MockChildComponent
})

test('render the mock child component', () => {
  // Here MockMyChild is the Parent Component
  render(<MockMyChild />)
  const mockChildComponent = screen.getByTestId('mock-child-component')
  expect(mockChildComponent).toBeInTheDocument()
})
