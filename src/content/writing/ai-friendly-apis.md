---
title: "AI-Friendly APIs Don't Need to Be Higher-Level"
description: "Why better coding models weaken the case for workflow-heavy APIs, and where high-level abstractions still matter."
pubDate: 2026-08-27
category: "Agents, APIs & Discovery"
featured: true
diagram: "apis"
---

About a year ago I thought AI-friendly APIs should move up a level. Give the AI `onboard_team` instead of `create_workspace` and `add_users`.

I'm no longer sure that's what an AI needs.

High-level APIs exist for two distinct reasons. One is convenience: they save the caller from writing a pile of glue code. The other is capability: the provider holds information the caller cannot access, or carries responsibilities the caller cannot take on.

That first reason has weakened fast. A modern model can write integration code itself, as long as the underlying primitives are explicit, predictable, and stable.

The second reason hasn't changed. Delivering a message within one minute, reliably, and as cheaply as possible is a different kind of problem. Executing that well depends on live pricing, route quality, and private fraud signals. It also requires enforcing rules the provider owns, such as opt-outs and quiet hours. The caller doesn't have access to any of that.

That leads to a cleaner boundary for API design: give models solid, composable building blocks, and keep higher-level abstractions for cases where the provider can act on information or authority the caller doesn't possess.

It also relieves API providers of trying to anticipate every workflow upfront. With well-designed primitives, the caller can assemble the abstraction it needs.

Better models have already changed my mind on this once, and they will probably do it again. Still, no amount of model intelligence gives a caller private information or authority it doesn't have.
