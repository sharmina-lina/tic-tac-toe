import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tic Tac Toe heading', async () => {
  render(<App />);
  const headingElement = await screen.findByText(/tic tac toe/i);
  expect(headingElement).toBeInTheDocument();
});


