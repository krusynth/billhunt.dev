---
title: "Mastodon: Good Enough For Now"
author: Bill Hunt
type: post
date: 2022-12-30-T14:29:19-0500
permalink: /blog/2022/12/30/mastodon-good-enough-for-now/
layout: post
excerpt: I don't think Mastodon will stick around forever, but here's why we should embrace it fully for now.
---

Over the last few months I abandoned Twitter and started using Mastodon. I subsequently ended up starting a [new mastodon community of public interest tech folks](https://www.publicinterest.town/). Through this process, as well as updating [my policy bot](https://botsin.space/@EOPbot) to run in this new environment, I've learned a bit about the technology being used here.

At its core, Mastodon is a jumble of open standards, most notably [ActivityPub](https://www.w3.org/TR/activitypub/). As the name indicates, this is a publishing model - that is, it's a "push" architecture. When someone "follows" you on Mastodon, they're adding their name to a list of subscribers on your server, and when you publish a new post, your server then sends it out to those people. However, Mastodon is also *federated* which effectively means that copies of your content end up on the followers servers as well.

This is in contrast to, say, the Twitter model where everything lives on a single website that everyone is already on, or the RSS feed model, where you *pull* rather than push new content from the host website.

The result of this is that it can be very problematic to have a single popular person on an instance that you run - an underprepared server can quickly be overwhelmed by such a chatty protocol at the core of things. And moreover, caching layers can do very little here to soften the blow. You cannot run a mastodon-like service as a static website.

Those are problems fundamental to ActivityPub, not just Mastodon - but Mastodon has some rather prevalent issues as well. It's good software, but there's no way around the fact that it's bloated. A massive React frontend sits atop a Rails application - you simply cannot build the assets on a server with less than 2Gb of RAM.

The developers seem like sharp folks, but they also are very slow to adopt features which already exist in their competitors. My corner of the Fediverse has been up-in-arms over the fact that quoted-posts are not enabled (though "quote-Tweets" have existed on Twitter for quite some time). I am not a fan of this particular feature myself, as I believe that it encourages abusive behavior. But moreover, other key features to curb abuse are notably missing, such as turning off replies to individual posts, [though a request for the feature has been open for **four years**](https://github.com/mastodon/mastodon/issues/8565).

More than just technical shortcomings, this is turning a blind eye to the needs of the communities they are supporting.

(There is, of course, also Darius' brilliant fork called [Hometown](https://github.com/hometown-fork/hometown) which is somewhat more thoughtful in this regard.)

---

However, Mastodon serves an important purpose - it gets people used to the concept of decentralization again. The 2010s brought a wave of centralization of social platforms, resulting in just a few huge places that everyone spends their time. Mastodon is once again teaching folks how to spread out and build their own small communities.

It also exposes some of the old pain points, most notably the problem of [finding your people online](/blog/2022/11/28/weaving-the-web/). Hopefully this friction will nudge folks towards [more collaborative and sustainable methods of finding people of shared interests](/blog/2022/12/30/bringing-webrings-back/).