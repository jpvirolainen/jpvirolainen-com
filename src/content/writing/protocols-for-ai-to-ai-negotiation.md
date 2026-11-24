---
title: "Why AI Agents Need Native Protocols Beyond REST"
description: "Concierge agents and customer-service bots are about to meet in the wild. Negotiating over human text or static REST endpoints won't hold up."
pubDate: 2025-01-14
category: "Agents, APIs & Discovery"
featured: false
---

AI already handles a growing share of customer service over chat and voice. At the same time, concierge agents are being built to act on behalf of individuals: requesting a late hotel checkout, booking travel, or negotiating service terms over email, chat, and phone calls.

We are rapidly approaching the point where these two sides meet directly in the open world. Unlike a tidy multi-agent sandbox controlled by a single developer, this happens when a personal agent contacts a vendor's customer-service agent it has never encountered before and deals with unfamiliar policies in real time.

The bottleneck is that both machines are communicating through channels built for humans. Generating and parsing natural language over email or voice calls is slow and ambiguous. Two software systems shouldn't have to simulate small talk just to check availability, verify constraints, and agree on a price.

What's missing is an open protocol designed specifically for agent-to-agent negotiation, allowing software to exchange structured intent, constraints, and offers directly.

This idea has deep roots in computer science. Earlier generations explored formal agent languages like KQML and FIPA ACL, while frameworks such as JADE and the Contract Net Protocol studied automated task negotiation. Modern frameworks like AutoGen, Agora, and Fetch.ai tackle pieces of coordination, mostly inside controlled ecosystems. None yet provide a universal, open-world layer for unfamiliar agents.

People often ask why standard REST APIs aren't enough. REST excels at predefined data exchanges where both sides agree on a fixed schema ahead of time. It breaks down when an agent needs to discover capabilities dynamically and negotiate edge cases with a counterparty it has never integrated with before.

A usable agent-to-agent protocol also has to embed trust from the start. Cryptographic signatures, verifiable delegation from the human principal, and auditable negotiation logs would let a buyer's agent and a vendor's agent reach binding terms in seconds with a clear record of what was agreed.

When agents negotiate purchases on both sides of the table, the advantage goes to whichever agent has better constraints and context. At a minimum, it should mean never again wasting twenty minutes listening to bad hold music waiting for a customer service representative.
