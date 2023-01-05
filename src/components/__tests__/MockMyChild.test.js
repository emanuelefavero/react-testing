import { render, screen } from '@testing-library/react'
import MockMyChild from '../MockMyChild'

// Mocking a component
jest.mock('../ChildComponent', () => ({ mockChildComponentId }) => (
  <div data-testid='mockChildComponentId' />
))

test('render the mock child component', () => {
  // Here MockMyChild is the Parent Component
  render(<MockMyChild />)
  const mockChildComponent = screen.getByTestId('mockChildComponentId')
  expect(mockChildComponent).toBeInTheDocument()
})
