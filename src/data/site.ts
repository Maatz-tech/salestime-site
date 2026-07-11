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

// Serviços — fonte única do carrossel da home e do dropdown do menu
export const services = [
  {
    slug: 'estrategia-comercial',
    title: 'Estratégia comercial',
    description:
      'Método completo para estruturar, acelerar e escalar sua operação comercial com estratégia, tecnologia e execução assistida.',
  },
  {
    slug: 'consultoria-de-vendas',
    title: 'Consultoria de Vendas',
    description:
      'Análise estratégica para corrigir gargalos, aumentar conversões e criar previsibilidade no funil de vendas.',
  },
  {
    slug: 'terceirizacao-sdr-bdr',
    title: 'Terceirização de SDR/BDR',
    description:
      'Nossa equipe executa a prospecção utilizando processos validados para gerar oportunidades alinhadas ao seu ICP.',
  },
  {
    slug: 'implementacao-de-crm',
    title: 'Implementação de CRM',
    description:
      'Configuramos automações, dashboards e indicadores para que sua equipe tenha controle e capacidade de tomar decisões baseadas em dados.',
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
