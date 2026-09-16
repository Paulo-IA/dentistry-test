import { CUSTOM_ELEMENTS_SCHEMA, Component, computed } from '@angular/core';
import { siteConfig } from '../../config/site.config';
import { buildWhatsAppUrl, whatsappConfig } from '../../config/whatsapp.config';
import { ScrollPositionService } from '../../services/scroll-position.service';

/**
 * Hero section featuring a real 3D molar (glTF) rendered with <model-viewer>
 * and rotated by page scroll — the signature branding moment of the page.
 */
@Component({
  selector: 'app-hero',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section class="hero" id="inicio">
      <div class="hero__glow hero__glow--one" aria-hidden="true"></div>
      <div class="hero__glow hero__glow--two" aria-hidden="true"></div>
      <div class="container hero__grid">
        <div class="hero__content">
          <span class="eyebrow">Odontologia em São Paulo</span>
          <h1 class="hero__title">
            Cuidado odontológico completo, humano e
            <span class="text-gradient">de confiança</span>
          </h1>
          <p class="hero__subtitle">
            Restaurações, limpeza e profilaxia e tratamento de canal em um atendimento
            acolhedor, com ambiente cuidado e equipamentos modernos.
          </p>

          <div class="hero__actions">
            <a
              class="btn btn--whatsapp btn--lg"
              [href]="whatsappHref"
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
                />
              </svg>
              Agendar minha consulta
            </a>
            <a class="btn btn--outline btn--lg" href="#servicos">Conhecer os tratamentos</a>
          </div>

          <ul class="hero__facts">
            <li>Restaurações, limpeza e profilaxia e tratamento de canal</li>
            <li>{{ siteConfig.cro }} · registrado no CRO</li>
            <li>Atendimento com escuta e explicação clara</li>
          </ul>
        </div>

        <!-- Signature scroll-rotated 3D molar (hero only). -->
        <div class="hero__stage">
          <div class="hero-model">
            <div class="hero-model__glow" aria-hidden="true"></div>
            <model-viewer
              class="hero-model__viewer"
              src="models/tooth.glb"
              alt="Ilustração 3D de um dente molar"
              [attr.poster]="poster"
              loading="eager"
              disable-zoom
              auto-rotate
              auto-rotate-delay="0"
              rotation-per-second="10deg"
              shadow-intensity="1"
              exposure="1.05"
              environment-image="neutral"
              interaction-prompt="none"
              [attr.camera-orbit]="cameraOrbit()"
            ></model-viewer>
          </div>

          <p class="hero__stage-tag">
            <span>Dra. Mariana Serra</span>
            <span class="hero__stage-cro">{{ siteConfig.cro }}</span>
          </p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly siteConfig = siteConfig;
  protected readonly whatsappHref = buildWhatsAppUrl(whatsappConfig.messages.hero);

  /** Flat tooth placeholder shown while the glTF loads / on failure. */
  protected readonly poster =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='12' fill='%23eaf3fb'/%3E%3Cpath d='M7.391 3.127c-.842.17-1.539.652-2.055 1.504-1.01 1.65-1.084 4.644.242 7.104a2 2 0 0 1 .178.43c.452 1.676.914 5.046 1.583 7.71.4 1.596 1.691 1.265 1.94-.362.456-2.971 1.34-5.862 2.708-5.862 1.367 0 2.253 2.892 2.71 5.862.25 1.628 1.54 1.96 1.94.363.67-2.666 1.13-6.038 1.581-7.712a2 2 0 0 1 .178-.428c1.39-2.568 1.258-5.452.241-7.11q-.782-1.274-2.057-1.501c-.712-.122-1.497.02-2.302.414a5.34 5.34 0 0 1-4.592-.001c-.619-.301-1.708-.53-2.295-.411' fill='%230f6fc6'/%3E%3C/svg%3E";

  constructor(private readonly scroll: ScrollPositionService) {}

  /**
   * Maps global scroll position to a model-viewer camera orbit: a continuous
   * theta (horizontal orbit) spin across the whole page plus a subtle phi wobble.
   */
  protected readonly cameraOrbit = computed(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return '0deg 75deg auto';
    }
    const y = this.scroll.scrollY();
    const theta = (y * 0.2) % 360;
    const phi = 75 + Math.sin(y * 0.0025) * 4;
    return `${theta.toFixed(2)}deg ${phi.toFixed(2)}deg auto`;
  });
}