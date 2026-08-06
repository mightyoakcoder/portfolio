import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useScrollSpy } from './useScrollSpy';

// The real IntersectionObserver in jsdom (stubbed globally in test/setup.js)
// never fires. To test the scroll-spy logic itself we need a fake that lets
// the test decide when a section "intersects" and inspect what got observed.
class MockObserver {
  static instances = [];

  constructor(callback) {
    this.callback = callback;
    this.observed = [];
    MockObserver.instances.push(this);
  }

  observe(el) {
    this.observed.push(el);
  }

  unobserve(el) {
    this.observed = this.observed.filter((o) => o !== el);
  }

  disconnect() {
    this.observed = [];
  }

  trigger(entries) {
    this.callback(entries);
  }
}

function makeSection(id) {
  const el = document.createElement('div');
  el.id = id;
  document.body.appendChild(el);
  return el;
}

beforeEach(() => {
  MockObserver.instances = [];
  window.IntersectionObserver = MockObserver;
  document.body.innerHTML = '';
});

describe('useScrollSpy', () => {
  it('defaults to the first id before any intersection fires', () => {
    makeSection('s1');
    makeSection('s2');
    const { result } = renderHook(() => useScrollSpy(['s1', 's2']));
    expect(result.current).toBe('s1');
  });

  it('observes every DOM element that matches the given ids', () => {
    const s1 = makeSection('s1');
    const s2 = makeSection('s2');
    renderHook(() => useScrollSpy(['s1', 's2']));

    const observer = MockObserver.instances[0];
    expect(observer.observed).toEqual([s1, s2]);
  });

  it('skips ids that have no matching element in the DOM', () => {
    makeSection('s1');
    renderHook(() => useScrollSpy(['s1', 'does-not-exist']));

    const observer = MockObserver.instances[0];
    expect(observer.observed).toHaveLength(1);
  });

  it('updates the active id when an observed section starts intersecting', () => {
    makeSection('s1');
    const s2 = makeSection('s2');
    const { result } = renderHook(() => useScrollSpy(['s1', 's2']));
    const observer = MockObserver.instances[0];

    act(() => {
      observer.trigger([{ isIntersecting: true, target: s2 }]);
    });

    expect(result.current).toBe('s2');
  });

  it('leaves the active id unchanged for entries that are not intersecting', () => {
    makeSection('s1');
    const s2 = makeSection('s2');
    const { result } = renderHook(() => useScrollSpy(['s1', 's2']));
    const observer = MockObserver.instances[0];

    act(() => {
      observer.trigger([{ isIntersecting: false, target: s2 }]);
    });

    expect(result.current).toBe('s1');
  });

  it('disconnects the observer on unmount', () => {
    makeSection('s1');
    const { unmount } = renderHook(() => useScrollSpy(['s1']));
    const observer = MockObserver.instances[0];
    const disconnectSpy = vi.spyOn(observer, 'disconnect');

    unmount();

    expect(disconnectSpy).toHaveBeenCalledTimes(1);
  });
});
