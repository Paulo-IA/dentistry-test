/**
 * Central clinic/site information.
 * Edit this single file to update contact data, address, hours, CRO, etc.
 */
export const siteConfig = {
  professional: 'Dra. Mariana Serra',
  specialty: 'Odontologia',
  cro: 'CRO-SP 00000',
  phoneDisplay: '(11) 99999-9999',
  /** International format, digits only — used by the WhatsApp funnel. */
  whatsappNumber: '5511999999999',
  address: 'Rua das Flores, 123 — Sala 45 · Jardim Paulista, São Paulo/SP',
  hours: [
    { days: 'Segunda a sexta', time: '8h às 19h' },
    { days: 'Sábado', time: '8h às 13h' },
  ],
  neighborhood: 'Jardim Paulista, São Paulo/SP',
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
} as const;