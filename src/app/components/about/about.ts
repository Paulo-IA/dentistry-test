import { Component } from '@angular/core';
import { siteConfig } from '../../config/site.config';
import { buildWhatsAppUrl, whatsappConfig } from '../../config/whatsapp.config';

/** About the professional: bio, care approach and CRO registration. */
@Component({
  selector: 'app-about',
  template: `
    <section class="about section" id="sobre">
      <div class="container about__grid">
        <div class="about__media">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
            alt="Profissional de odontologia analisando exames em consultório"
            width="900"
            height="650"
            loading="lazy"
          />
          <div class="about__cro">
            <strong>{{ siteConfig.professional }}</strong>
            <span>{{ siteConfig.cro }} · registro ativo</span>
          </div>
        </div>

        <div class="about__content">
          <span class="eyebrow">Sobre a profissional</span>
          <h2 class="section-title">
            Atendimento com escuta, acolhimento e explicação clara
          </h2>

          <p class="about__bio">
            Sou a Dra. Mariana Serra, cirurgiã-dentista com mais de 12 anos de experiência em
            odontologia clínica geral. Meu dia a dia envolve restaurações, limpeza e profilaxia,
            tratamento de canal e a prevenção como base do cuidado bucal.
          </p>
          <p class="about__bio">
            Acredito que um bom tratamento começa com um bom diálogo: você entende cada etapa,
            tira todas as dúvidas e participa das decisões sobre a sua saúde bucal.
          </p>

          <ul class="about__list">
            <li>Escuta ativa e acolhimento em cada consulta</li>
            <li>Explicação clara das etapas e opções de tratamento</li>
            <li>Ambiente calmo, higienizado e com equipamentos atualizados</li>
            <li>Prevenção como base do cuidado odontológico</li>
          </ul>

          <a
            class="btn btn--whatsapp"
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
  styleUrl: './about.scss',
})
export class About {
  protected readonly siteConfig = siteConfig;
  protected readonly whatsappHref = buildWhatsAppUrl(whatsappConfig.messages.about);
}