import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './Contact';

describe('Contact section', () => {
  it('links the email address as a mailto link', () => {
    render(<Contact />);
    const emailLink = screen.getByRole('link', { name: /beckyweeks721@gmail.com/ });
    expect(emailLink).toHaveAttribute('href', 'mailto:beckyweeks721@gmail.com');
  });

  it('links out to LinkedIn and GitHub safely in a new tab', () => {
    render(<Contact />);

    const linkedin = screen.getByRole('link', { name: 'LinkedIn' });
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/beckyweeks14');
    expect(linkedin).toHaveAttribute('target', '_blank');
    expect(linkedin).toHaveAttribute('rel', 'noopener noreferrer');

    const github = screen.getByRole('link', { name: 'GitHub' });
    expect(github).toHaveAttribute('href', 'https://github.com/mightyoakcoder');
    expect(github).toHaveAttribute('target', '_blank');
    expect(github).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the footer signature', () => {
    render(<Contact />);
    expect(screen.getByText('Becky Weeks · beckyweeks.dev')).toBeInTheDocument();
  });
});
