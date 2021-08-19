/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import Navbar from '.';
import { render, screen } from '../../test.util';

test('search bar should display', () => {
  render(<Navbar />);

  const seacrhBar = screen.getByPlaceholderText(/search/i);
  expect(seacrhBar).toBeInTheDocument();
});

test('image should display', () => {
  render(<Navbar />);

  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
});
