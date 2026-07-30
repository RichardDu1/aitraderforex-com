import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const propfirmsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/propfirms" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().optional(),
    author: z.string().optional(),
    score: z.number().optional(),
    price: z.string().optional(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    bottomLine: z.string().optional(),
    verdict: z.string().optional(),
    publishedAt: z.date().optional(),
    payoutSpeed: z.string().optional(),
    maxLeverage: z.string().optional(),
    minDeposit: z.string().optional(),
    profitSplit: z.string().optional(),
    image: z.string().optional()
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Editorial Team'),
    publishedAt: z.date().optional(),
    updatedAt: z.date().optional(),
    category: z.string().optional(),
    image: z.string().optional()
  }),
});

const brokersCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/brokers" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    brokerType: z.string().optional(),
    maxLeverage: z.string().optional(),
    spreads: z.string().optional(),
    trustScore: z.number().optional(),
    allowsEAs: z.boolean().optional(),
    payoutProof: z.boolean().optional(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    image: z.string().optional()
  }),
});

const toolsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tools" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string(),
    category: z.string().optional(),
    score: z.number().optional(),
    price: z.string().optional(),
    image: z.string().optional()
  }),
});

const signalsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/signals" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    score: z.number(),
    price: z.string(),
    platform: z.string(),
    winRate: z.string().optional(),
    monthlyReturn: z.string().optional(),
    minDeposit: z.string().optional(),
    transparency: z.number().optional(), // 1-10
    performance: z.number().optional(), // 1-10
    locale: z.string().optional(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    verdict: z.string().optional(),
    bottomLine: z.string().optional(),
    publishedAt: z.date().optional(),
    image: z.string().optional()
  }),
});

const strategiesCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/strategies" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    score: z.number(),
    complexity: z.string(), // Beginner, Intermediate, Advanced
    assetClass: z.string(),
    timeFrame: z.string(),
    riskLevel: z.string(), // Low, Medium, High
    aiPowered: z.boolean().default(false),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    verdict: z.string().optional(),
    publishedAt: z.date().optional(),
    image: z.string().optional()
  }),
});

const comparisonsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/comparisons" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.string(), // signal-vs-signal, strategy-vs-strategy, signal-vs-manual
    items: z.array(z.string()),
    winner: z.string().optional(),
    verdict: z.string().optional(),
    publishedAt: z.date().optional(),
    image: z.string().optional()
  }),
});

const bestOfsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/best-ofs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    rankings: z.array(z.object({
      name: z.string(),
      rank: z.number(),
      score: z.number(),
      highlight: z.string()
    })),
    publishedAt: z.date().optional(),
    image: z.string().optional()
  }),
});

export const collections = {
  'blog': blogCollection,
  'propfirms': propfirmsCollection,
  'brokers': brokersCollection,
  'tools': toolsCollection,
  'signals': signalsCollection,
  'strategies': strategiesCollection,
  'comparisons': comparisonsCollection,
  'best-ofs': bestOfsCollection,
};