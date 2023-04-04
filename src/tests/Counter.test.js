// import necessary react testing library helpers here
import React from 'react'
import { getByTestId, render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
  const message = screen.getByRole('heading');
  expect(message).toHaveTextContent('Counter');

});

test('should render initial count with value of 0', () => {
  const val = screen.queryByTestId('count');
  expect(val).toHaveTextContent(0);

});

  test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'));
  const val = screen.queryByTestId('count');
  expect(val).toHaveTextContent(1);
  
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'));
  const val = screen.queryByTestId('count');
  expect(val).toHaveTextContent(-1);

});
