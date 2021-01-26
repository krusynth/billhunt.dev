---
title: "Presenting EOPbot"
author: Bill Hunt
type: post
date: 2021-01-25-T20:08:35-0500
permalink: /blog/2021/01/25/presenting-eopbot/
layout: post
excerpt:
  "If you're like me, you may be having trouble keeping up with all the new Executive Orders and OMB Memos that the Biden Administration is putting out.  To help, I've created a little bot to look for changes on specific pages of the White House website: @EOPbot!"

---

If you're like me, you may be having trouble keeping up with all the new Executive Orders and OMB Memos that the Biden Administration is putting out.  To help, I've created a little bot to look for changes on specific pages of the White House website: [@EOPbot](https://twitter.com/EOPbot)!

When I worked for the Office of Management and Budget (OMB), I generally had the inside track on most IT policies as they were being drafted. However, I didn't usually get to see every Executive Order (EO) or presidential action until after they were published. Now that I work for a Federal agency, it's even harder for me to keep up with all the changes that we have to implement.

And the Biden Administration has been **busy**! In just his first week, President Biden has already issued [31 official actions](https://www.whitehouse.gov/briefing-room/presidential-actions/) and [two OMB memoranda](https://www.whitehouse.gov/omb/information-for-agencies/memoranda/) - that's a lot! To help me stay on top of all of these policy changes, I went back to my civic tech roots and created a simple web scraper to monitor for changes to the White House website. Of course, it wouldn't be civic tech if I didn't share the resource with everyone, so I started [pushing the results to Twitter](https://twitter.com/EOPbot). I also [released the code](https://github.com/krusynth/EOPBot) under an open source license as well.

I'm hoping to add support for other types of presidential actions in the future - perhaps tracking the documents of other key executive agencies such as the
Office of Science and Technology Policy (OSTP) and the Office of Personnel Management (OPM). Although the White House has an RSS feed for its posts, I also plan to add an RSS feed to EOPbot as well, so that the non-EO actions can also be followed.

If you find something broken, or if you'd like to suggest an improvement, please [send me a tweet](https://twitter.com/krusynth) or [open an issue](https://github.com/krusynth/EOPBot/issues)!