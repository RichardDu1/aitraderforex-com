import fs from 'fs';
import path from 'path';
import { fetchSearchContext } from './web_crawler.mjs';

const DEEPSEEK_API_KEY = "sk-a2dc0881aaac4bfcbe75b200177655b1";
const BROKERS_DIR = path.join(process.cwd(), 'src', 'content', 'brokers');

if (!fs.existsSync(BROKERS_DIR)) fs.mkdirSync(BROKERS_DIR, { recursive: true });

function sanitizeSlug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function callDeepSeek(prompt) {
  const reqBody = {
    model: "deepseek-chat",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2, // Low temp for analytical/factual tone
    response_format: { type: "json_object" }
  };

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify(reqBody)
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  return data.choices[0].message.content.trim();
}

async function generateBrokerReport(platformName, type) {
  console.log(`\n======================================================`);
  console.log(`🕵️ Auditing Platform: ${platformName}`);
  
  // 1. Crawl for facts
  console.log(`🔍 Crawling ForexPeaceArmy and PropFirmMatch mentions for ${platformName}...`);
  let searchResults = "";
  try {
    searchResults = await fetchSearchContext(`"${platformName}" prop firm forex broker reviews payout proof rules latency EAs`);
  } catch (e) {
    console.warn(`⚠️ Crawl failed: ${e.message}`);
  }

  // 2. Ask DeepSeek to generate Schema + Markdown
  console.log(`🧠 Generating Cynical Diligence Report...`);
  const prompt = `
You are a highly cynical, data-driven Forex Due Diligence Analyst for AITraderForex.com.
Write an independent audit report on the trading platform: "${platformName}".
Type: ${type}.

I have scraped the web for factual data. Here are the snippets:
---
${searchResults}
---

Your task is to output a single JSON object containing BOTH the frontmatter metadata and the full markdown report.
Maintain a "Wall Street Trust" tone: formal, objective, critical, and focused on risk management. Expose any hidden rules, trailing drawdowns, or payout denials.

Output exactly this JSON structure (no markdown fences around it, just raw JSON):
{
  "title": "Exact Platform Name",
  "description": "A 1-2 sentence objective summary of the platform's reputation and liquidity model.",
  "brokerType": "${type}",
  "maxLeverage": "e.g., 1:100",
  "spreads": "e.g., Raw Spreads from 0.0",
  "allowsEAs": true or false,
  "payoutProof": true or false,
  "trustScore": an integer from 1 to 100,
  "pros": ["Pro 1", "Pro 2", "Pro 3"],
  "cons": ["Red Flag 1", "Red Flag 2"],
  "markdownContent": "The full diligence report in Markdown. Include H2s like '## Execution & Slippage', '## Hidden Rules (If Any)', '## Algorithmic Trading (EA) Compatibility', '## Final Verdict'. Use bullet points, bold text for emphasis. Do not include the title (H1) or frontmatter."
}
`;

  const responseJson = await callDeepSeek(prompt);
  let parsed;
  try {
    parsed = JSON.parse(responseJson);
  } catch (e) {
    console.error("❌ Failed to parse output:", responseJson);
    return;
  }

  // 3. Write File
  const slug = sanitizeSlug(parsed.title);
  const filePath = path.join(BROKERS_DIR, `${slug}.md`);
  const dateStr = new Date().toISOString().split('T')[0];

  const frontmatter = `---
title: "${parsed.title.replace(/"/g, '\\"')}"
description: "${parsed.description.replace(/"/g, '\\"')}"
brokerType: "${parsed.brokerType}"
maxLeverage: "${parsed.maxLeverage}"
spreads: "${parsed.spreads}"
allowsEAs: ${parsed.allowsEAs}
payoutProof: ${parsed.payoutProof}
trustScore: ${parsed.trustScore}
pros: ${JSON.stringify(parsed.pros || [])}
cons: ${JSON.stringify(parsed.cons || [])}
publishedAt: ${dateStr}
---

${parsed.markdownContent}
`;

  fs.writeFileSync(filePath, frontmatter, 'utf-8');
  console.log(`   ✅ Created diligence report: ${slug}.md`);
}

async function run() {
  const brokers = [
    { name: "FTMO", type: "Prop Firm" },
    { name: "IC Markets", type: "A-Book Broker" },
    { name: "Pepperstone", type: "A-Book Broker" },
    { name: "TopStep", type: "Futures Prop Firm" },
    { name: "Funding Pips", type: "Prop Firm" }
  ];
  
  for (const b of brokers) {
    await generateBrokerReport(b.name, b.type);
    await new Promise(r => setTimeout(r, 2000));
  }
  console.log(`\n🎉 Batch complete! Audited ${brokers.length} platforms.`);
}

run();
