// Fonte única de navegação e dados institucionais.

export const mainNav = [
  { href: '/', label: 'Início' },
  { href: '/#servicos', label: 'Serviços', hasDropdown: true },
  { href: '/sobre', label: 'Sobre nós' },
  { href: '#carreiras', label: 'Carreiras' },
  { href: '#blog', label: 'Blog' },
];

export const ctaLabel = 'Agende um diagnóstico';
export const ctaHref = '#diagnostico';

export const footerColumns = [
  {
    title: 'Navegue',
    links: [
      { href: '#metodo', label: 'Método' },
      { href: '#ferramentas', label: 'Ferramentas' },
      { href: '#blog', label: 'Blog' },
      { href: '#materiais', label: 'Materiais' },
    ],
  },
  {
    title: 'Institucional',
    links: [
      { href: '/sobre', label: 'Sobre nós' },
      { href: '#contato', label: 'Contato' },
      { href: '#carreiras', label: 'Trabalhe conosco' },
      { href: '#privacidade', label: 'Política de privacidade' },
    ],
  },
];

export const socials = [
  { href: 'https://www.linkedin.com/company/salestime', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://www.instagram.com/salestime', label: 'Instagram', icon: 'instagram' },
  { href: 'https://www.youtube.com/@salestime', label: 'YouTube', icon: 'youtube' },
];

export const footerAbout =
  'Somos especialistas em desenhar, implementar e gerenciar estratégias e ferramentas de vendas que promovem o crescimento previsível da sua empresa.';
