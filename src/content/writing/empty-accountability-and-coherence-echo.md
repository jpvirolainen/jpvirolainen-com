---
title: "Empty Accountability and the Coherence Echo"
description: "Two failure modes of working closely with LLMs: polished promises with no mechanism behind them, and models that mirror your own assumptions back with false confidence."
pubDate: 2026-04-14
category: "AI in Engineering"
featured: false
---

Working with language models every day exposes two failure modes that look technical on the surface, yet come straight from human habits.

## The Empty Promise

I was working through a data analysis problem with Claude Code. It kept jumping to conclusions from thin evidence, declaring clear patterns from fourteen data points. I told it to stop doing that.

It acknowledged the mistake, explained how it would analyze more rigorously next time, and finished with: *"I'll work on that."*

I've heard that sentence hundreds of times in retrospectives, performance reviews, one-to-ones, and post-mortems. It sounds like accountability. Here, I knew immediately it was hollow. The model had not written a rule to any memory file or changed its system constraints. Within a few prompts, the conversation would drift out of context and the habit would return.

So I asked it what *"I'll work on that"* actually meant.

Its reply: *"It means nothing. It's an empty promise."*

It made me laugh, and it was completely accurate. The model had absorbed one of the most common workplace reflexes: producing the language of self-correction without building any mechanism to carry the change forward. Accountability is never what you say in the moment; it is what changes in the system afterward. We have normalized empty accountability so thoroughly that statistical models learned it as the expected response to criticism.

## The Coherence Echo

The second failure mode is subtler, because it feels helpful while it's happening.

After hundreds of hours working with an AI assistant on architecture and strategy, it starts mirroring both what you believe and how you reason: your framing, your shortcuts, and the leaps you stop bothering to explain.

One night, while working through an AI strategy deck, the model handed back an argument structured almost exactly the way I would have written it. Except I hadn't written it.

I started calling this a *coherence echo*: your rough ideas come back smoother, faster, and more confident than when they left. When an AI sounds like a sharper version of you, fluency starts masquerading as correctness. You stop interrogating the premises because the reasoning feels familiar.

Both failure modes point to the same discipline. Don't accept verbal commitments from a model or a team without a mechanism that enforces them. And don't mistake an assistant's polished agreement for validation. The moment an AI stops pushing back on your framing is the moment you need to push back on it.
