import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserEventType from '../UserEventType'

test('check if button is disabled on page load', () => {
  render(<UserEventType />)
  const button = screen.getByRole('button', { name: 'Register' })
  expect(button).toBeDisabled()
})

test('check if button is enabled when user types input', () => {
  // ARRANGE - render the component, get the input and button
  render(<UserEventType />)
  const input = screen.getByPlaceholderText(/username/i)
  const button = screen.getByRole('button', { name: /register/i })

  // ACT - type into the input
  userEvent.type(input, 'any text')

  // ASSERT - check if button is enabled
  expect(button).toBeEnabled()
})
