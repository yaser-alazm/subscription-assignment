import {render, screen, cleanup} from '@testing-library/react'
import Todo from '../components/Todo'

afterEach(() => {
  cleanup()
})

test('should be a component', () => {
  render(<Todo />)

  const todoElement = screen.getByTestId('tested-element')
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('Hello')
})
