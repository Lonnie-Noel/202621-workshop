import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App.jsx';

describe('App bootstrap placeholder', () => {
  it('renders the placeholder shell', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /orchestration dashboard bootstrap/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/tooling shell is ready for the dashboard implementation/i)
    ).toBeInTheDocument();
  });
});