import { render, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import Reveal from './Reveal';

class MockObserver {
  static instances = [];

  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
    MockObserver.instances.push(this);
  }

  observe(el) {
    this.el = el;
  }

  disconnect() {}

  trigger(isIntersecting) {
    this.callback([{ isIntersecting, target: this.el }]);
  }
}

function mockMatchMedia(matches) {
  window.matchMedia = () => ({
    matches,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
  });
}

describe('Reveal', () => {
  beforeEach(() => {
    MockObserver.instances = [];
    window.IntersectionObserver = MockObserver;
    mockMatchMedia(false);
  });

  afterEach(() => {
    mockMatchMedia(false);
  });

  it('starts hidden (no "in" class) when motion is not reduced', () => {
    const { container } = render(<Reveal>content</Reveal>);
    expect(container.firstChild).toHaveClass('rev');
    expect(container.firstChild).not.toHaveClass('in');
  });

  it('starts visible immediately when the user prefers reduced motion', () => {
    mockMatchMedia(true);
    const { container } = render(<Reveal>content</Reveal>);
    expect(container.firstChild).toHaveClass('rev', 'in');
  });

  it('adds the "in" class once the element intersects the viewport', () => {
    const { container } = render(<Reveal>content</Reveal>);
    expect(container.firstChild).not.toHaveClass('in');

    const observer = MockObserver.instances[0];
    act(() => {
      observer.trigger(true);
    });

    expect(container.firstChild).toHaveClass('in');
  });

  it('does not become visible for a non-intersecting entry', () => {
    const { container } = render(<Reveal>content</Reveal>);
    const observer = MockObserver.instances[0];

    act(() => {
      observer.trigger(false);
    });

    expect(container.firstChild).not.toHaveClass('in');
  });

  it('merges a custom className alongside the reveal classes', () => {
    const { container } = render(<Reveal className="contact-grid">content</Reveal>);
    expect(container.firstChild).toHaveClass('rev', 'contact-grid');
  });
});
