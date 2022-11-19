import React from 'react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Booking from '../pages/Booking';

test('renders home page at main route', () => {
  render(<Booking />, { wrapper: BrowserRouter });
  const homePageHeader = screen.getByText('Reservations', {
    selector: 'h1',
  });
  expect(homePageHeader).toBeInTheDocument();
});
