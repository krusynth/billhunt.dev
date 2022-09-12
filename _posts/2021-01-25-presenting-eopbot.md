---
title: "Presenting EOPbot"
author: Bill Hunt
type: post
date: 2021-01-25-T20:08:35-0500
permalink: /blog/2021/01/25/presenting-eopbot/
layout: post
image: /uploads/2021/01/fedwifi.jpg
excerpt:
  "If you're like me, you may be having trouble keeping up with all the new Executive Orders and OMB Memos that the Biden Administration is putting out.  To help, I've created a little bot to look for changes on specific pages of the White House website: @EOPbot!"
---

If you're like me, you may be having trouble keeping up with all the new Executive Orders and OMB Memos that the Biden Administration is putting out.  To help, I've created a little bot to look for changes on specific pages of the White House website: [@EOPbot](https://twitter.com/EOPbot)!

<img src="/uploads/2021/01/fedwifi.jpg" height="200" width="200">

**Update 2022.09.11:** I've added posts from the Office of Science and Technology Policy (OSTP) and the Office of Personnel Management to EOPbot! I've also added RSS Feeds for folks who don't use Twitter:
{:.banner}

**All Posts:** [RSS](https://static.billhunt.dev/eopbot/feed/all.rss.xml), [ATOM](https://static.billhunt.dev/eopbot/feed/all.atom.xml)<br>
**Memos &amp; Policies Only:** [RSS](https://static.billhunt.dev/eopbot/feed/filtered.rss.xml), [ATOM](https://static.billhunt.dev/eopbot/feed/filtered.atom.xml)
{:.banner}


When I worked for the Office of Management and Budget (OMB), I generally had the inside track on most IT policies as they were being drafted. However, I didn't usually get to see every Executive Order (EO) or presidential action until after they were published. Now that I work for a Federal agency, it's even harder for me to keep up with all the changes that we have to implement.

And the Biden Administration has been **busy**! In just his first week, President Biden has already issued [31 official actions](https://www.whitehouse.gov/briefing-room/presidential-actions/) and [two OMB memoranda](https://www.whitehouse.gov/omb/information-for-agencies/memoranda/) - that's a lot! To help me stay on top of all of these policy changes, I went back to my civic tech roots and created a simple web scraper to monitor for changes to the White House website. Of course, it wouldn't be civic tech if I didn't share the resource with everyone, so I started [pushing the results to Twitter](https://twitter.com/EOPbot). I also [released the code](https://github.com/krusynth/EOPBot) under an open source license as well.

Since The White House website now runs on Wordpress, it does have [a limited RSS feed for its posts](https://whitehouse.gov/feed/), which includes Executive Orders. However, other actions from the other Executive Office of the President (EOP) offices, such as OMB and OSTP, aren't "posts" and are not included in that feed.

In the future, a well-staffed communications team could publish these items far easier than I can scrape them, both to the website as posts as well as to official twitter feeds. I'd be happy to hand over the **@EOPbot** account to an official government team to pick up this work if anyone in EOP is interested!

In the meantime, if you find something broken, or if you'd like to contribute an improvement, please [send me a tweet](https://twitter.com/krusynth) or [open an issue](https://github.com/krusynth/EOPBot/issues)!