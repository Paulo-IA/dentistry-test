import { Component, HostListener, signal } from '@angular/core';
import { siteConfig } from '../../config/site.config';
import { buildWhatsAppUrl, whatsappConfig } from '../../config/whatsapp.config';
import { ToothIcon } from '../tooth-icon/tooth-icon';

interface NavLink {
  label: string;
  href: string;
}

/** Fixed top navigation with anchor menu and WhatsApp CTA. */
@Component({
  selector: 'app-header',
  imports: [ToothIcon],
  template: `
    <header class="header" [class.header--scrolled]="scrolled()">
      <div class="container header__inner">
        <a
          class="header__brand"
          href="#inicio"
          aria-label="Dra. Mariana Serra — Odontologia, voltar ao início"
          (click)="closeMenu()"
        >
          <app-tooth-icon class="header__brand-icon" [size]="30" />
          <span class="header__brand-text">
            <strong>{{ siteConfig.professional }}</strong>
            <small>Odontologia</small>
          </span>
        </a>

        <nav
          class="header__nav"
          [class.header__nav--open]="menuOpen()"
          aria-label="Navegação principal"
        >
          @for (link of navLinks; track link.href) {
            <a class="header__link" [href]="link.href" (click)="closeMenu()">{{ link.label }}</a>
          }
          <a
            class="btn btn--whatsapp header__nav-cta"
            [href]="whatsappHref"
            target="_blank"
            rel="noopener"
            (click)="closeMenu()"
          >
            Agendar no WhatsApp
          </a>
        </nav>

        <a
          class="btn btn--whatsapp header__cta"
          [href]="whatsappHref"
          target="_blank"
          rel="noopener"
        >
          Agendar no WhatsApp
        </a>

        <button
          class="header__toggle"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Abrir ou fechar menu"
          (click)="toggleMenu()"
        >
          <span class="header__toggle-bar"></span>
          <span class="header__toggle-bar"></span>
          <span class="header__toggle-bar"></span>
        </button>
      </div>
    </header>
  `,
  styleUrl: './header.scss',
})
export class Header {
  protected readonly siteConfig = siteConfig;
  protected readonly navLinks: NavLink[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ];

  protected readonly whatsappHref = buildWhatsAppUrl(whatsappConfig.messages.header);

  /** True once the user scrolls, used to give the header a stronger shadow. */
  protected readonly scrolled = signal(false);
  /** Toggles the mobile hamburger menu. */
  protected readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}