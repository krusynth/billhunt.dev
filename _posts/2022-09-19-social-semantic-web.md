---
title: Social Semantic Web
author: Bill Hunt
type: post
date: 2022-09-19-T18:54:30-0400
permalink: /blog/2022/09/19/social-semantic-web/
layout: post
excerpt: Thoughts on bringing back older models for decentralized social networks.
parent: https://billhunt.dev/blog/2022/09/03/redesign/
---

I maintain [my concern that the web has gotten worse due to closed social media platforms](/blog/2022/09/03/redesign/), so I have been thinking a lot lately about decentralized models for social networks - as well as existing open standards that can help to close some of the gaps.

In contrast to the community-building I'm most interested in, here are two ongoing culture wars that are on my mind. One is the battle of content creators - particularly those authors of adult content. These folks keep being squeezed out of popular platforms, while their work is copied & exploited by celebrities. Tumblr used to be the primary home of weird fandoms, but a few years back it removed all adult content in an effort to appease Apple with its PG-13 app store rules. Instagram has become one of the more prominent battlegrounds since then, eliminating accounts with reckless abandon.

A friend was just complaining about having to open their **eighth** account after the previous seven have been systematically removed. These creators are being kicked off even when following the platform's rules, due to overly-aggressive moderation policies. For these folks, data portability would be a massive improvement, and owning their own websites from which they can share content is increasingly-critical to maintaining a fanbase. Many folks are using `linktr.ee` as a sort of mini-homepage to get around some of these limitations - but still not setting up their own personal websites.

The other more sinister war is that of white supremacy + domestic terrorism in America and abroad, where disinformation runs rampant on sites like Facebook and Twitter. Hateful content grows like mushrooms on shit in dark corners such as the \*chans, but memes and lies are propagated back to the more mainstream platforms. Decentralization won't fight the spread of hate in dark corners - and may even exacerbate the growth of the number of corners - but it can potentially fight the recommendation algorithms on mainstream sites showing disinformation to "normal" users.

In approaching these issues, I've been thinking about three pieces in particular: [Content Aggregation](#content-aggregation), [Discovery](#discovery), and [Collaboration](#collaboration).

## Content Aggregation

It's clear that folks don't want to visit dozens of separate websites to consume content if they can avoid it, which is how we got where we are today. Content aggregation through feeds via [**Really Simple Syndication (RSS)**](https://validator.w3.org/feed/docs/rss2.html) (or [ATOM](https://validator.w3.org/feed/docs/atom.html), of course) provides a middle ground: authors can maintain control of their content from their own blogs & domains, but readers can consume content from a variety of sources in a single place.

Google Reader was just about perfect as a feed reader, before Google killed it. It was simple and clean, and it even allowed groups to annotate content together! Over the last year I tried out [Feedbin](https://feedbin.com/) and [Feedly](https://feedly.com/), but neither impressed me. Lately I've been trying out [Inoreader](https://www.inoreader.com/) but I will admit that I find the design overwhelming - it feels like it's trying too hard to be a social media site. Also the price for a "team" is way too high - which makes it a hurdle for collaboration. If there are other options that you like and I should consider, please drop me a note!

Most modern feed readers (aka RSS readers, though they typically support more than just RSS) use the [OPML](http://opml.org/) standard for importing & exporting lists of feeds that you follow. This makes it much easier than before to switch between them - again, adding to the portability.

Several of them also offer fake email inboxes for newsletters. As much as people are switching to Substack and similar platforms, I can't say I'm a fan of reading email. As a content consumption experience it always feels... _invasive_, and the formatting is always poor.

## Discovery

Finding your current friends on various sites continues to be a painful process. Finding new content and folks to follow also tends to be difficult. These days most of the new folks I find as a result of other friends sharing their posts on Twitter. These days, most folks only talk about their own work on their blogs, but including references to other folks' content greatly aids discovery. I've added a "microblog" of recommended content to my website here - again taking a nod from 90s websites - thinking it could help folks find new ideas and creators.

I remembered that Livejournal supported the [**Friend-of-a-Friend interchange format (FOAF)**](http://xmlns.com/foaf/0.1/), and allowed you to export a list of the folks that you followed in a single XML file. Such a file could easily be automated on modern self-run blogging platforms like Jekyll, Hugo, Wordpress, etc. The same source content could generate a "links" page like we had on websites in the 90s. I'm adding this to my list of things to tinker with on this Jekyll site.
{:#foaf}

A smart feed reader could even look for a FOAF file and easily help you find your friends' blogs, as an alternative to OPML. That could then help you find your friends-of-friends, to suggest additional content to you that may be relevant - for instance, blogs that are followed by at least X% of the people you follow, or that follow you.

## Collaboration

Collaboration presents a large series of challenges in a decentralized world. For those of us who runs static personal websites, it's hard to see what content is referencing yours. It's even harder to receive comments in a public way that's coherent to your site - replying to a blog post historically requires an account on whatever site you're on, which doesn't really work for static sites built with tools like Jekyll.

Wordpress, due to its widespread use and dynamic nature has been rather successful in this area. The [pingback mechanism](https://wordpress.com/support/comments/pingbacks/) allows even self-hosted sites to receive a notification if another site mentions them. As I understand it, this works through some sort of central repository of content indexes.

Some folks have implemented the Disqus comment platform on static sites, but they had some serious security issues in the past. That also doesn't give an easy way to cross-collaborate - the content is still bound to your website, through a centrally-managed provider.

My research on FOAF led me to a number of [old scholarly articles](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.192.824&rep=rep1&type=pdf) on the **Social Semantic Web** and specifically the [Semantically-Interlinked Online Communities (SIOC) format](http://rdfs.org/sioc/spec/). This format was a way of defining and linking content across multiple sites, which would also allow portability of content. You could write a post on one site and have it federated to other message boards for replies and interaction.

SIOC seemed to have been a popular idea around 2004-2008, but then appears to have died off completely. It seems to have been another of the interesting/weird/way-too-complicated RDF-based projects that arose during the short period when the open standards community got obsessed with **Linked Data**. My initial impression is that it's an interesting model, but too difficult for laypeople to use. Sadly, though there were tools built to natively work with SIOC on Wordpress, Drupal, and other popular blogging engines, all have disappeared today - most lost due to linkrot.

Relatedly, I remain skeptical of the [web annotation movement](https://www.w3.org/TR/annotation-model/) from the same era (e.g. sites like Genius, née RapGenius) due to my work on that W3 committee. The potential for [abuse and harassment](https://elladawson.com/2016/03/25/how-news-genius-silences-writers/) is simply too great and not taken seriously by the community. As such, I've largely rejected the concept, but with some healthy and robust standards-based controls (FOAF? robots.txt?) it could potentially have a place in an RSS reader. (Assuming it would default to opt-in not opt-out!)

For the moment, I think the simplest solution might be the easiest. Most web developers are familiar with the `<link>` metatag and its `rel` attribute, which allows you to define relationships between web pages. Most commonly, we use these for CSS stylesheets, and links to our own RSS feeds on our pages. A less commonly-known attribute is the [rev](https://www.w3.org/TR/relations.html), or reverse, property; basically it's the opposite of `rel`. One could provide a `<link rev="child" href="https://thatsite/over/there/">` in a page's head, as a declaration that the current page is a reply (a "child") of the `thatsite` page referenced. I'm actually testing that out on the page you're currently reading!

However, nothing supports this today, so it doesn't do anything. Again, a clever RSS reader could pull this metadata from an `<entry>` and use it to assemble a content tree - or even notify the original author if they provided the proper metadata in their feed. A site owner could also use their own FOAF list or OPML to scrape for entries that are replies from friends and list them on a given page. This makes for an opt-in model which leaves control in the hands of the original creator. I'll consider this for a later Jekyll plugin project if this concept gains traction.

## Momentum

Which brings us to the root problem - momentum. FOAF hasn't gained traction. SIOC died on the vine. All of these more complicated methods didn't gain mainstream support because they inherently go against the current capitalist model of capturing an audience on one site for increasingly long periods of time. And of course, they're too complicated for the average person to pick up and use the way they can with just plain old HTML.

That being said, my interest here remains in **digital communities** - and I have some half-baked suspicions that communities have an upper bound on how much they can scale sustainably. So maybe you don't need enough mass-market appeal for a billion-dollar company, just a simple collection of tools that your community can support.

I've started with [my little civic tech webring](https://billhunt.dev/civic-tech-webring/) as one example of what can be done at a smaller scale, and I'm starting to think about how a webring could become a "group" (FOAF or otherwise).

As always, if these topics are interesting to you, please [drop me a line](mailto:hello@billhunt.email?subject=Let's%20Talk%20About%20Communities!){:.btn}. Or, maybe create a blog post about the topic yourself ... and let me know about it!
