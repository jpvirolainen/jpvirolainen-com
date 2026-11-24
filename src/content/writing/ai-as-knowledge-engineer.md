---
title: "AI as the New Knowledge Engineer"
description: "Encoding expert knowledge by hand into Lisp used to be painfully tedious. Modern language models can interview domain experts and preserve tacit expertise before it walks out the door."
pubDate: 2024-11-26
category: "AI in Engineering"
featured: false
---

Years ago, I worked on a project where we encoded an industrial engineer's knowledge about factory design into Lisp code. It worked, and it was painfully tedious. Extracting what a seasoned specialist knows and translating it into explicit rules took months of interviews and manual modeling.

Modern language models change the economics of that work. Instead of relying solely on human analysts to document procedures by hand, an AI designed as a knowledge engineer can interview domain experts systematically, probe edge cases, and structure what it learns into a usable knowledge base.

Human expertise is rarely tidy. Specialists don't think in clean `if X, then Y` tables. Most of what they rely on is tacit: years of trial and error, subtle heuristics, and instincts they struggle to put into a manual.

You see this across almost every operational business. Experienced HVAC technicians recognize the sound of a failing motor before a sensor trips. Long-tenured support staff and small business owners know intuitively how to handle unusual refund disputes or delayed shipments without damaging a customer relationship. When those people retire or leave, the organization rarely loses a document; it loses judgment that was never written down.

An interviewing AI approaches the problem differently. Sitting down with a technician or a business owner, it can start with standard workflows ("How do you usually handle a delayed shipment?") and then follow up on exceptions ("What's a tricky case where the standard rule failed, and what did you do instead?"). Rather than passively recording a transcript, it spots gaps, asks clarifying follow-ups, and organizes the output into structured records.

Once captured, that knowledge serves two distinct audiences. Internally, it compresses onboarding by giving new hires access to edge-case guidance on day one. Externally, the same structured base can power customer-facing assistants that answer questions with the accuracy and judgment of an experienced operator.

Building this well requires two separate AI components rather than one monolithic prompt:

1. **The Knowledge Engineer AI**, tuned to interview specialists, stay inside clear domain guardrails, identify contradictions, and store validated findings in a structured format such as JSON or indexed embeddings.
2. **The Domain Expert AI**, which retrieves and applies that curated knowledge during live internal or customer interactions, backed by an update pipeline as products and policies change.

The hard work is still in the engineering details: controlling hallucinations, verifying what gets written into the knowledge base, and keeping experts engaged when articulating things they normally do on autopilot. Even with those constraints, preserving tacit operational expertise is no longer limited to organizations that can afford years of manual knowledge engineering.
