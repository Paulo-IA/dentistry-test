import { Component, signal } from '@angular/core';
import { buildWhatsAppUrl, whatsappConfig } from '../../config/whatsapp.config';

interface FaqItem {
  question: string;
  answer: string;
}

/** Accordion of neutral, educational frequently asked questions. */
@Component({
  selector: 'app-faq',
  template: `
    <section class="faq section section--tinted" id="duvidas">
      <div class="container faq__inner">
        <div class="faq__heading">
          <span class="eyebrow">Dúvidas frequentes</span>
          <h2 class="section-title">Perguntas comuns sobre os tratamentos</h2>
          <p class="section-subtitle">
            Respostas informativas. Cada caso é particular e passa por avaliação clínica.
          </p>
        </div>

        <div class="faq__list">
          @for (item of items; track item.question; let i = $index) {
            <div class="faq__item" [class.faq__item--open]="openIndex() === i">
              <button
                class="faq__question"
                [attr.aria-expanded]="openIndex() === i"
                [attr.aria-controls]="'faq-panel-' + i"
                (click)="toggle(i)"
              >
                <span>{{ item.question }}</span>
                <svg
                  class="faq__chevron"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                class="faq__panel"
                [id]="'faq-panel-' + i"
                [class.faq__panel--open]="openIndex() === i"
              >
                <p class="faq__answer">{{ item.answer }}</p>
              </div>
            </div>
          }
        </div>

        <div class="faq__cta">
          <p>Não encontrou sua dúvida?</p>
          <a
            class="btn btn--whatsapp"
            [href]="whatsappHref"
            target="_blank"
            rel="noopener"
          >
            Perguntar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './faq.scss',
})
export class Faq {
  protected readonly items: FaqItem[] = [
    {
      question: 'O tratamento de canal dói?',
      answer:
        'Com anestesia local, o procedimento é realizado durante a consulta. Após o tratamento, pode haver sensibilidade leve, que costuma passar em poucos dias.',
    },
    {
      question: 'Quanto tempo dura uma restauração?',
      answer:
        'Depende de cuidados como higiene, alimentação e acompanhamento periódico. A durabilidade varia de pessoa para pessoa e é avaliada nas consultas de rotina.',
    },
    {
      question: 'Com que frequência devo fazer uma limpeza?',
      answer:
        'Geralmente, o intervalo recomendado fica entre 6 e 12 meses, dependendo de cada caso. Na avaliação, indicamos a frequência mais adequada para você.',
    },
    {
      question: 'A limpeza deixa os dentes mais brancos?',
      answer:
        'A profilaxia remove placa, tártaro e manchas superficiais, devolvendo a aparência natural dos dentes. Ela não substitui um clareamento dentário.',
    },
    {
      question: 'Quais cuidados devo ter após uma restauração?',
      answer:
        'Evitar alimentos muito duros ou pegajosos logo após o procedimento e manter a higiene bucal diária. As orientações específicas são passadas na consulta.',
    },
    {
      question: 'Como agendar a primeira avaliação?',
      answer:
        'É simples: é só chamar no WhatsApp. Tiramos suas dúvidas e encontramos um horário para o seu atendimento.',
    },
  ];

  /** Index of the currently open accordion item (null = all closed). */
  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }

  protected readonly whatsappHref = buildWhatsAppUrl(whatsappConfig.messages.faq);
}