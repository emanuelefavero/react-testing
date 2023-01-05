import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import MockAFunction from '../MockAFunction'

const mockedFunction = jest.fn(() => {
  console.log('mocked function called')
})

test('check if mockedFunction has been called', () => {
  render(<MockAFunction functionToMock={mockedFunction} />)
  const button = screen.getByRole('button', { name: /click/i })
  userEvent.click(button)
  userEvent.click(button)
  expect(mockedFunction).toHaveBeenCalledTimes(2)
})
