import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Click from '../Click'

afterEach(() => {
  cleanup()
})

test('check button click user event', () => {
  render(<Click />)
  const button = screen.getByRole('button', { name: 'Click Me' })
  userEvent.click(button)
  const h1 = screen.getByRole('heading', { level: 1 })
  expect(h1).toHaveTextContent('Ciao, mondo')
})
