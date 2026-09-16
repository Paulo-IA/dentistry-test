import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  inject,
  input,
  signal,
} from '@angular/core';

/**
 * Fade + slide elements into view as the user scrolls.
 *
 * Usage:
 *   <section class="card" appReveal></section>
 *   <section class="card" appReveal [appRevealDelay]="120"></section>
 *
 * The directive toggles the `reveal--in` class (against the global `.reveal`
 * base styles) once the element intersects the viewport, then unobserves.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.reveal--in]': 'inView()',
    '[style.transition-delay]': 'delay() ? delay() + "ms" : null',
  },
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Stagger delay in milliseconds (used for grids). */
  readonly delay = input(0, { alias: 'appRevealDelay' });

  protected readonly inView = signal(false);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    // Graceful fallback: show immediately when IntersectionObserver is absent.
    if (typeof IntersectionObserver === 'undefined') {
      this.inView.set(true);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.inView.set(true);
            this.disconnect();
          }
        }
      },
      // Buffer at the bottom so cards reveal just before entering the viewport.
      { rootMargin: '0px 0px -48px 0px', threshold: 0.12 },
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

  private disconnect(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }
}