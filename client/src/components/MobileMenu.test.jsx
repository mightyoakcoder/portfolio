import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import MobileMenu from './MobileMenu';
import { ThemeProvider } from '../context/ThemeContext';

function renderMenu(open, onClose = () => {}) {
  return render(
    <ThemeProvider>
      <MobileMenu open={open} onClose={onClose} />
    </ThemeProvider>
  );
}

describe('MobileMenu', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders nothing when closed', () => {
    renderMenu(false);
    expect(screen.queryByRole('link', { name: 'Work' })).not.toBeInTheDocument();
  });

  it('lists every nav section as a link with the right href, when open', () => {
    renderMenu(true);

    expect(screen.getByRole('link', { name: /Home/ })).toHaveAttribute('href', '#s1');
    expect(screen.getByRole('link', { name: /Work/ })).toHaveAttribute('href', '#s2');
    expect(screen.getByRole('link', { name: /Approach/ })).toHaveAttribute('href', '#s3');
    expect(screen.getByRole('link', { name: /About/ })).toHaveAttribute('href', '#s4');
    expect(screen.getByRole('link', { name: /Contact/ })).toHaveAttribute('href', '#s5');
  });

  it('calls onClose when a nav link is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    renderMenu(true, onClose);

    await user.click(screen.getByRole('link', { name: /Work/ }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not render theme options — that lives in the compact ThemePicker instead', () => {
    renderMenu(true);

    expect(screen.queryByText(/Novella/)).not.toBeInTheDocument();
    expect(screen.queryByText('Theme')).not.toBeInTheDocument();
  });
});
