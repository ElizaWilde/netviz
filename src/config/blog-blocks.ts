import slugify from 'limax';

const BLOG_BLOCK_DEFINITIONS = [
  {
    title: 'Programming & Runtime Foundation',
    description:
      'Core computer science basics, language fundamentals, runtime behavior, and the mental models everything else builds on.',
  },
  {
    title: 'Spring / Framework Core',
    description:
      'How Spring and other real frameworks are structured, configured, and extended in day-to-day engineering work.',
  },
  {
    title: 'Web & API Layer',
    description:
      'Browser, HTTP, API contracts, and platform-level web knowledge used to build and debug modern applications.',
  },
  {
    title: 'Business Logic & Domain',
    description:
      'Application rules, domain modeling, transactional behavior, and the code that turns requirements into reliable behavior.',
  },
  {
    title: 'Data & Persistence',
    description:
      'Data modeling, storage, querying, and the tradeoffs behind keeping information consistent and useful.',
  },
  {
    title: 'Concurrency, Async & Distributed',
    description:
      'Parallelism, async workflows, contention, messaging, and the techniques needed to keep systems correct under load.',
  },
  {
    title: 'Infrastructure & Operations',
    description:
      'Deployment, networking, environments, CI/CD, and the operational layer that keeps software available.',
  },
  {
    title: 'Frontend & Full-Stack Interaction',
    description:
      'UI architecture, rendering, interaction, and the practical craft of building usable client experiences across the stack.',
  },
  {
    title: 'System Design & Performance',
    description:
      'Service boundaries, scaling tradeoffs, capacity planning, and the higher-level decisions that shape reliable systems.',
  },
  {
    title: 'AI Usage & AI-Enhanced Development',
    description:
      'Models, prompting, agent workflows, and the engineering patterns behind building AI-powered products and developer tooling.',
  },
] as const;

export const BLOG_BLOCKS = BLOG_BLOCK_DEFINITIONS.map((block) => ({
  ...block,
  slug: slugify(block.title),
}));

export const BLOG_BLOCK_TITLES = BLOG_BLOCK_DEFINITIONS.map((block) => block.title) as [
  (typeof BLOG_BLOCK_DEFINITIONS)[number]['title'],
  ...(typeof BLOG_BLOCK_DEFINITIONS)[number]['title'][],
];

export const getBlogBlockByTitle = (title?: string | null) =>
  BLOG_BLOCKS.find((block) => block.title === (title || '').trim());
