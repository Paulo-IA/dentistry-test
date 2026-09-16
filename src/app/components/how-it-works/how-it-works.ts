import { Component } from '@angular/core';
import { buildWhatsAppUrl, whatsappConfig } from '../../config/whatsapp.config';

interface Step {
  number: string;
  title: string;
  description: string;
}

/** Step-by-step funnel that reinforces the WhatsApp journey. */
@Component({
  selector: 'app-how-it-works',
  template: `
    <section class="how section" id="como-funciona">
      <div class="container">
        <div class="how__heading">
          <span class="eyebrow">Como funciona</span>
          <h2 class="section-title">Acompanhamento simples e transparente</h2>
          <p class="section-subtitle">
            Do primeiro contato ao plano de tratamento, você sabe o que esperar em cada etapa.
          </p>
        </div>

        <ol class="how__steps">
          @for (step of steps; track step.number) {
            <li class="how__step">
              <span class="how__step-number" aria-hidden="true">{{ step.number }}</span>
              <h3 class="how__step-title">{{ step.title }}</h3>
              <p class="how__step-text">{{ step.description }}</p>
            </li>
          }
        </ol>

        <a
          class="btn btn--whatsapp btn--lg how__cta"
          [href]="whatsappHref"
          target="_blank"
          rel="noopener"
        >
          Iniciar no WhatsApp
        </a>
      </div>
    </section>
  `,
  styleUrl: './how-it-works.scss',
})
export class HowItWorks {
  protected readonly steps: Step[] = [
    {
      number: '1',
      title: 'Chame no WhatsApp',
      description:
        'Envie uma mensagem contando sua necessidade ou dúvida — a resposta é simples e direta.',
    },
    {
      number: '2',
      title: 'Agende sua avaliação',
      description: 'Encontramos juntos um horário que se encaixa na sua rotina.',
    },
    {
      number: '3',
      title: 'Conheça o diagnóstico',
      description: 'Na consulta, seus dentes são avaliados com calma e atenção.',
    },
    {
      number: '4',
      title: 'Definam o plano de tratamento',
      description:
        'As opções são apresentadas de forma clara e a escolha é feita em conjunto.',
    },
  ];

  protected readonly whatsappHref = buildWhatsAppUrl(whatsappConfig.messages.howItWorks);
}