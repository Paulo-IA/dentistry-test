import { DestroyRef, Injectable, inject, signal } from '@angular/core';

/**
 * Global, rAF-throttled window scroll position exposed as an Angular signal.
 * Keeps mapping scroll -> rotation smooth across the whole page, not just
 * within a single section's height.
 */
@Injectable({ providedIn: 'root' })
export class ScrollPositionService {
  /** Current window scroll offset in pixels. */
  readonly scrollY = signal(0);

  private rafPending = false;
  private rafId: number | null = null;

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }
    const destroyRef = inject(DestroyRef);
    this.rafId = requestAnimationFrame(() => this.scrollY.set(window.scrollY));
    window.addEventListener('scroll', this.onScroll, { passive: true });
    destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', this.onScroll);
      if (this.rafId !== null) {
        cancelAnimationFrame(this.rafId);
      }
    });
  }

  private readonly onScroll = (): void => {
    if (this.rafPending) {
      return;
    }
    this.rafPending = true;
    this.rafId = requestAnimationFrame(() => {
      this.rafPending = false;
      this.scrollY.set(window.scrollY);
    });
  };
}