---
title: "ATARC Cloud Summit 2022 – Complexity"
author: Bill Hunt
type: post
date: 2022-10-19-T09:16:45-0400
permalink: /blog/2022/10/19/atarc-cloud-summit-2022/
layout: post
excerpt: An annotated version of my talk from this year's ATARC Cloud Summit.

---

I've been invited to deliver the "Visionary Keynote" at the [2022 ATARC Cloud Summit](https://atarc.org/event/2022-cloud-summit/). The post below is a summary of my comments, annotated with links for reference.

-----

First off, "visionary" is a pretty tall order for a fifteen minute talk. I will confess that I actually asked some other folks to take this slot instead, people who are way smarter than me. Unfortunately, they had to cancel at the last minute, so you're stuck with me, a mediocre white dude. I'll do my best though.

It's been a few years since I spoke at the ATARC Cloud Summit. The last time, I _think_ I was still at [The Office of Management and Budget](https://digitalpolicy.us/info/policymaking-offices/#ofcio) as the Cloud Policy Lead for the US Government - but I've since left there, so don't take anything I say here as official policy. I next went to the Small Business Administration - which most folks had never even heard of until two years ago - where I found myself very suddenly supporting pandemic relief efforts, of course mostly around cloud services. And about a year and a half ago I joined the Securities and Exchange Commission to run their new cloud program.

Before I get into the looking-ahead stuff, let's take a quick victory lap. The government has had some good cloud successes recently. Clearly some of you listened to my rants when I was at OMB because every major federal agency received an [A on their FITARA Scorecards for Data Center Optimization for the last year](https://oversight.house.gov/legislation/hearings/fitara-140). I think most agencies were failing the last time I was here, so that's a huge shift away from on-prem and into the cloud.

The pandemic also spurred most agencies into adopting cloud tools more rapidly, particularly around productivity, collaboration tools, service management, and other key areas. The [Technology Modernization Fund](https://tmf.cio.gov/) has also been making a lot of loans for improvement projects as well. Overall, we're seeing lots of multi-million dollar investments in modernization across government.

That all being said: I'm not going to stand up here and yell a bunch of buzzwords that you should go invest in. I'm not going to talk about synthetic data or web3 or whatever is hip this week. We're not doing resume-driven development today.

No, instead we need to talk about how we're still failing to use the cloud effectively. I'm now at my fourth federal agency, and I'm still seeing the same basic mistakes being made government-wide.

Ernst & Young just did a survey and [only 7% of government leaders say that their organization is reaching its digital transformation goals.](https://www.ey.com/en_gl/government-digital-innovation/how-can-government-workers-and-technology-align-to-serve-future-citizens). Just 7%! And that matches what I'm seeing when I talk to my colleagues across government. This means that just buying a bunch of cloud is not magically making us successful at IT modernization. Which will come as a surprise to no one.

Now, when I was here last, I told y'all the three top reasons to move to cloud: better security, more capability, and increased speed to deliver solutions. (Note that cost savings is **not** on that list.) But we, as a government, love to fall back into comfortable patterns and familiar policies - so we keep copying old behaviors into new environments - and those behaviors are dragging down any potential benefits here.

I spend a lot of my time working on how to fix this, and I've realized an important fact: we are not "Cloud Architects" or "Site Reliability Engineers" or "Data Center Practitioners."  We are actually **Complexity Wranglers**.  Down there in the part of the job description that says "other duties as assigned" - buried in that bit is our main role: to assess and manage complexity in IT systems.

The purpose of cloud is _not_ to just give you a place to put your apps that isn't a government data center. No, the purpose is to make complexity *more manageable*. The cloud itself is never going to reduce how complex your architecture _actually_ is - you're just moving that complexity to less-visible places, or shifting the responsibility around. And in some cases that's good, and in some cases that's ... less good.

Let me give you an example: I'm at a data-centric agency, and compute makes up about 60% of my cloud bill right now. Every time I see someone create a virtual machine in my environment instead of using a managed service, I consider that a failure. When I see a new EC2 box spun up instead of a Fargate instance or some other managed service, that to me means someone doesn't know a better way to solve the problem at hand than to just use the same old solutions they've been using for a decade or more: get a server and run some code on it. Letting your cloud vendor be responsible for some of that complexity is the whole point of using these services. (This isn't an endorsement for that vendor in particular, that's just an anecdotal example - please feel free to substitute your own favorite cloud vendor in there instead; the principle is the same.)

This is also why I'm no longer really worried about vendor lock-in for Infrastructure-as-a-Service; if you can just pick everything up and shift to a new provider easily, you haven't properly invested in a solution. It's like having a new apartment and living out of cardboard boxes six months after you moved in. If you're just using the cloud for compute and storage, you may as well stay in your data enter where it's cheaper. Moving up the stack is _good complexity_, the kind we need to invest in.

By the way, this is right there in the [Federal Acquisition Regulations, Part 12](https://digitalpolicy.us/policies/procurement/#far): **buy before build**. Use Commercial-off-the-Shelf (COTS) software. Don't cobble together your own solutions for solved problems.

Now on the other end of the spectrum, I see people spending way too much money on over-architected, painfully convoluted solutions. This is particularly problematic with Platform-as-a-Service offerings and low-code/no-code tools. For instance, I've seen quite a few organizations using one rather well-known Customer Relationship Management (CRM) platform as a content management system or data management platform. That takes a *lot* of custom coding to make work, and you probably would be better off with just a database somewhere. I've also seen agencies build some truly tortuous custom apps on top of service management platforms, where all they actually needed was a spreadsheet and maybe a couple of interns. This is _bad complexity_.

So, if we're complexity-wranglers, we need strategies to deal with complexity, and to differentiate good complexity from bad. Here are a few.

**1. Eliminate complexity.** The absolutely simplest way to deal with complexity is, of course, to eliminate it. I can't count the number of teams who show up on my doorstep with a project plan to use React and Redux and whatever other Javascript tech is popular this week. That stuff is **incredibly expensive** to build and maintain, and honestly you can create a vastly better customer experience without it - just a little progressive enhancement on your webforms will go a long way.

Similarly I get a lot of architecture diagrams for massive high-availability systems with eight nines of uptime and triple-redundant failover - that are internal-only and have less than a dozen users. Users that only work 9-4:30, five days a week. Each nine you add to your availability is going to add a zero to the end of the price, and make it that much more complex than it needs to be.

The other thing the FAR will tell you is that you should be changing your business requirements to fit the software, rather than the other way around. That means making some compromises with your business units to get to something that's affordable and manageable.

**2. Run smaller projects.** We also know that large "big bang" projects almost always fail. [The Standish Group's Haze report](https://www.standishgroup.com/haze) gets cited a lot, and it tells us that only 13% of government technology projects over $6 million succeed. That's a terrible success rate! So the obvious solution here is, just do smaller projects. Smaller projects are inherently less complex. Also incrementally fund projects from ideation, to pilot, and into active development, don't just give millions of dollars to a vendor who promises they will get it done. This will also give you time and options to evaluate if the tradeoffs in complexity are worth it. GSA's [10X model](https://10x.gsa.gov/) is a good example, and the [18F project de-risking guide](https://derisking-guide.18f.gov/), is also super-useful.

**3. Do your homework.** There's a brilliant public servant in the Canadian government named Sean Boots and he talks about [fake COTS and the one-day rule](https://sboots.ca/2020/09/16/fake-cots-and-the-one-day-rule/). That is, if it takes more than a day to implement the solution, it's not a real COTS product. A lot of y'all will remember the "business intelligence" solutions everyone was pushing in the 90s-00s, where you buy the tool and then you spend the next 18 months configuring it to get that "intelligence" back out. We're doing the same thing today with a bunch of new buzzwords. You need to research tools thoroughly before falling into a hype-trap.

**4. Collaborate across agencies.** A great way to research tools and trade best practices is by talking to other federal agencies who have tried things already. ATARC has a lot of working groups, including one for [Cloud & Infrastructure](https://atarc.org/mission-areas/cloud-working-group/). The Federal CIO Council also has a [Cloud & Infrastructure Community of Practice](https://www.cio.gov/about/members-and-leadership/cloud-infrastructure-cop/). Full disclaimer: I'm on the board of both. These are super-helpful places to share information about cloud tools and services.

**5. Develop your cynicism.** You should also work on developing a keen nose for sniffing out BS and thus reducible complexity. This is especially important as we keep delving further into AI/ML/RPA, and other trendy automation tools. Training the models necessary to get value out of those tools takes a lot of time and a lot of data and a lot of money - and you still may not end up with a usable solution. If it sounds too good to be true, it probably is.

**6. Find the balance.** There's no one-size-fits-all amount of complexity that will work for every team. You need to build to your budget and capacity. You're going to get more value the further up the stack you go, but that will also increase the knowledge needed to manage the solutions. A good rule of thumb is to not outpace what your fed staff can keep up with; contractors come and go but at the end of the day the feds will be making the most critical decisions about the technologies. But that also means you need to invest in upskilling those fed staff.

We're short on time, so I've tried to be brief. If you want to learn more, please check out the resources I mentioned earlier, or check out my [Cloud Strategy Guide](https://billhunt.dev/blog/2021/03/07/cloud-strategy-guide/).