---
title: Weaving The Web
author: Bill Hunt
type: post
date: 2022-11-28-T20:00:45-0500
permalink: /blog/2022/11/28/weaving-the-web/
layout: post
excerpt: The implosion of a popular bird-enthusiasts website left many people scrambling to find their friends on new social media sites like Mastodon. Let's make sure we can find each other the next time this inevitably happens!
---

**TLDR: Put a damn links page on your blog! And a FOAF file if you're especially nerdy!**

[Skip the rant and jump to the technical discussion of how we fix this.](#tech)

---

A popular internet website was recently purchased by an absolute shitgoblin. Following a series of staggeringly incompetent management decisions, many of its user-people began a mass exodus, including myself. Many of these people who left found themselves in "the Fediverse," the colloquial term for the interconnected networks of [ActivityPub](https://activitypub.rocks/) servers, most notably [Mastodon](https://joinmastodon.org/) (and its popular fork, [Hometown](https://github.com/hometown-fork/hometown)).

Joining a new social network is always a challenge, and particularly daunting when everyone is spread out among many different neighborhoods. I saw a post where someone likened the feeling to that first day of middle school, where everyone is looking around nervously, awkwardly navigating the cafeteria with their tray in hand, looking for their people.

My initial solution was to try to get folks to update their profiles on that _old_ social media site to include their contact info on the _new_ one. I wrote [a script to find them](https://github.com/krusynth/twote), and some smarter folks wrote [even better ones](https://debirdify.pruvisto.org/). However, **only about 20%** of the folks that I follow have left such a note to make themselves findable.

I also wrote [a script to scrape Mastodon servers for a list of people followed by the people *you* follow](https://gist.github.com/krusynth/124f28b1546f08e3da4ddad921867ede), so you can see the most popular folks in your network you may have missed. This also was only moderately successful, though I did find nearly 200 additional folks to follow!

---

Here's a partial list of the online communities I've been a part of over the last 25 years or so. There are probably more, but these are the ones I remember:

* IRC EFnet
* IRC Undernet
* IRC DALnet
* usenet
* AOL
* ICQ
* Geocities
* Angelfire
* Tripod
* Xoom
* Plastic.com
* Friendster
* Myspace
* FriendFeed
* SixDegrees
* LiveJournal
* Flickr
* Yahoo Groups
* reddit.com
* del.icio.us
* Tumblr
* Facebook
* Discourse
* Google+
* Google Wave
* Google Groups
* Orkut
* LinkedIn
* Instagram
* Twitter
* Discord
* Slack
{:.column-list}

For most of these, I was lucky to have been invited to join existing communities; in others, I deliberately built new groups. (Hello former `Bitterland` and `#donuthead` members!)

What this tells me is that **this will not be the last upheaval of shared space**. It has only gotten harder to find people online, and it's even more challenging to stay in touch as various platforms rise and fall.

---

If you've been reading my [other](/blog/2022/09/03/redesign/) [posts](/blog/2022/09/19/social-semantic-web/), you're probably aware that I'm spending a lot of my time thinking about building and maintaining networks of people. Honestly, building is easier than maintaining. For many folks the pandemic showed us how hard staying in touch with other humans can be, especially without a shared space - physical or virtual.

In my communities - mostly tech and tech-adjacent folks - it's pretty common for folks to have their own website as a center point for their digital identities. For younger creators, this is not the case - as such, they are reliant on things like [Linktree](https://linktr.ee/) to unify their various online identities in a cross-referential way. But even the technologists, have largely abandoned blogging - eschewing longform writing for pithy one-liners on social media. (To be fair, some folks have adopted email newsletters - but email always has invoked a sense of panic and urgency for me, and I have never signed up for any.)

The result of this is that our public identities - as represented in online spaces - exist at the whims of billionaires. **You should give [this talk from Bruce Sterling](https://www.youtube.com/watch?v=M7KErICTSHU) your undivided attention for the next fifteen minutes.** Go on, I'll wait. That was _ten years ago_. Notice anything? Hear any words that sounded _prescient_?

My friend [Cuán McCann](https://www.buildwith.org/) often shares this Alice Walker quote: "The most common way people give up their power is by thinking they don't have any."

---
{:#tech}

Our networks are brittle and fragile.  What can we do to build sustainable connections?

(I'm not going talk about actually building communities here - smarter folks have covered that better than I can.)

The web, originally known as the World Wide Web, was so named because it was imagined as a spider's web, a series of interlinked but decentralized points. These days, it's become a depressingly small number of [central nodes](http://internet-map.net/) with a vast miasma of sites around them. But we can change that!

First: you should have a website. And you should keep it relatively up-to-date with your contact info and links to your social media sites at a minimum.

Second: better yet, you should actually use it to write articles - or "blogging" as we used to call it - so that your content is being shared and preserved _on your own terms_. A billionaire _generally_ can't remove posts from your own website. And _do_ share links on your social media sites to these articles so folks can find them!

(I'll write more about good, easy, free options for hosting websites in the near future.)

Bonus points if you have an RSS feed for your posts that's discoverable - just about every blog platform out of the box can produce one these days.

Third, and **most importantly**: work on better means for finding each other.  TLDR: bring back the idea of having a page dedicated to links to your friends' websites, until formats like FOAF gain traction and support. (But use FOAF too!)

---

Longer version – I've been experimenting with the Friend-of-a-Friend, or [FOAF](https://www.xml.com/pub/a/2004/02/04/foaf.html), XML standard. There are a few useful features here of note:

* It's a well-defined standard that's been in use for many years. LiveJournal and Twitter used to support it in the olden days. It's still viable today.

* It lets you specify all of your various social media accounts in one file.

* It lets you list the people you know to create a social graph. Personal websites are the "default" node connection, but there's no reason you can't use any social account.

What's missing, of course, is more tools that make exploring these networks easier. But that's a problem in the existing social networks as well.  We need more sophisticated graph viewers along with adoption to make this truly viable.

So, in the meantime, I'm also adding a good, old-fashioned, [links page](/links/)!  These went out of fashion many years ago as folks moved to make their websites & identities more self-involved. But I've never been interested in current trends.

My site is built on Jekyll, and so both my links page and FOAF file are being generated from a single, extremely simple, [data file](https://github.com/krusynth/billhunt.dev/blob/www/_data/links.yml), paired with a few additional lines in my [config file](https://github.com/krusynth/billhunt.dev/blob/www/_config.yml#L25-L32)!

The data file looks like this:

```
- name: Waldo Jaquith
  url: https://waldo.jaquith.org/
  tags: [civic tech, govtech]

- name: Vyki Englert
  url: https://medium.com/@vyki_e
  tags: [civic tech, govtech]

- name: Hunter Owens
  url: https://hunterowens.net/
  tags: [civic tech, govtech]

- name: Lauren Ancona
  url: https://laurenancona.com/
  tags: [neurodivergence, govtech]

...

```
{:.block}

I told you it was simple! If you can edit links like that, you can easily build a semantic-rich website!

These then get built automatically into a [links page template](https://github.com/krusynth/billhunt.dev/blob/www/_layouts/links.html) and [FOAF file template](https://github.com/krusynth/billhunt.dev/blob/www/xml/foaf.rdf).  They even generate the links to my various social media sites in [my header navigation](https://github.com/krusynth/billhunt.dev/blob/www/_includes/header.html#L23-L28).  [A single line in the html head](https://github.com/krusynth/billhunt.dev/blob/www/_includes/head.html#L14) then makes the FOAF findable by any enabled app or service!

If you're using Jekyll, you can copy these few snippets and be **up and running with a FOAF file and links page _in minutes_!!!**

If you're using another static site generator, it should be easy enough to modify those scripts above. Also, a few folks have built [Wordpress FOAF plugins](https://mortenhf.dk/2004/07/foaf-output.phps) as well!

---

I'm hoping to build more tools for exploring these sorts of connections in the near future to help with discoverability and to maintain these networks in an increasingly-decentralized world.  A few ideas I'm tinkering with:

* Taking FOAF files and turning them into a list of RSS feeds as an [OPML](http://opml.org/) file, easily imported into any popular RSS reader.

* Using FOAF files on my friends' websites for finding second-degree connections of other folks who are worth following.

* Discovering your friends' various social media presences using well-formatted [hCards](http://microformats.org/wiki/hcard) or other microformats.

* Creating services for automatically detecting changes to all of these, so that you can continue to find your people as networks change and evolve.

As always, these are just my half-baked ideas! I'm looking for more folks to have discussions with how we can better build these networks. If you want to talk about it too, tag me in a [post on mastodon](https://mastodon.cloud/@krusynth){:.btn} or just [send me an email](mailto:hello@billhunt.email?subject=Let's%20Talk%20About%20Communities!){:.btn}!

---

**Welcome to the infodomain, [Cyberpunks](http://www.shawnnacol.com/pP-cyberpunk.htm).**


<iframe width="560" height="315" src="https://www.youtube.com/embed/4t9bs1wWxHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>