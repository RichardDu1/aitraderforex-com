import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const brokersCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/brokers" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    brokerType: z.string(), // e.g., "Prop Firm", "A-Book Broker"
    maxLeverage: z.string(),
    spreads: z.string(),
    allowsEAs: z.boolean(),
    payoutProof: z.boolean(),
    trustScore: z.number(), // out of 100
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    publishedAt: z.date()
  }),
});

export const collections = {
  'brokers': brokersCollection,
};
