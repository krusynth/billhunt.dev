---
title: 'XHTML: The Myth and You'
author: Bill Hunt
type: post
date: 2006-07-24T15:24:10+00:00
permalink: /blog/2006/07/24/xhtml-the-myth-and-you/
layout: post
---
A couple of years back, XHTML became the big new buzzword for webdevelopers and everyone (myself included) jumped on the bandwagon, converting all of their pages from HTML 4.01. However, what we didn’t realize at the time was that we were being lied to. And as a result, most everyone is still using it incorrectly.

<!--more-->



Tommy over on the SitePoint blogs wrote a [great summary][1] of the entire topic. Here are a few facts.

  * IE 6 and before don’t support XHTML. They pretend like they do, but they really are just rendering as HTML.
  * IE 7 isn’t going to support it, either.
  * If your page isn’t being served up with a header including a content type of `Content-Type: application/xhtml+xml`, it’s not really XHTML, and won’t be rendered as such. This can’t be done with a metatag &#8211; only the webserver can add this header.

So, in short, using XHTML is both wrong and impractical. So, if you’re going to use it, be aware that you’re either going to have to use it wrongly, or you’ll have to make your page effectively inaccessible to 90% of your users. Maybe in a few years, Microsoft will get around to supporting XHTML.

 [1]: http://www.sitepoint.com/forums/showthread.php?t=393445