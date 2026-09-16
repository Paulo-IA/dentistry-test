import { Component } from '@angular/core';
import { siteConfig } from '../../config/site.config';
import { buildWhatsAppUrl, whatsappConfig } from '../../config/whatsapp.config';

/** Footer with professional identification, CRO, contact and legal notice. */
@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container footer__grid">
        <div class="footer__brand">
          <p class="footer__name">{{ siteConfig.professional }}</p>
          <p class="footer__cro">{{ siteConfig.cro }} · registro ativo</p>
          <p class="footer__about">
            Restaurações, limpeza e profilaxia e tratamento de canal com atendimento acolhedor
            e equipamentos modernos.
          </p>
          <div class="footer__social">
            <a href="#" aria-label="Perfil no Instagram (placeholder)">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Perfil no Facebook (placeholder)">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="footer__col">
          <h3 class="footer__col-title">Tratamentos</h3>
          <nav aria-label="Links de tratamentos">
            <a href="#servicos">Restaurações</a>
            <a href="#servicos">Limpeza e Profilaxia</a>
            <a href="#servicos">Tratamento de Canal</a>
            <a href="#como-funciona">Como funciona</a>
          </nav>
        </div>

        <div class="footer__col">
          <h3 class="footer__col-title">Contato</h3>
          <nav aria-label="Informações de contato">
            <span class="footer__line">{{ siteConfig.address }}</span>
            <span class="footer__line">
              @for (h of siteConfig.hours; track h.days) {
                <span class="footer__hours">
                  {{ h.days }}: {{ h.time }}
                  @if (!$last) {
                    <br />
                  }
                </span>
              }
            </span>
            <a href="#" aria-label="Ligar para o consultório (número ilustrativo)">
              {{ siteConfig.phoneDisplay }}
            </a>
          </nav>
        </div>

        <div class="footer__cta">
          <a
            class="btn btn--whatsapp"
            [href]="whatsappHref"
            target="_blank"
            rel="noopener"
          >
            Agendar no WhatsApp
          </a>
        </div>
      </div>

      <div class="container">
        <p class="footer__legal">
          Dra. Mariana Serra — {{ siteConfig.cro }}. As informações deste site têm caráter
          educativo e não substituem a consulta odontológica. O diagnóstico e o plano de
          tratamento são estabelecidos em avaliação presencial com a profissional.
        </p>
        <p class="footer__copy">
          © {{ currentYear }} Dra. Mariana Serra | Odontologia · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  `,
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly siteConfig = siteConfig;
  protected readonly whatsappHref = buildWhatsAppUrl(whatsappConfig.messages.footer);
  protected readonly currentYear = new Date().getFullYear();
}