# React Testing

This is a cheat sheet repo for how to test React components using Jest and React testing library

> Note: [Create React App](https://create-react-app.dev/) comes with Jest and React testing library pre-installed

#### Libraries used

- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`

## Running the tests

To run the tests, run the following command

```bash
npm test
```

## Testing React components

To test components, you can put both the components and tests in the `components` folder or create a `__tests__` folder just for the tests

```bash
src
├── components
│   ├── Component.js
│   └── Component.test.js
├── App.js
└── App.test.js
```

OR

```bash
src
├── components
│   ├── Component.js
│   ├── __tests__
│      └── Component.test.js
├── App.js
└── App.test.js
```

## Quick test

- Component.test.js

```js
test('quick test', () => expect(true).toBe(true))
```

> Note: this just tests if the test runner is working

## Testing a component

- Component.js

```js
function Todo() {
  return <div data-testid='todo-1'>Hi</div>
}

export default Todo
```

- Component.test.js

```js
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders todo component', () => {
  render(<Todo />)
  const todoElement = screen.getByTestId('todo-1')
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('Hi')
})
```

> Note: The `render` function renders the component and returns a bunch of methods to query the component.
>
> The `screen` object is a special object which has all the methods from the `render` function
>
> `expect` is used to make assertions (check if the component is rendered or not)
>
> Note: You can `console.log` in the test to see what the component looks like

## Snapshot

A snapshot is a file that stores the HTML output of a component. When you run the test, the snapshot is created if it doesn't already exist. If the snapshot already exists, the test compares the HTML output of the component to that snapshot. If the HTML output has changed, the test fails.

_You can update the snapshot by running the test with the `-u` flag, like this: `npm test -u` or simply clicking `u` while the test is running_

> Snapshots don’t let unexpected changes creep into our code

- `expect(component).toMatchSnapshot()` - checks if the given component matches the snapshot

- when you want to change the snapshot, click `u` in the terminal while the test is running

### Snapshot Example

- Component.js

```js
function Todo() {
  return <div data-testid='todo-1'>Hi</div>
}
export default Todo
```

- Component.test.js

```js
import { render } from '@testing-library/react'
import Todo from './Todo'

test('renders todo component', () => {
  const { component } = render(<Todo />)
  expect(component).toMatchSnapshot()
})
```

## Testing methods

- `debug()` - prints the HTML output of the component to the console

- `getByTestId` - returns the element that has the given `data-testid` attribute (e.g. `<div data-testid='hello'></div>`)

> Note: You should only use this if you can't find the element using other methods

- `getByText` - returns the element that has the given text

> Note: You can use regular expressions to match the text (e.g. `getByText(/hello/i)`)

- `getByPlaceholderText` - returns the element that has the given placeholder text

- `getByAltText` - returns the element that has the given alt text

- `getByTitle` - returns the element that has the given title text (e.g. `<button title='hello'></button>`)

- `getByDisplayValue` - returns the element that has the given value (e.g. `<input value='hello'></input>`)

- `getByRole` - returns the element that has the given role (e.g. `<button role='submit'></button>`)

> if you call getByRole('') without any arguments, it will raise an error but also return a list of all the roles in your rendered component
> You can use screen.getByRole('heading') to get an h1, h2, h3, etc. element
> You can use screen.getByRole('heading').textContent to get the text of the heading
> You can use screen.getByRole('button') to get a button element
> You can assign a name to a button using aria-label (e.g. `<button aria-label='hello'></button>`). If you don't assign a name, the button will be named after the text inside it (e.g. `<button>hello</button>`)

- `getAllByTestId`, `getAllByText`, `getAllByPlaceholderText`, `getAllByAltText`, `getAllByTitle`, `getAllByDisplayValue`, `getAllByRole` - returns an array of elements that match the given query

> Note: You can use `queryByTestId`, `queryByText`, `queryByPlaceholderText`, `queryByAltText`, `queryByTitle`, `queryByDisplayValue`, `queryByRole` to return `null` if the element is not found
>
> You can use `findByTestId`, `findByText`, `findByPlaceholderText`, `findByAltText`, `findByTitle`, `findByDisplayValue`, `findByRole` to return a promise that resolves when the element is found

## Expect

- `expect(element).toBeInTheDocument()` - checks if the given element is in the document
- `expect(element).toBeVisible()` - checks if the given element is visible
- `expect(element).toBeDisabled()` - checks if the given element is disabled
- `expect(element).toBeEmpty()` - checks if the given element is empty
- `expect(element).toBeEmptyDOMElement()` - checks if the given element is an empty DOM element
- `expect(element).toBeInvalid()` - checks if the given element is invalid
- `expect(element).toBeRequired()` - checks if the given element is required
- `expect(element).toBeValid()` - checks if the given element is valid
- `expect(element).toContainElement(element)` - checks if the given element contains the given element
- `expect(element).toContainHTML(html)` - checks if the given element contains the given HTML
- `expect(element).toHaveAttribute(attribute, value)` - checks if the given element has the given attribute with the given value
- `expect(element).toHaveClass(className)` - checks if the given element has the given class
- `expect(element).toHaveFocus()` - checks if the given element has focus
- `expect(element).toHaveFormValues(values)` - checks if the given element has the given form values
- `expect(element).toHaveStyle(style)` - checks if the given element has the given style
- `expect(element).toHaveTextContent(text)` - checks if the given element has the given text content
- `expect(element).toHaveValue(value)` - checks if the given element has the given value
- `expect(element).toMatchInlineSnapshot()` - checks if the given element matches the inline snapshot
- `expect(element).toMatchSnapshot()` - checks if the given element matches the snapshot

> Note: You can also use `not` to reverse the assertion (e.g. `expect(element).not.toBeInTheDocument()`)

## Testing events

- `userEvent.click(element)` - simulates a click event on the given element
- `userEvent.dblClick(element)` - simulates a double click event on the given element
- `userEvent.type(element, text)` - simulates typing the given text on the given element
- `userEvent.clear(element)` - simulates clearing the given element
- `userEvent.selectOptions(element, values)` - simulates selecting the given values on the given element
- `userEvent.tab()` - simulates pressing the tab key
- `userEvent.hover(element)` - simulates hovering over the given element
- `userEvent.unhover(element)` - simulates unhovering over the given element
- `userEvent.upload(element, fileOrFiles)` - simulates uploading the given file or files on the given element

#### userEvent example

```js
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('userEvent example', () => {
  render(<input data-testid='input' />)
  const input = screen.getByTestId('input')
  userEvent.type(input, 'hello')
  expect(input.value).toBe('hello')
})
```

> Note: You can also use `fireEvent` to simulate events.
> `user-event` provides more realistic browser interactions than `fireEvent`

## Testing async code

- `waitFor` - waits for the given callback to return a truthy value

```js
test('waits for callback to return truthy value', async () => {
  let value = false
  setTimeout(() => {
    value = true
  }, 1000)
  await waitFor(() => expect(value).toBe(true))
})
```

- `waitForElementToBeRemoved` - waits for the given element to be removed from the DOM

```js
test('waits for element to be removed', async () => {
  render(<div data-testid='hello'>Hello</div>)
  const helloElement = screen.getByTestId('hello')
  expect(helloElement).toBeInTheDocument()
  setTimeout(() => {
    helloElement.remove()
  }, 1000)
  await waitForElementToBeRemoved(() => screen.getByTestId('hello'))
})
```

- `waitForElement` - waits for the given element to be added to the DOM

- `waitForDomChange` - waits for the DOM to change

### Fix load weird behavior with async await

Sometimes something weird can happen on page load, such as a button that is enabled on page load for a split second but then disabled immediately after. In this case you should use `async` await in your test.

- await for a button to be disabled

```js
test('button is disabled', async () => {
  render(<Todo />
  expect(await screen.findByRole('button')).toBeDisabled()
})
```

> Note: We used `.findByRole('button')` instead of `.getByRole('button')` because `.findByRole('button')` is async

## Cleanup

- `cleanup` - cleans up the DOM after each test

```js
afterEach(() => {
  cleanup()
})
```

## Resources

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- [user-event](https://testing-library.com/docs/ecosystem-user-event/)
- [React Testing Cheat Sheet](https://testing-library.com/docs/dom-testing-library/cheatsheet/)
