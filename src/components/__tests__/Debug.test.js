import { render, screen } from '@testing-library/react'
import Debug from '../Debug'

test('just print all the html in the Debug component', () => {
  render(<Debug />)
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug()

  // screen.getByRole('')
})
