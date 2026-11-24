---
title: "Breaking the Rules: From Rigid Systems to Learning Algorithms"
description: "Lessons from twenty-five years of building Design++, Engager, and MagicWords on moving from hand-coded rules to adaptive models."
pubDate: 2024-10-16
category: "AI in Engineering"
featured: false
---

Throughout my career, I've worked under the assumption that almost anything is possible in software given enough time and engineering effort. Experience adds an important qualifier: just because a system can be built doesn't mean it's practical to maintain in the real world.

That tension shaped how I viewed artificial intelligence for decades. Neural networks had been around in academia since the 1950s, yet even in the late 1990s and early 2000s they felt largely impractical for commercial production systems. Three early projects I worked on traced the move from rigid hand-coded logic toward models that could learn.

## Design++ and the Ceiling of Rules

In the late 1990s, I worked on Design++, an engineering tool that used rule-based logic to automate complex CAD design tasks. I wasn't a rule-engine specialist going in, and working alongside engineers who understood symbolic systems deeply taught me both their strength and their ceiling.

When a domain was well-defined and repetitive, rule-based automation was remarkably effective. The weakness was rigidity. Every scenario had to be anticipated and coded in advance. Whenever requirements changed or an unexpected edge case appeared, someone had to update the rule base manually. The software was only ever as capable as the rules explicitly written into it. Design++ still does solid work in its niche today, yet it made clear that broader intelligence required systems able to adapt without manual reprogramming.

## Engager: Personalization Hits Complexity

In the early 2000s, I carried those lessons into Engager, an interactive marketing system designed to guide users through a customer journey by adjusting messages based on what they did, or failed to do, across web and messaging channels.

Like Design++, Engager stood on a rule-based foundation. Every follow-up sequence, discount trigger, and abandonment path had to be mapped ahead of time. Even with rich behavioral data coming in, the system couldn't generalize on its own. Scaling personalization meant managing a steadily growing tangle of manually maintained rules.

Engager succeeded commercially and was adopted inside large marketing systems, yet it stopped short of the original vision. Neural networks looked promising on paper for real-time adaptation, but the tooling and compute were nowhere near ready for straightforward production engineering.

## MagicWords: First Step Into Neural Networks

The next project was MagicWords, a technology we created and patented at HDmessaging (US 20120239761, *Linking Context-Based Information to Text Messages*) that turned words and concepts in live chat conversations into contextual hyperlinks for relevant content such as local news or weather.

Version 1 repeated the familiar pattern: keyword rules matching phrases to content without understanding context. Version 2 was where things changed. We introduced neural networks to handle content filtering and contextual matching. I didn't write the neural network internals myself, as the discipline still sat close to research, but working closely with the team showed what happened once static rules gave way to statistical pattern matching. The system could filter noise and surface relevant context without hand-coding every phrase combination.

## Where That Arc Leads

Looking back across Design++, Engager, and MagicWords, the core engineering problem never really changed. Businesses have wanted adaptive, context-aware customer interactions for twenty-five years. What changed is that modern language models and machine learning infrastructure finally make those ideas buildable without drowning engineering teams in brittle rule trees.

Automating discrete support or content tasks is only the baseline. The harder, more durable opportunity is maintaining coherent, adaptive conversations across channels over time, combining the pattern recognition of learning models with the reliability and structure we learned to build decades ago.
