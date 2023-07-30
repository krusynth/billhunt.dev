---
title: "Jobs Page Updates"
author: Bill Hunt
type: post
date: 2023-07-30-T10:20:30-0400
permalink: /blog/2023/07/30/jobs-page-updates/
layout: post
excerpt: >
  I've made some changes to my two jobs pages and associated RSS feeds. Here's what they are.

---

I've made some changes to my two jobs pages and associated RSSfeeds. It has become somewhat laborious to maintain my curated jobs feed, because of all the copying-and-pasting, as well as maintaining two separate but similar jekyll pages.

I also didn't love that my full feed didn't include the non-federal jobs that I found, since I only post jobs that I think would be relevant to my wider audience here.

If you don't like that change I'm sorry, but I don't post *very many* of these other roles so it shouldn't be too noisy.

As such, I've updated my site to only use the usajobs data file as the main feed, and I'm adding curated content *to that* file. The only major change for most people who use this site will be that extra jobs will start to show up in what was originally known as the USAJobs feed.

I don't want to break all the links by changing paths, but the page & RSS feed titles will change.

I've also updated [my associated USAJobs scraper](https://github.com/krusynth/usajobs-feed) so that it merges new data, rather than just overwriting the data file with the latest info. In this way, any custom descriptions, titles, or external job posts will persist across runs of the script. This also could allow for other job data sources to be added to the file as well in the future, but I'm not sure where I'd pull those from yet.

Please let me know if you see any bugs or major issues!