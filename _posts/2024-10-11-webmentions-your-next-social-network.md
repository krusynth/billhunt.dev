---
title: "Webmentions - Your Next Social Network"
author: Bill Hunt
type: post
date: 2024-10-11-T15:21:51-0400
permalink: /blog/2024/10/11/webmentions-your-next-social-network/
layout: post
excerpt: A web-first way to collaborate.
---
It's been a while since I've blogged or worked on web-projects. Honestly, I've been wrapped up in [my YouTube channel](https://www.youtube.com/@EnderpriseArchitecture) (where I play building-related videogames and just hit 1100 subscribers!) so other projects have fallen by the wayside. Over there, I've found a very engaged community with lots of communication. Unfortunately, a lot of that communication is through a large number of separate Discord servers, which acts as a bit of a walled garden. I'm not a fan, yet I've started [a Discord for YouTube channel](discord.gg/nufnDkvFG9) all the same, because that's what the kids are doing these days.

Discord very much feels like the old message board days, which is fine, but it doesn't feel like I'm every in my own personal space the way that LiveJournal and Tumblr or even my own little website did. I want to feel more of a sense of ownership over my own space, while still being able to communicate with colleagues and friends. To that end, I've started down the [Webmentions](https://indieweb.org/Webmention) rabbithole. Webmentions is an open web standard used by [IndieWeb](https://indieweb.org/) sites that allows compatible sites to send "mentions" to other sites.  Basically, you can enabling a federated system of commenting across blogs, sort of like what Wordpress offers but IndieWeb-friendly, even for those of us who run static sites only.

If you remember [Pingbacks](https://wordpress.com/support/comments/pingbacks/) from the old days of Wordpress, it's a pretty similar operating model. I can write an article that mentions another site, and when I run a notification script it will send a web request to that site to let them know I mentioned them. The script checks the receiving site for a line of html metadata in the head that tells it where to send the notification. It looks like this:

```
<link rel="webmention" href="https://webmention.io/billhunt.dev/webmention" />
```

You do need a listener on the other end to store the requests in a database somewhere. If you use Wordpress (assuming you don't work for WPEngine I guess), there's already [a plugin](https://wordpress.org/plugins/webmention/) that will do most of the work for you. I'm using Jekyll which is a static site generator, so I outsource the collecting of responses to [Webmention.io](https://webmention.io/), a free service that just handles webmentions for you.  Then during my static build process, I pull all of the webmentions down and show them on my site using the [Webmentions Jekyll plugin](https://aarongustafson.github.io/jekyll-webmention_io/).

I actually enabled this feature a few months back and have been sending infrequent mentions, but only just *received* [my first webmention](/blog/2022/11/28/weaving-the-web/#mentions) a few weeks back! I've now incorporarted those comments into my page layout, so hopefully I'll be receiving lots more friendly comments in the future.

Of course, this is still dependent on a third party service to handle webmentions - but there's no reason you couldn't build your own and use it. (Careful readers will note that you'll want to avoid any infinite loops of showing webmentions from folks who have mentioned you, who then get notifications you've mentioned them in your list of mentions, and then they show another mention on their side, etc. So far, I haven't seen this happen yet, but just a heads-up for folks who are hacking together their own code.) I'm happy to outsource this work to Webmention.io for the time being, however.

---

Thanks to the way the Webmentions spec is designed, you could easily use this to create a collaborative microblogging system. I've been noodling on the idea of having a custom post category, "micro", which would be used as a replacement for my Mastodon account. As folks reply with their own "micro" posts on their blogs, webmentions would network these together, creating a rich mesh of conversation.

The big missing feature here for purely static systems remains a decent moderation interface. Abuse will always exist. Building yet another network system without taking this into account would be reckless and negligent.

Creating inherent blocklists that can *easily be shared and subscribed to* would be a simple solution - one that, I will note, Mastodon still lacks. Another tool could be allowlists based on your own list of connections, assuming you've built a friends list of some sort, like what [I've done with my links page using FOAF, etc.](https://billhunt.dev/blog/2022/11/28/weaving-the-web/) This would provide the basis for a "friends-only replies" feature for what shows up in your mentions (another feature Mastodon still lacks, after years of requests for it). It certainly wouldn't stop folks from blogging about you abusively, but at least they would not show up in your mentions.

---

The problem of discoverability that I've talked about before (see previous link in the paragraph above) remains. If anything, this problem is now far worse since Google and other search engines have stopped scraping websites and are now filled with garbage. Indie federated search remains one of my dream projects, for another day.

In the meantime, the only way for us to start taking back the web is to talk about each other and the awesome work everyone else is doing, rather than just talking about ourselves all the time. This is a paradigm shift back to when the web was young, when we would lift each other up - rather than the navel-gazing content-creation capitalist app-based hellscape we're currently trapped in. We must actively water each other's gardens so that we can share fruit in the future.

---

I've very much been enjoying the ability to have a completely static site with dynamic features, including comments and search - but I fear that I'm reaching the boundaries of what can be done without actually having a dynamic site again. With Wordpress making lots of questionable decisions for a long while now, I feel like there is a big gap where someone could create a new PHP-based drag-and-drop blogging solution that adopts modern standards. Something with native RSS support for *reading*, webmentions, search, ease of use and installation for non-nerds, all of the good things - without all of the bloat that WP brings to the table.

I've been dancing around my own small projects: RSS readers with mentions, microblog systems, federated search - but I simply haven't had the attention span to write code at that level of depth for a long time. Perhaps in the cold winter months to come, through caffeine and electronica I will find the inspiration.

Basic tooling is also a frustration for me. PHP sadly remains the best option for building drag-and-drop installation apps that run on cheap hosting providers; this is the main reason Wordpress retains its foothold in the market, even with other options available. I started looking at other PHP so-called microframeworks, but I have yet to find one that isn't massive and bloated. I've been slowly tinkering with resurrecting [my ancient PHP framework, Valvalis](https://github.com/krusynth/valvalis/), to make a modern microframework to build just such a project - but the journey from PHP 4 to PHP 8 is a long one, and I don't agree with all of the decisions the PHP community has made along the way. Perhaps a little heresy is called for.

---

If any of these sorts of things sound like your sort of interest, drop me a note. Or better yet, blog about it and drop me a webmention about this article!

Looking forward to hearing from you, cyberpunks.
