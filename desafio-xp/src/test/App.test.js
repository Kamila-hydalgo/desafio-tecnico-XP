import { render, screen } from '@testing-library/react';
import { Login } from '../App';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});
