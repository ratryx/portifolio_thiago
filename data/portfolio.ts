export interface Project {
  title: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface Language {
  key: string;
  name: string;
  level: 'Uso atual' | 'Conhecimento prévio';
  description: string;
}

export interface Technology {
  key: string;
  name: string;
  category: string;
}

export const profile = {
  name: 'Thiago Bettin Ramos',
  role: 'Desenvolvedor Web Full Stack',
  availability: 'Disponível para projetos freelance',
  summary:
    'Formado em Desenvolvimento Web Full Stack, atuo tanto no front-end quanto no back-end, construindo aplicações completas da interface à persistência de dados. Nos projetos mais recentes, também venho aprofundando meu trabalho com automações, integrações e arquitetura de sistemas.',
  specialties: ['Front-end', 'Back-end', 'Automações', 'Integrações'],
};

export const projects: Project[] = [
  {
    title: 'Projeto Vurx',
    role: 'Arquitetura de dados',
    description:
      'Atuação na arquitetura e configuração da camada de dados de um sistema corporativo, com foco em conexões assíncronas, estabilidade e redução de latência.',
    highlights: [
      'Estruturação do acesso assíncrono ao banco de dados',
      'Organização de conexões e recursos para cenários concorrentes',
      'Ajustes voltados à confiabilidade e ao desempenho da aplicação',
    ],
    tags: ['Python', 'PostgreSQL', 'Async'],
  },
  {
    title: 'Sistema de Chamados',
    role: 'Back-end e persistência',
    description:
      'Estruturação da persistência de um sistema interno de suporte, cobrindo abertura, andamento e histórico dos atendimentos.',
    highlights: [
      'Modelagem das entidades e relacionamentos do sistema',
      'Fluxos de leitura e escrita em PostgreSQL 17',
      'Preservação do histórico e da rastreabilidade dos chamados',
    ],
    tags: ['Python', 'PostgreSQL 17', 'Read/Write'],
  },
  {
    title: 'Sistema de Atendimento Médico',
    role: 'Integração segura de dados',
    description:
      'Integração com uma base corporativa de atendimento médico, mantendo isolamento em relação ao sistema operacional de chamados.',
    highlights: [
      'Acesso dedicado em modo somente leitura',
      'Separação entre domínios e responsabilidades dos sistemas',
      'Redução do risco de alterações indevidas em dados sensíveis',
    ],
    tags: ['Python', 'PostgreSQL 17', 'Read-Only'],
  },
];

export const snakeGame = {
  title: 'SnakeGame',
  eyebrow: 'Pausa rápida',
  heading: 'Vem dar uma descontraída.',
  description:
    'Além dos projetos profissionais, também gosto de criar experiências web por diversão. O SnakeGame é a minha versão do clássico jogo da cobrinha, feita para explorar lógica, interface e interações de um jeito mais leve.',
  url: 'https://snakegame-thiagobettin.vercel.app/',
};

export const languages: Language[] = [
  {
    key: 'python',
    name: 'Python',
    level: 'Uso atual',
    description: 'Back-end, automações, integrações, scripts e processamento de dados.',
  },
  {
    key: 'javascript',
    name: 'JavaScript',
    level: 'Uso atual',
    description: 'Interfaces web, comportamento de aplicações e serviços no ecossistema Node.js.',
  },
  {
    key: 'c',
    name: 'C',
    level: 'Conhecimento prévio',
    description: 'Fundamentos de programação, memória, estruturas de dados e lógica de baixo nível.',
  },
  {
    key: 'cpp',
    name: 'C++',
    level: 'Conhecimento prévio',
    description: 'Programação orientada a objetos e fundamentos de desenvolvimento com tipagem estática.',
  },
  {
    key: 'csharp',
    name: 'C#',
    level: 'Conhecimento prévio',
    description: 'Experiência prévia com orientação a objetos e desenvolvimento de modificações para jogos.',
  },
  {
    key: 'java',
    name: 'Java',
    level: 'Conhecimento prévio',
    description: 'Conceitos de orientação a objetos, coleções e construção de aplicações tipadas.',
  },
];

export const technologies: Technology[] = [
  { key: 'react', name: 'React', category: 'Front-end' },
  { key: 'vite', name: 'Vite', category: 'Tooling' },
  { key: 'tailwind', name: 'Tailwind CSS', category: 'Front-end' },
  { key: 'framer', name: 'Framer Motion', category: 'Interação' },
  { key: 'node', name: 'Node.js', category: 'Back-end' },
  { key: 'django', name: 'Django', category: 'Back-end' },
  { key: 'fastapi', name: 'FastAPI', category: 'APIs' },
  { key: 'flask', name: 'Flask', category: 'Back-end' },
  { key: 'postgres', name: 'PostgreSQL', category: 'Dados' },
  { key: 'sql', name: 'SQL', category: 'Dados' },
  { key: 'pandas', name: 'Pandas', category: 'Python' },
  { key: 'numpy', name: 'NumPy', category: 'Python' },
  { key: 'pytest', name: 'Pytest', category: 'Testes' },
  { key: 'git', name: 'Git', category: 'Versionamento' },
  { key: 'github', name: 'GitHub', category: 'Colaboração' },
];

export const contacts = [
  {
    label: 'WhatsApp',
    detail: '(12) 99227-7250',
    href: 'https://wa.me/5512992277250',
  },
  {
    label: 'LinkedIn',
    detail: 'thiago-bettin-ramos',
    href: 'https://linkedin.com/in/thiago-bettin-ramos-91b878238/',
  },
  {
    label: 'GitHub',
    detail: 'ratryx',
    href: 'https://github.com/ratryx',
  },
];

export const githubUsername = 'ratryx';
