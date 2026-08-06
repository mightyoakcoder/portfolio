import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import TopNav from './TopNav';
import { ThemeProvider } from '../context/ThemeContext';

function renderNav(active) {
  return render(
    <ThemeProvider>
      <TopNav active={active} />
    </ThemeProvider>
  );
}

describe('TopNav', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders a link for each nav section, pointing at its anchor', () => {
    renderNav('s2');

    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#s2');
    expect(screen.getByRole('link', { name: 'Approach' })).toHaveAttribute('href', '#s3');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#s4');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#s5');
  });

  it('marks only the currently active section link with data-active', () => {
    renderNav('s3');

    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('data-active', 'false');
    expect(screen.getByRole('link', { name: 'Approach' })).toHaveAttribute('data-active', 'true');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('data-active', 'false');
  });

  it('links to the resume in a new tab, safely', () => {
    renderNav('s2');
    const resume = screen.getByRole('link', { name: /Résumé/ });
    expect(resume).toHaveAttribute('target', '_blank');
    expect(resume).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
