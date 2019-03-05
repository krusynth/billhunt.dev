---
title: 'Scriptaculous: Table issues and Forms'
author: Bill Hunt
type: post
date: 2007-10-18T03:55:43+00:00
permalink: /blog/2007/10/17/scriptaculous-table-issues-and-forms/

---
So I&#8217;ve been playing with <a href="http://script.aculo.us/" target="_blank">Scriptaculous</a> a bit, and doing some debugging. I have a table, in which certain rows would should appear when a link is clicked. I&#8217;ve got it set with a display:none by default and I&#8217;m using Effect.SlideDown to have it appear. Now due to how display and opacity on tables, trs, and tds are handled by just about every browser, there were several unexpected results.

<!--more-->

In Firefox, the row contents would just instantly appear instead of sliding into place. In IE 6 on the other hand, the row would instantly appear, but become unclickable if you clicked outside of the appeared region. The workaround was to wrap the contents in a div, and to make that appear instead of the rows themselves. Unfortunately, there&#8217;s no way to make the table elements behave properly that I&#8217;ve discovered.