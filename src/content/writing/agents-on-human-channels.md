---
title: "Agents on Human Channels: Trust, Scale, and the Reverse Turing Problem"
description: "What happens when autonomous AI agents hit email, WhatsApp, and phone lines built for people, and why enforceable commitments matter more than smarter models."
pubDate: 2026-02-19
category: "Agents, APIs & Discovery"
featured: true
flagship: true
diagram: "waves"
---

I was planning a trip to Porto and wanted to book a wine tour in the Douro Valley: small group, local guide, under 300 euros.

It's a simple request. You could hand it to an AI agent today, and here is what that agent actually runs into.

One tour operator has a website with a booking form last updated in 2018. Another answers only on WhatsApp. Another is a guy near Pinhão station who mostly speaks Portuguese. Some never respond. Some are fully booked while still showing availability. Some are scams. None of them have an API.

To book one wine tour, an agent has to cross multiple channels and languages, filling out web forms, sending WhatsApp messages, and making phone calls when nothing else works.

Every new wave of communication is supposed to kill the last one. They never do; they just layer on top. AI agents are the next layer, except they interact with the world across four waves running in parallel:

1. **You talk to a chatbot.** Familiar and contained.
2. **The agent calls you.** Outbound voice and messaging initiated by a business system.
3. **Agents use human channels on your behalf.** Email, WhatsApp, and phone lines designed for people, now carrying traffic where one or both ends may be software.
4. **Machine-to-machine exchange.** Agents stop pretending to be human and negotiate directly over structured protocols with explicit identity, authority, and commitments. That wave barely exists yet.

Because some businesses expose clean APIs while others run on WhatsApp and a paper notebook, the four waves stack and run simultaneously. That creates three problems that smarter language models alone don't solve.

## The Reverse Turing Problem

Alan Turing asked whether a machine can pass for human. That problem is solved; machines do it every day.

The new problem runs in the opposite direction. When an AI agent contacts a business, it has no reliable way to know what's on the other end. It could be a person, another agent, a scam, or a voicemail box that has been full since December.

Online identity today (TLS certificates, CAPTCHAs, login pages) was built for humans interacting with services. None of it tells an outbound agent what it's dealing with before it acts.

A human adjusts instinctively. You're patient with a person, direct with another machine, cautious with a scam, and you don't try to negotiate with a voicemail box. An agent that can't tell the difference operates with broken context. It makes small talk with another agent that just wants structured JSON. It pesters a small tour guide in the Douro Valley with machine persistence. It waits for a reply from an inbox nobody checks.

The original Turing Test asked whether a machine can fool a human. The Reverse Turing Problem asks whether a machine can read the room. The agents are already shipping without an answer.

## Scale Breaks Human Channels

Now add volume. A person comparing wine tour operators contacts three. An agent contacts fifty, then systematically retries the ones that did not respond, on channels sized for human attention.

If agent traffic hits human inboxes and phone numbers at machine scale without identity, rate controls, or routing rules, the outcome is predictable: people will simply stop answering.

## Trust and Enforceable Commitments

The real bottleneck here is trust, not computer science. An agent can already find options, compare itineraries, and negotiate a price. What breaks down is accountability.

Can the agent commit to a booking on my behalf? Can the tour operator trust that commitment enough to hold four seats on Saturday? If the tour doesn't happen, or if the customer never shows up, who's accountable: me, the agent provider, or the operator who accepted a message from software?

Today, two people make that kind of deal over the phone and rely on social norms and a bit of luck. Most of the time, it works. An agent booking a thousand tours an hour can't run on hope. It needs verifiable identity, clear authorization limits, and commitments that both sides can enforce.

Everyone is building more capable agents. Almost nobody is building the infrastructure that makes their commitments real across the long tail of the economy.
