/**
 * WhatsApp funnel configuration.
 * Change the number and any pre-filled message in this single file.
 */
import { siteConfig } from './site.config';

export const whatsappConfig = {
  /** International format, digits only (country + area + number). */
  number: siteConfig.whatsappNumber ?? '',
  baseUrl: 'https://wa.me',

  /** Pre-filled messages per page section. */
  messages: {
    general: 'Olá! Vim pelo site e gostaria de agendar uma avaliação.',
    hero: 'Olá! Vi o site e gostaria de agendar uma avaliação.',
    header: 'Olá! Gostaria de agendar uma consulta.',
    about: 'Olá! Quero saber mais sobre o atendimento da Dra. Mariana Serra.',
    servicesRestoration: 'Olá! Gostaria de saber mais sobre restaurações dentárias.',
    servicesCleaning: 'Olá! Gostaria de saber mais sobre limpeza e profilaxia.',
    servicesRootCanal: 'Olá! Gostaria de saber mais sobre tratamento de canal.',
    differentials: 'Olá! Vim pelo site e gostaria de agendar uma avaliação.',
    howItWorks: 'Olá! Quero saber mais sobre como funciona o atendimento.',
    faq: 'Olá! Tenho uma dúvida sobre os tratamentos e gostaria de conversar.',
    final: 'Olá! Gostaria de agendar uma avaliação. Pode me ajudar?',
    footer: 'Olá! Vim pelo site e gostaria de tirar dúvidas.',
    floating: 'Olá! Vim pelo site e gostaria de agendar uma avaliação.',
  },
} as const;

/** Builds a fully-formed wa.me link with a pre-filled message. */
export function buildWhatsAppUrl(message: string): string {
  return `${whatsappConfig.baseUrl}/${whatsappConfig.number}?text=${encodeURIComponent(message)}`;
}