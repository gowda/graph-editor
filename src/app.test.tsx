import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './app';

describe('App', () => {
  it('"Sign out" button shows up on clicking "Authorize" button', () => {
    render(<App />);
    expect(screen.getByText('Authorize')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Authorize'));

    return waitFor(() => screen.getByText('Sign out'));
  });

  it('"Authorize" button shows up on clicking "Sign out" button', async () => {
    render(<App />);
    expect(screen.getByText('Authorize')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Authorize'));
    await waitFor(() => screen.getByText('Sign out'));
    fireEvent.click(screen.getByText('Sign out'));

    return waitFor(() => screen.getByText('Authorize'));
  });
});
