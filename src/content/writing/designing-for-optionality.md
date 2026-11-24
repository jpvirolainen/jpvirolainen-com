---
title: "Designing for Uncertainty: The Cost of Changing Your Mind"
description: "Why early architectural choices harden into untouchable legacy systems, and why strategic optionality matters even more in AI-first stacks."
pubDate: 2025-05-29
category: "Systems & Organizations"
featured: false
---

Every established engineering organization has at least one system nobody dares touch.

A system I built many years ago still runs a major service today. It has survived language migrations, team turnover, and changing product requirements. While other systems from the same era were rewritten from scratch, that one kept adapting.

The difference was designing under the assumption that our early assumptions would be wrong.

Most legacy traps start with premature certainty: assuming the framework, team structure, vendor, or usage pattern will stay roughly as it is today. Early decisions that lock you in rarely look large at the time. They set like concrete, and five years later the only way to change direction is demolition.

The question I start with in system design is simple: *what's the cost of changing my mind later?*

In finance, this is strategic optionality: structuring commitments so that adapting to new information doesn't require tearing down the foundation. In software, it means paying attention to where boundaries belong, isolating volatile dependencies behind stable interfaces, and resisting premature coupling to any single vendor or runtime detail.

In AI-heavy systems, optionality isn't optional. Model behavior changes with every update. Cost curves invert in months. Tooling stacks turn over faster than annual planning cycles.

Every system eventually hits change it wasn't designed for. Systems built for stability at the expense of adaptability turn into technical debt and get replaced. Systems designed to keep reversal cheap outlive the teams that wrote them.
