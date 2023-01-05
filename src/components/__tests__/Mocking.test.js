import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Mocking from '../Mocking'

// MOCKING
// Mocking is a way to test a component in isolation by "mocking" the functions that it uses as props.

describe('Mocking', () => {
  it('calls setName correct number of times', () => {
    const setName = jest.fn()
    render(<Mocking setName={setName} />)
    const input = screen.getByRole('textbox', {
      name: /name:/i,
    })

    userEvent.type(input, 'john')

    expect(setName).toHaveBeenCalledTimes(4)
  })

  it('calls setName with correct arguments(s) on each input', () => {
    const setName = jest.fn()
    render(<Mocking setName={setName} />)
    const input = screen.getByRole('textbox', {
      name: /name:/i,
    })

    userEvent.type(input, 'john')

    expect(setName).toHaveBeenNthCalledWith(1, 'j')
    expect(setName).toHaveBeenNthCalledWith(2, 'jo')
    expect(setName).toHaveBeenNthCalledWith(3, 'joh')
    expect(setName).toHaveBeenNthCalledWith(4, 'john')
  })

  it('input has correct values', () => {
    const setName = jest.fn()
    render(<Mocking setName={setName} />)
    const input = screen.getByRole('textbox', {
      name: /name:/i,
    })

    userEvent.type(input, 'john')

    expect(input).toHaveValue('john')
  })
})
