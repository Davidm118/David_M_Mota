export const portfolioData = {
  name: "David M. Mota",
  title: "Full Stack Engineer | Founder do NexusMarket",
  subtitle: "Especialidade em segurança e escalabilidade: RBAC, multi-tenant, idempotência e sistemas SaaS completos.",
  about: [
    "Desenvolvedor Full Stack com experiência em gestão pública e operações militares no Exército Brasileiro, onde atuei na automação de processos administrativos, gestão de dados e liderança operacional.",
    "Criador do NexusMarket, uma plataforma SaaS Enterprise para gestão de negócios físicos com ERP, PDV, CRM e Delivery integrados. O sistema conta com um motor de IA baseado no Gemini, dividido em agentes especializados: suporte ao cliente, análise financeira e automação de cadastro de produtos.",
    "Especialista em segurança e escalabilidade: construo sistemas com isolamento multi-tenant estrito, RBAC granular, operações idempotentes, rate limiting e auditoria completa — arquitetura pronta para crescer sem comprometer a integridade dos dados."
  ],
  mainProject: {
    title: "NexusMarket ERP SaaS Enterprise",
    description: "Plataforma SaaS multi-tenant completa para gestão operacional de negócios físicos do PDV ao CRM, do controle de estoque ao módulo fiscal com NFe.",
    modules: [
      "PDV Retail com modo fullscreen imersivo",
      "PDV Restaurante com gestão de mesas",
      "Gestão de produtos e estoque em tempo real",
      "Módulo Food com regras ANVISA",
      "Produção e controle de lotes",
      "CRM com campanhas, créditos e eventos",
      "Delivery com rastreio e integrações",
      "Kitchen Display System (KDS)",
      "Módulo Fiscal NFe (assinatura XML)",
      "Suporte com IA (tickets inteligentes)",
      "Multi-loja com isolamento total de tenants",
      "Dashboard com analytics e relatórios"
    ],
    technicalHighlights: [
      "Arquitetura multi-tenant com isolamento estrito por storeId",
      "RBAC com 8 roles granulares (GM, Admin, Caixa, Cozinha...)",
      "Operações idempotentes com Idempotency-Key (pagamentos seguros)",
      "Rate Limiting com Valkey/Redis contra abusos e DDoS",
      "JWT em cookies HttpOnly + proteção reCAPTCHA v3",
      "Fiscal NFe com assinatura criptográfica XML (xml-crypto)",
      "CI/CD com GitHub Actions (lint → typecheck → test → build)",
      "Motor de IA com agentes Gemini especializados por domínio",
      "Serviço dedicado de impressão térmica USB (Node.js)",
      "Audit Log completo de todas as operações críticas"
    ],
    stack: ["Angular 20", "NestJS 11", "Prisma ORM", "MySQL 8", "Docker", "Valkey/Redis", "TypeScript 5.9", "Chart.js", "GitHub Actions"]
  },
  techStack: {
    backend: [
      "NestJS 11",
      "Prisma ORM",
      "MySQL 8",
      "JWT + Cookies HttpOnly",
      "RBAC Granular",
      "Multi-tenant"
    ],
    frontend: [
      "Angular 20",
      "TailwindCSS",
      "Chart.js",
      "UX Operacional",
      "PDV Imersivo",
      "Dashboards"
    ],
    devops: [
      "Docker & Docker Compose",
      "Nginx Reverse Proxy",
      "GitHub Actions CI/CD",
      "Valkey/Redis",
      "Health Checks"
    ],
    security: [
      "RBAC + 8 Roles granulares",
      "Rate Limiting (Valkey/Redis)",
      "JWT HttpOnly Cookies",
      "Idempotência em pagamentos",
      "Audit Logging completo",
      "Isolamento multi-tenant"
    ]
  },
  experience: [
    {
      company: "Exército Brasileiro",
      role: "Área Administrativa e Operacional",
      duration: "",
      details: [
        "2 anos em corpo de tropa",
        "6 anos na área administrativa",
        "Condecorado com Honra ao Mérito e Medalha Mérito Granadeiro",
        "Automação de processos administrativos",
        "Gestão de recursos humanos",
        "Organização e estruturação de dados",
        "Resolução de problemas operacionais"
      ],
      highlightProject: {
        title: "Almanaque do Batalhão da Guarda Presidencial",
        duration: "2 anos",
        details: [
          "Estruturação de dados históricos de 1960 a 2023",
          "Organização por graduação e incorporação",
          "Liderança de equipe no desenvolvimento do projeto",
          "Conversão de registros manuais em estrutura organizada",
          "Entrega para uso institucional contínuo"
        ]
      }
    }
  ],
  education: [
    "Tecnólogo em Gestão Pública",
    "Gestão de Riscos em Processos de Trabalho",
    "Análise Ex Ante de Políticas Públicas",
    "Planejamento Estratégico para Organizações Públicas",
    "Defesa do Usuário e Simplificação",
    "Introdução ao Orçamento Público",
    "Gestão Pessoal - Base da Liderança",
    "Segurança da Informação na Transformação Digital",
    "Técnico em Informática",
    "Web Designer",
    "Front-end",
    "Python",
    "Full Stack",
    "Soft Skills"
  ],
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Avançado" }
  ],
  differentials: [
    "Especialidade em segurança e escalabilidade de sistemas SaaS",
    "Construção de ERP/SaaS Enterprise completo do zero ao deploy",
    "Arquitetura multi-tenant com isolamento estrito e auditoria",
    "Experiência real com operações administrativas e organizacionais",
    "Capacidade de estruturar sistemas complexos com segurança",
    "Liderança técnica e resolução de problemas de alta complexidade",
    "Visão de produto aliada à execução técnica e segurança"
  ],
  contact: {
    email: "davidmota2909@gmail.com",
    github: "https://github.com/Davidm118",
    whatsapp: "https://wa.me/5561992871586"
  }
};
