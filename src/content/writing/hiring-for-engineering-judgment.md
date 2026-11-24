---
title: "Hiring Developers When Code Is Cheap"
description: "Why dropping our coding test over AI was a mistake, and how the requirements for a strong software engineer have piled up over the past decade."
pubDate: 2025-04-17
category: "AI in Engineering"
featured: false
---

Over the years I've interviewed hundreds of software engineers across startups, remote teams, and global organizations. Looking back, the definition of a good developer has kept changing as new requirements stacked on top of old ones.

When we were a small startup, every hire felt high-stakes. We sent candidates a small take-home coding assignment early in the process with 24 hours to return it. It was scoped to take two or three hours, though some clearly spent more. Then we walked through their code and architectural choices together, and the whole team went to lunch with them.

A few candidates pushed back on the effort. One even accused us of trying to extort free labor, as if we were building a company on the back of three-hour exercises making simple REST calls. Even so, the filter worked. It showed who could build, how they reasoned, and occasionally who would be miserable to work with. Over 80% of the engineers we hired that way stayed past two years.

## How the Baseline Kept Rising

When remote work became the default, that same hiring bar stopped being enough. Candidates who interviewed smoothly and passed technical exercises struggled to ship without someone nudging them in person. Remote work didn't invent the need for clear writing and self-direction; it just stripped away the office safety net that used to hide their absence.

Moving into a larger acquired organization brought a similar lesson. Even when people sit in offices, most real coordination happens asynchronously across teams and time zones with people you have never met. Written clarity and independent follow-through mattered even more.

Then generative AI arrived and broke our coding test.

Submissions started looking suspiciously polished, while follow-up conversations revealed candidates who couldn't explain their own code. Our first reaction was to drop the take-home assignment altogether.

That was a mistake.

## Testing for Judgment Instead of Syntax

Wanting a developer who uses AI well is now the default. The red flag is submitting code you don't understand and can't defend in a production context.

The hiring risk has inverted. It is no longer mainly about accidentally hiring someone who struggles to write syntax from memory. It's about missing engineers who know how to direct AI effectively, and hiring people who blindly ship code that turns into 3 a.m. production outages.

What matters in an interview now is how a candidate thinks around the generated code:

- Can they explain why the implementation works and where it will break under load?
- Do they notice when a model is guessing or introducing subtle security and state-management flaws?
- Do they know which parts of a system should remain strictly human-owned (interfaces, data boundaries, failure handling) and where AI legitimately accelerates delivery?

Clear writing, self-direction, asynchronous collaboration, systems architecture, and critical judgment over AI output used to be traits that separated standout senior engineers from everyone else. Today they are close to the baseline.

For all the talk about AI making software development easier, the actual job of a good engineer has gotten harder.
