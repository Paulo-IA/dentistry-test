import { Component } from '@angular/core';
import { whatsappConfig } from '../../config/whatsapp.config';
import { ToothIcon } from '../tooth-icon/tooth-icon';

type ServiceIcon = 'restoration' | 'cleaning' | 'root-canal';

interface Service {
  id: string;
  icon: ServiceIcon;
  eyebrow: string;
  title: string;
  description: string;
  moreLabel: string;
  message: string;
}

/** Services section: the three main procedures with educational copy. */
@Component({
  selector: 'app-services',
  imports: [ToothIcon],
  template: `
    <section class="services section" id="servicos">
      <div class="container">
        <div class="services__heading">
          <span class="eyebrow">Principais tratamentos</span>
          <h2 class="section-title">Cuidado diário com os seus dentes</h2>
          <p class="section-subtitle">
            Informações educativas sobre os procedimentos mais comuns do consultório.
          </p>
        </div>

        <div class="services__grid">
          @for (service of services; track service.id) {
            <article class="card">
              <div class="card__icon" aria-hidden="true">
                @switch (service.icon) {
                  @case ('restoration') {
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                  }
                  @case ('cleaning') {
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                      />
                      <path d="M20 3v4M22 5h-4" />
                    </svg>
                  }
                  @case ('root-canal') {
                    <app-tooth-icon [size]="28" />
                  }
                }
              </div>

              <span class="card__eyebrow">{{ service.eyebrow }}</span>
              <h3 class="card__title">{{ service.title }}</h3>
              <p class="card__text">{{ service.description }}</p>
              <a
                class="card__link"
                [href]="buildWhatsAppUrl(service.message)"
                target="_blank"
                rel="noopener"
              >
                Tenho essa necessidade
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          }
        </div>

        <p class="services__note">
          A indicação do tratamento mais adequado é feita após avaliação clínica individualizada.
        </p>
      </div>
    </section>
  `,
  styleUrl: './services.scss',
})
export class Services {
  protected readonly services: Service[] = [
    {
      id: 'restorations',
      icon: 'restoration',
      eyebrow: 'Odontologia restauradora',
      title: 'Restaurações',
      description:
        'Procedimento que devolve a forma e a função do dente após cárie ou pequenas fraturas. O material é aplicado em consulta, com aparência natural.',
      moreLabel: 'Restaurações',
      message: whatsappConfig.messages.servicesRestoration,
    },
    {
      id: 'cleaning',
      icon: 'cleaning',
      eyebrow: 'Prevenção e higiene',
      title: 'Limpeza e Profilaxia',
      description:
        'Remoção de placa bacteriana, tártaro e manchas superficiais com equipamentos específicos. Recomendada periodicamente como prevenção.',
      moreLabel: 'Limpeza',
      message: whatsappConfig.messages.servicesCleaning,
    },
    {
      id: 'root-canal',
      icon: 'root-canal',
      eyebrow: 'Tratamento do canal',
      title: 'Tratamento de Canal',
      description:
        'Indicado quando a polpa do dente está inflamada ou infectada. O interior do dente é tratado e obturado, preservando o dente na boca.',
      moreLabel: 'Tratamento de canal',
      message: whatsappConfig.messages.servicesRootCanal,
    },
  ];

  protected buildWhatsAppUrl = (message: string): string =>
    `${whatsappConfig.baseUrl}/${whatsappConfig.number}?text=${encodeURIComponent(message)}`;
}