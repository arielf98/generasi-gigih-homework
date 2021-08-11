/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '../../test.util';
import Home from '.';

test('Text Should display', () => {
  render(<Home />);

  const homeText = screen.getByText(/Selamat Datang Di My Spotify/i);
  const navbarText = screen.getByTestId('text-navbar');
  expect(navbarText).toBeInTheDocument();
  expect(homeText).toBeInTheDocument();
});

test('button should display', async () => {
  render(<Home />);

  const btnCreate = await screen.findByTestId('create-playlist');
  const btnLogin = await screen.findByTestId('login');
  expect(btnCreate).toBeInTheDocument();
  expect(btnLogin).toBeInTheDocument();

  screen.debug();
});
