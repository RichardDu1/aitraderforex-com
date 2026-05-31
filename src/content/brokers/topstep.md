---
title: "TopStep"
description: "TopStep is a futures prop firm offering simulated trading evaluations with a focus on risk management, but its complex payout rules and trailing drawdowns raise concerns for traders seeking consistent withdrawals."
brokerType: "Futures Prop Firm"
maxLeverage: "1:100"
spreads: "Raw Spreads from 0.0"
allowsEAs: true
payoutProof: true
trustScore: 65
pros: ["Low initial evaluation cost compared to competitors","Flexible trading styles allowed, including EAs and news trading","Transparent payout process with documented proof from traders"]
cons: ["Complex trailing drawdown rules that can reset unexpectedly","Strict consistency rules that may deny payouts for high-risk trades","Hidden fees for account resets and inactivity"]
publishedAt: 2026-05-31
---

## Execution & Slippage

TopStep operates on a simulated trading environment using Rithmic or CQG data feeds. Execution is generally fast with minimal slippage during normal market conditions. However, during high volatility events (e.g., NFP), slippage can be significant, and traders may experience requotes. The platform does not guarantee fill prices, and stop-loss orders may be subject to slippage beyond the specified level.

## Hidden Rules (If Any)

TopStep enforces a **trailing drawdown** rule that adjusts the maximum loss limit as profits increase. This rule is not always clearly communicated and can reset after a payout, catching traders off guard. Additionally, the **consistency rule** requires that no single trade exceeds 50% of total profit during the evaluation phase; violation can lead to account denial. There are also **inactivity fees** after 30 days of no trading, and account resets incur a fee.

## Algorithmic Trading (EA) Compatibility

TopStep permits automated trading strategies (EAs) and expert advisors. However, EAs must comply with the same risk rules as manual trading, including the trailing drawdown and consistency requirements. High-frequency trading or strategies that generate excessive order flow may be flagged for review. The platform does not provide dedicated API access for algorithmic traders.

## Final Verdict

TopStep offers a legitimate path to funded trading with a low barrier to entry, but its **complex rule set** and **trailing drawdown** make it a high-risk proposition for traders who do not meticulously manage risk. The payout process is documented but can be delayed by compliance reviews. **Recommendation:** Suitable for disciplined traders who can adhere to strict risk parameters; avoid if you prefer flexible drawdown rules or high-frequency strategies. Trust Score: **65/100**.
