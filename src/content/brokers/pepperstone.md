---
title: "Pepperstone"
description: "Pepperstone is an ASIC-regulated A-Book broker offering raw spreads from 0.0 pips with no requotes, but its aggressive trailing drawdown on EAs and ambiguous payout policies warrant caution."
brokerType: "A-Book Broker"
maxLeverage: "1:500"
spreads: "Raw Spreads from 0.0 pips"
allowsEAs: true
payoutProof: true
trustScore: 72
pros: ["Raw spreads from 0.0 pips with no requotes","ASIC and FCA regulated","Fast execution with low latency"]
cons: ["Aggressive trailing drawdown on EA accounts","Ambiguous payout denial policies for high-frequency traders"]
publishedAt: 2026-05-31
---

## Execution & Slippage

Pepperstone operates as an A-Book broker, meaning it passes client orders directly to liquidity providers. Execution is generally fast with no requotes, but slippage can occur during high-impact news events. The broker offers raw spreads from 0.0 pips with a commission per lot, which is competitive for scalpers and algorithmic traders.

## Hidden Rules (If Any)

Pepperstone enforces a **trailing drawdown** on accounts using Expert Advisors (EAs). This rule reduces the maximum drawdown limit as profits increase, effectively capping risk but also limiting potential growth. Additionally, the broker reserves the right to deny payouts if it detects "abusive trading practices," which can be vaguely defined and applied to high-frequency strategies. Traders should review the terms carefully to avoid unexpected account restrictions.

## Algorithmic Trading (EA) Compatibility

EAs are allowed, but the trailing drawdown rule can trigger early account closures for strategies that experience temporary equity dips. The broker's infrastructure supports low-latency execution, making it suitable for most automated systems, but the risk of forced liquidation due to drawdown limits is a significant concern.

## Final Verdict

Pepperstone is a legitimate A-Book broker with competitive pricing and regulation. However, its trailing drawdown policy and ambiguous payout denials introduce hidden risks for algorithmic traders. **Trust Score: 72/100**. Suitable for manual traders with moderate risk tolerance; EAs require careful monitoring of drawdown limits.
