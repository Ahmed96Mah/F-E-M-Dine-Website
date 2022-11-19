import React from 'react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders home page at main route', () => {
  render(<App />, { wrapper: BrowserRouter });
  const homePageHeader = screen.getByText('Exquisite dining since 1989', {
    selector: 'h1',
  });
  expect(homePageHeader).toBeInTheDocument();
});

test('renders booking page at booking route', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent;

  user.click(screen.getAllByText(/Book a table/i)[0]);
  const bookingPageHeader = screen.getByText('Exquisite dining since 1989', {
    selector: 'h1',
  });
  expect(bookingPageHeader).toBeInTheDocument();
});
