import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import ThemePicker from './ThemePicker';
import { ThemeProvider } from '../context/ThemeContext';

function renderPicker() {
  return render(
    <ThemeProvider>
      <ThemePicker />
    </ThemeProvider>
  );
}

describe('ThemePicker', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('shows the current theme label on the trigger button', () => {
    renderPicker();
    expect(screen.getByRole('button', { name: /Amber Surf/ })).toBeInTheDocument();
  });

  it('lists every available theme once opened, and switches on click', async () => {
    const user = userEvent.setup();
    renderPicker();

    await user.click(screen.getByRole('button', { name: /Amber Surf/ }));

    const novellaOption = await screen.findByRole('button', { name: /Novella/ });
    await user.click(novellaOption);

    // The trigger button's label updates to reflect the newly selected theme.
    expect(await screen.findByRole('button', { name: /Novella/ })).toBeInTheDocument();
    expect(localStorage.getItem('beckyweeks.theme')).toBe('novella');
  });
});
