/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

import SideBar from '.';
import { render, screen } from '../../test.util';

test('text should display', () => {
  render(<SideBar />);

  const text = screen.getByText(/my album/i);
  expect(text).toBeInTheDocument();
});
