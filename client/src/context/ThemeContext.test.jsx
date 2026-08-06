import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { ThemeProvider, useTheme, themes } from './ThemeContext';

const STORAGE_KEY = 'beckyweeks.theme';

function Probe() {
  const { themeName, setThemeName } = useTheme();
  return (
    <div>
      <span data-testid="theme-name">{themeName}</span>
      <button onClick={() => setThemeName('novella')}>Switch to novella</button>
      <button onClick={() => setThemeName('does-not-exist')}>Switch to bogus</button>
    </div>
  );
}

function renderWithProvider() {
  return render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>
  );
}

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('defaults to amberSurf when localStorage is empty', () => {
    renderWithProvider();
    expect(screen.getByTestId('theme-name')).toHaveTextContent('amberSurf');
  });

  it('reads a previously stored valid theme from localStorage', () => {
    localStorage.setItem(STORAGE_KEY, 'novella');
    renderWithProvider();
    expect(screen.getByTestId('theme-name')).toHaveTextContent('novella');
  });

  it('falls back to amberSurf when localStorage holds an unknown theme name', () => {
    localStorage.setItem(STORAGE_KEY, 'not-a-real-theme');
    renderWithProvider();
    expect(screen.getByTestId('theme-name')).toHaveTextContent('amberSurf');
  });

  it('persists the new theme to localStorage and sets data-theme on <html>', async () => {
    const user = userEvent.setup();
    renderWithProvider();

    await user.click(screen.getByText('Switch to novella'));

    expect(screen.getByTestId('theme-name')).toHaveTextContent('novella');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('novella');
    expect(document.documentElement.getAttribute('data-theme')).toBe('novella');
  });

  it('applies every CSS variable from the active theme onto <html>', async () => {
    const user = userEvent.setup();
    renderWithProvider();

    await user.click(screen.getByText('Switch to novella'));

    const root = document.documentElement;
    for (const [key, value] of Object.entries(themes.novella.vars)) {
      expect(root.style.getPropertyValue(key)).toBe(value);
    }
  });

  it('ignores a switch to a theme name that does not exist', async () => {
    const user = userEvent.setup();
    renderWithProvider();

    await user.click(screen.getByText('Switch to bogus'));

    // themeName state itself updates (it's just a string) but the resolved
    // theme falls back to amberSurf, so <html> should reflect amberSurf's vars.
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--ac')).toBe(themes.amberSurf.vars['--ac']);
  });
});
