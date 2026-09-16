import { Component } from '@angular/core';
import { buildWhatsAppUrl, whatsappConfig } from '../../config/whatsapp.config';

type FeatureIcon = 'shield' | 'equipment' | 'care' | 'location' | 'hours' | 'plan';

interface Feature {
  id: string;
  icon: FeatureIcon;
  title: string;
  description: string;
}

/** Differentials + structure: informational grid, no promises or superlatives. */
@Component({
  selector: 'app-differentials',
  template: `
    <section class="diff section section--tinted" id="estrutura">
      <div class="container">
        <div class="diff__heading">
          <span class="eyebrow">Estrutura e cuidado</span>
          <h2 class="section-title">Atenção aos detalhes em cada atendimento</h2>
          <p class="section-subtitle">
            Aspectos do consultório que priorizam conforto, segurança e clareza para você.
          </p>
        </div>

        <div class="diff__grid">
          @for (feature of features; track feature.id) {
            <div class="diff__item">
              <div class="diff__icon" aria-hidden="true">
                @switch (feature.icon) {
                  @case ('shield') {
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  }
                  @case ('equipment') {
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="16" height="16" x="4" y="4" rx="2" />
                      <rect width="6" height="6" x="9" y="9" rx="1" />
                      <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
                    </svg>
                  }
                  @case ('care') {
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" x2="9.01" y1="9" y2="9" />
                      <line x1="15" x2="15.01" y1="9" y2="9" />
                    </svg>
                  }
                  @case ('location') {
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  }
                  @case ('hours') {
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  }
                  @case ('plan') {
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                      <path
                        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                      />
                      <path d="m9 14 2 2 4-4" />
                    </svg>
                  }
                }
              </div>
              <h3 class="diff__title">{{ feature.title }}</h3>
              <p class="diff__text">{{ feature.description }}</p>
            </div>
          }
        </div>

        <div class="diff__cta">
          <a
            class="btn btn--whatsapp btn--lg"
            [href]="whatsappHref"
            target="_blank"
            rel="noopener"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './differentials.scss',
})
export class Differentials {
  protected readonly features: Feature[] = [
    {
      id: 'hygiene',
      icon: 'shield',
      title: 'Higiene e biossegurança',
      description:
        'Rotina rigorosa de limpeza, descarte correto e esterilização dos instrumentos utilizados.',
    },
    {
      id: 'equipment',
      icon: 'equipment',
      title: 'Equipamentos modernos',
      description:
        'Tecnologias atualizadas para um atendimento mais preciso e confortável no dia a dia.',
    },
    {
      id: 'care',
      icon: 'care',
      title: 'Atendimento humanizado',
      description:
        'Acolhimento, escuta e explicações claras do início ao fim do seu acompanhamento.',
    },
    {
      id: 'location',
      icon: 'location',
      title: 'Localização de fácil acesso',
      description: 'Consultório na região do Jardim Paulista, em São Paulo/SP.',
    },
    {
      id: 'hours',
      icon: 'hours',
      title: 'Agendamento flexível',
      description: 'Agendamentos via WhatsApp e horários que se adaptam à sua rotina.',
    },
    {
      id: 'plan',
      icon: 'plan',
      title: 'Plano de tratamento transparente',
      description: 'Cada etapa é explicada e combinada com você antes de ser realizada.',
    },
  ];

  protected readonly whatsappHref = buildWhatsAppUrl(whatsappConfig.messages.differentials);
}