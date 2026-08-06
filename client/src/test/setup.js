import '@testing-library/jest-dom/vitest';

// jsdom doesn't implement matchMedia. Several components (Reveal) query
// `prefers-reduced-motion` on mount, so every test needs a stub even when
// the test itself doesn't care about motion preferences.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// jsdom doesn't implement IntersectionObserver either (used by Reveal and
// useScrollSpy). Tests that need to trigger intersections replace this with
// their own controllable mock; this global stub just keeps every other test
// from crashing on mount.
if (!window.IntersectionObserver) {
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.IntersectionObserver = MockIntersectionObserver;
}
