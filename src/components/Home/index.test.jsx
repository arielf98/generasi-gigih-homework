/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '../../test.util';
import Home from '.';

test('Text Should display', () => {
  render(<Home />);

  const homeText = screen.getByText(/Selamat Datang Di My Album/i);
  expect(homeText).toBeInTheDocument();
});

test('button should display', () => {
  render(<Home />);

  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
});
