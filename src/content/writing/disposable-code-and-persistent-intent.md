---
title: "Disposable Code and Persistent Intent"
description: "When regenerating code becomes cheaper than maintaining it, software engineering moves from polishing implementations to defining strict interfaces, tests, and intent."
pubDate: 2025-08-12
category: "AI in Engineering"
featured: true
diagram: "disposable"
---

When I first used AI to write software, I tried to make the generated code something I would feel proud to have written myself. That was the wrong instinct. The code is a byproduct; what actually matters is defining what the system must do.

Most teams still treat AI coding tools as autocomplete on steroids, a faster way to produce the same artifacts inside the same workflow. That misses what happens once generation speed outpaces the practices built for hand-written code.

## Speed Breaks Old Rituals

I used to think through an approach at a whiteboard before writing a line of code, reading surrounding modules carefully, weighing abstractions, and choosing names meant to last for years.

With modern coding models, that sequence feels strangely slow. Why spend twenty minutes debating one implementation on a whiteboard when you can generate three working candidates in five minutes, run tests against all three, and keep the one that behaves best?

The friction appears immediately afterward. Code reviews still spend hours debating stylistic polish on functions that may not exist next month. Engineers get rewarded for carefully maintaining code that is already cheap to throw away. Teams caught between hand-crafted quality rituals and machine-speed generation get the worst of both worlds: too slow to capture the speed, and too fast for traditional line-by-line review to keep up.

## Designing for Disposability

Once regenerating an implementation is cheaper than maintaining it, the source code stops being the primary asset.

Regeneration, however, is rarely clean by default. Ask a model to rewrite a module from scratch and it may subtly alter an edge case, drift from an interface contract, reintroduce a bug you fixed in March, or drop a performance optimization. Every naive regeneration risks silently erasing hard-won operational knowledge.

The way out is to separate what must stay stable from what can be replaced:

- **Stable interfaces and strict boundaries.** Design systems that safely contain whatever an AI generates inside well-defined contracts.
- **Explicit intent.** Document inputs, outputs, invariants, and failure modes clearly.
- **Tests as the source of truth.** When you need a change, update the specification and behavioral test suite, then regenerate, rather than manually patching drifting code.

Under that model, code review changes character. Spending an hour reading generated implementation line by line yields diminishing returns. Reviewing whether the behavioral tests cover the real failure modes, whether constraints reflect production reality, and whether architectural boundaries stay intact is where senior engineering judgment actually pays off.

## Clearer Specs Between Product and Engineering

Before AI, specifications could stay vague because engineers filled in the blanks while writing code. Over time, the code itself became the only accurate specification, and one that most product managers could not read.

Regenerative workflows don't tolerate ambiguity. An AI needs edge cases, constraints, and expected behaviors spelled out explicitly. That forces product and engineering to have sharper conversations upfront, writing down intent in plain language both sides can inspect and agree on.

It's the engineering discipline most organizations always claimed they wanted. The difference now is that the workflow stops letting you skip it.
