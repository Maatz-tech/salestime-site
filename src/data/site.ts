// Fonte única de navegação e dados institucionais.

export const mainNav = [
  { href: '/', label: 'Início' },
  { href: '/#servicos', label: 'Serviços', hasDropdown: true },
  { href: '/sobre', label: 'Sobre nós' },
  { href: '#carreiras', label: 'Carreiras' },
  { href: '/blog', label: 'Blog' },
];

// Categorias do blog — fonte única para o schema da collection e os filtros
export const blogCategories = ['Estratégia', 'Prospecção', 'Pré-vendas', 'CRM', 'Gestão'] as const;

// Serviços — fonte única do carrossel da home e do dropdown do menu.
// `page` aponta para a página dedicada quando ela existe.
export const services: { slug: string; title: string; description: string; page?: string }[] = [
  {
    slug: 'terceirizacao-sdr-bdr',
    title: 'Terceirização de SDR/BDR',
    description:
      'Nossa equipe executa a prospecção utilizando processos validados para gerar oportunidades alinhadas ao seu ICP.',
    page: '/servicos/terceirizacao-sdr-bdr',
  },
  {
    slug: 'consultoria-de-vendas',
    title: 'Consultoria de Vendas',
    description:
      'Análise estratégica para corrigir gargalos, aumentar conversões e criar previsibilidade no funil de vendas.',
    page: '/servicos/consultoria-de-vendas',
  },
  {
    slug: 'implementacao-de-crm',
    title: 'Implementação de CRM',
    description:
      'Configuramos automações, dashboards e indicadores para que sua equipe tenha controle e capacidade de tomar decisões baseadas em dados.',
    page: '/servicos/implementacao-de-crm',
  },
];

export const ctaLabel = 'Agende um diagnóstico';
export const ctaHref = '#diagnostico';

export const footerColumns = [
  {
    title: 'Navegue',
    links: [
      { href: '#metodo', label: 'Método' },
      { href: '#ferramentas', label: 'Ferramentas' },
      { href: '/blog', label: 'Blog' },
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
