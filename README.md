# React Testing

- [React Testing Library Cheat Sheet](./REACT-TESTING-LIBRARY.md)

## Reasons for testing

- **Confidence** - you can be confident that your code is working as expected
- **Refactoring** - you can refactor your code without breaking it
- **Regression** - you can prevent bugs from being introduced when you make changes to your code

## Assertion

- _"Testing is about translating user interactions in code and making the right assertions"_

An assertion is a statement that is either true or false. In testing, we use assertions to check if the code is working as expected.

## AAA (Arrange, Act, Assert)

AAA is a pattern for organizing unit tests. It breaks tests down into three clear and distinct steps:

- **Arrange** - setup the test (render the component, assign variables, etc.)
- **Act** - perform the action (click a button, type in an input, etc.)
- **Assert** - check the result (check if the button is disabled, check if the input has the correct value, etc.)

## Have a test priority

- **Important Features** - test the most important features first
- **Edge Cases** - e.g. empty input, invalid input, etc.
- **Things That Break Easily** - e.g. error handling, etc.
- **User Interactions** - e.g. clicking a button, typing in an input, etc.
- **Conditional Rendering** - e.g. rendering a component if a condition is true, etc.
- **API Calls** - e.g. fetching data from an API, etc.

## Test Driven Development (TDD)

- **TDD** is a development process where you write tests before writing the code
- **TDD** is a way to write code that is easy to test
- **TDD** is a way to write code that is easy to refactor

## Types of tests

- **Unit tests** - test individual functions
- **Integration tests** - test multiple functions
- **End-to-end tests** - test the entire app

### Integration testing vs Unit testing

Integration testing takes into account the user flow

- **User Flow** - the steps a user takes to complete a task (how a user would use an application)

In integration testing, we write tests taking into account how a user would use the application. For Instance by combining multiple unit tests into one

> The philosophy is this: _"Having a few integration tests is better than having a lot of unit tests"_
>
> Note: The two are not mutually exclusive, you generally want to use both in your application

## End to end testing

End to end testing is testing the entire application. It follows the user flow and tests the application from the user's perspective as it moves through the application.

- A good end to end testing tool is [Cypress](https://www.cypress.io/)

## Mocking

**Mocking** is when you replace a function with a fake function. It is useful when you want to test a function in isolation without worrying about the implementation of other functions.

Example:

```js
// mock function
const mockFetch = jest.fn(() => Promise.resolve({ data: {} }))

// mock implementation
jest.mock('axios', () => ({
  get: mockFetch,
}))

// test
test('fetches data', async () => {
  await fetchUsers()
  expect(mockFetch).toHaveBeenCalledTimes(1)
})
```

- jest.fn() - creates a mock function
- jest.mock() - can be used to mock the implementation of a function

> Open the following links side by side to see how mocking is used in a real application
>
> - [Test Example](https://github.com/TheOdinProject/theodinproject/blob/main/app/javascript/components/project-submissions/components/__tests__/submissions-list.test.jsx)
> - [Component Example](https://github.com/TheOdinProject/theodinproject/blob/main/app/javascript/components/project-submissions/components/submissions-list.jsx)
>
> Learn more about mocking in this [Odin Project lesson](https://www.theodinproject.com/lessons/node-path-javascript-react-testing-part-2)

## Resources

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- [user-event](https://testing-library.com/docs/ecosystem-user-event/)
- [React Testing Cheat Sheet](https://testing-library.com/docs/dom-testing-library/cheatsheet/)
- [React Testing Library Priority](https://testing-library.com/docs/queries/about/#priority)
- [Cypress](https://www.cypress.io/)
- [Mocking Tutorial](https://github.com/TheOdinProject/theodinproject/blob/main/app/javascript/components/project-submissions/components/__tests__/submissions-list.test.jsx)
- [Mocking in the real world](https://github.com/TheOdinProject/theodinproject/blob/main/app/javascript/components/project-submissions/components/submissions-list.jsx)
