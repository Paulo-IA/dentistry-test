import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Differentials } from './components/differentials/differentials';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Faq } from './components/faq/faq';
import { CtaFinal } from './components/cta-final/cta-final';
import { Footer } from './components/footer/footer';
import { WhatsAppButton } from './components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    About,
    Services,
    Differentials,
    HowItWorks,
    Faq,
    CtaFinal,
    Footer,
    WhatsAppButton,
  ],
  template: `
    <a class="skip-link" href="#inicio">Pular para o conteúdo</a>
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-services></app-services>
      <app-about></app-about>
      <app-differentials></app-differentials>
      <app-how-it-works></app-how-it-works>
      <app-faq></app-faq>
      <app-cta-final></app-cta-final>
    </main>
    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
  `,
  styleUrl: './app.scss',
})
export class App {}