import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App.jsx';

describe('App dashboard smoke test', () => {
  it('renders the four dashboard panels', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /agent cards/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /task status list/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /log memo panel/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /model strategy checklist/i })).toBeInTheDocument();
    expect(screen.getByText('Unassigned')).toBeInTheDocument();
  });
});
