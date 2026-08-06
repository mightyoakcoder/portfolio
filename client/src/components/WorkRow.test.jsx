import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WorkRow from './WorkRow';

const project = {
  num: '01',
  name: 'Project Nova',
  blurb: 'A distributed job scheduler with at-least-once delivery.',
  href: 'https://github.com/mightyoakcoder/project-nova',
  chips: ['Node.js', 'Postgres', 'Cloud Run'],
  status: 'Live',
  domain: 'github.com',
};

describe('WorkRow', () => {
  it('renders the project name, blurb, and index', () => {
    render(<WorkRow project={project} />);
    expect(screen.getByText('Project Nova')).toBeInTheDocument();
    expect(screen.getByText(project.blurb)).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('links out to the project href in a new tab, safely', () => {
    render(<WorkRow project={project} />);
    const link = screen.getByRole('link', { name: /Project Nova/ });
    expect(link).toHaveAttribute('href', project.href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders one chip per tag', () => {
    render(<WorkRow project={project} />);
    for (const chip of project.chips) {
      expect(screen.getByText(chip)).toBeInTheDocument();
    }
  });

  it('renders the status and domain', () => {
    render(<WorkRow project={project} />);
    expect(screen.getByText('Live')).toBeInTheDocument();
    expect(screen.getByText('github.com')).toBeInTheDocument();
  });
});
