---
title: "More Jobs, USAJobs Scraper, Jekyll Tweaks"
author: Bill Hunt
type: post
date: 2023-03-08-T21:06:59-0500
permalink: /blog/2023/03/08/usajobs-jekyll-tweaks/
layout: post
excerpt: I've added more job postings from USAJobs and wrote a script to pull from their API. I've also made some ridiculous changes to abuse Jekyll to make this site work better.
---

It's been a lot of work for me to keep my [jobs page](/jobs/) up-to-date. Previously, I've been crawling through LinkedIn a couple times a day to try to find all the relevant IT jobs. However, many were still getting missed. So I signed up for the [USAJobs API](https://developer.usajobs.gov/), and wrote [a script to scrape relevant technology jobs](https://github.com/krusynth/usajobs-feed) from it. (As always, that script is open source, so you can take it and manipulate it for your own regular searches.) My default settings only searches for GS-12 and above, technology-related job series (2210, 1550, 1560), does not include defense, intelligence, and law-enforcement agencies: DOD, DOJ, and most of DHS are excluded (except for CISA and FEMA).

I only post the most interesting results on my jobs page, but I figured some folks would want access to the full list of positions, so I've set up [a new page for all the results from that search](/jobs/usajobs/), and it has its own [RSS feed](/usajobs.xml) as well. I'm not 100% happy with this setup, since the main jobs feed has a few jobs that are not federal jobs, and thus don't show up on the usajobs feed, so there's no "comprehensive" jobs feed today; you'll have to check both to see all the jobs. But that's work for another day.

As a result of these additions, I realized that my site was quickly becoming a spaghetti mess of code. To clean this up, I've rationalized the growing number of RSS feeds, only these are now discoverable:

* [Main Feed](/feed.xml) - only includes [my posts](/blog/), and [posts from my recommended section](/recommended/). No jobs on this feed.
* [Jobs Feed](/jobs.xml) - everything on the [jobs page](/jobs/).
* [USAJobs Feed](/usajobs.xml) - everything on the [usajobs page](/jobs/usajobs/).
* [Enderprise Architecture Feed](https://www.youtube.com/feeds/videos.xml?channel_id=UCSL7BIdwgBEZ09BpD9xPPYQ) - my [YouTube videogame series](https://www.youtube.com/@EnderpriseArchitecture)

I also completely redid both the [RSS feed template](https://github.com/krusynth/billhunt.dev/blob/www/_includes/feed.xml) and the [list template](https://github.com/krusynth/billhunt.dev/blob/www/_layouts/list.html) to simplify showing many different types of content using a single layout. To achieve this, I've had to do some truly unholy hacks to Jekyll.

Jekyll - well, [Liquid](https://shopify.github.io/liquid/), technically - allows you to set your own custom variables on a page, but it doesn't allow you to set the value of hash elements. So I wrote [a plugin to allow you to do this](https://github.com/krusynth/billhunt.dev/blob/www/_plugins/setval.rb). The HUGE caveat here is that pre-defined values are *not* writable - meaning if you have a loop of posts, the `post.content` cannot be overridden - it'll throw an error. To get around that, I'm hacking in new values instead, things like `post.afterwards` for content I want to append to the bottom of the post.

For pages like the main RSS feed, I'm also using some hacks to create empty arrays, and then iterate through the various content types, massaging them into new formats that work with the simplified templates. In this way, I have been able to remove most of [the custom handling logic from the templates](https://github.com/krusynth/billhunt.dev/blob/f0935e5593e759f5337d3afddd79fb508fb8f479/_includes/feed.xml#L13-L42), and put it all into [the individual pages](https://raw.githubusercontent.com/krusynth/billhunt.dev/www/jobs.md). It's much cleaner this way.

Though I really, really wish Jekyll natively supported the manipulation of hashes and arrays. I was unable to find a way to create an entirely new Hash, and I would love a way to override predefined values as well. Ah well.

So that's a lot of new stuff! Hopefully some of you folks will find some of these various hacks and tools useful!