import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Count from '../Count'

afterEach(() => {
  cleanup()
})

// INTEGRATION TESTING (MANY UNIT TESTS IN ONE)
test('increment count and then reset', () => {
  // ARRANGE
  render(<Count />)
  const count = screen.getByRole('heading', {
    name: /0/i,
  })
  const incrementButton = screen.getByRole('button', { name: 'Increment' })
  const resetButton = screen.getByRole('button', { name: 'Reset' })

  // ASSERT
  // Check if count is 0 on page load
  expect(count).toHaveTextContent('0')

  // ACT
  // Click increment button 3 times
  userEvent.click(incrementButton)
  userEvent.click(incrementButton)
  userEvent.click(incrementButton)

  // ASSERT
  // Check if count is 3 after 3 clicks
  expect(count).toHaveTextContent('3')

  // ACT
  // Click reset button
  userEvent.click(resetButton)

  // ASSERT
  // Check if count is 0 after reset
  expect(count).toHaveTextContent('0')
})
