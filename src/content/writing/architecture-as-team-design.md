---
title: "Architecture Is How Teams Work Together"
description: "What unifying separate native apps and decoupling shared components taught us about breaking cross-team bottlenecks at IDT."
pubDate: 2024-12-19
category: "Systems & Organizations"
featured: true
diagram: "architecture"
---

Solving technical problems at scale comes down to how systems and teams constrain each other.

At IDT, we ran into a familiar trap: we were maintaining separate Android and iOS applications across multiple consumer products. Every bug fix and every new feature had to be implemented twice, and the platforms routinely drifted out of sync.

We moved to Flutter to get to a single codebase and consistent behavior across platforms. At the time it was neither the safest nor the most conventional choice, and the migration wasn't quick. We ran hybrid setups for a long stretch, phasing out native code incrementally until we reached a stable, unified codebase. That alone removed a large amount of duplicated work.

The deeper problem was organizational coupling. With three separate apps and multiple engineering teams, we kept hitting delivery bottlenecks. Teams waited on one another for changes, and an update in one area produced unexpected regressions somewhere else.

To break those dependencies, we stopped building features inside each app individually and moved to standalone, self-contained components communicating over an internal messaging bus. These were bounded subsystems with explicit interfaces that could evolve independently while running across all three products.

Authentication was a good example. Instead of three teams maintaining separate login and onboarding flows, one configurable authentication component handled account setup across all three apps. Each app kept its own branding and workflow configuration without duplicating implementation. A bug fix or security improvement shipped once and benefited every product immediately.

The hardest part of the transition was getting engineers to stop thinking in terms of whole applications and start thinking in terms of bounded components and stable contracts. Once that became standard practice, maintenance overhead dropped, release cadence improved, and teams stopped spending half their week coordinating around each other's queues.

Architecture sets the floor and ceiling for how independently an organization can move.
