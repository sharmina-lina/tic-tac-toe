import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  screen.debug();
  const linkElement = screen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
