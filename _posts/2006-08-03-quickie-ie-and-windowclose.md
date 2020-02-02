---
title: 'Quickie: IE and window.close()'
author: Bill Hunt
type: post
date: 2006-08-03T15:26:46+00:00
permalink: /blog/2006/08/03/quickie-ie-and-windowclose/
layout: post
---
IE tends to do some funny things with its security settings. In particular, if your settings are high enough, window.close() will throw a warning or silently stop working entirely. This is definitely not our preferred behavior, and luckily, there’s an easy hack provided by [FatTonny][1] on the <a href="http://www.sitepoint.com/forums/showthread.php?p=1997379#post1997379" target="_blank">SitePoint Forums</a>.

<code class="codeblock">window.opener = window;&lt;br />
window.close();</code>

That’s all there is too it! Happy coding!

 [1]: http://www.sitepoint.com/forums/member.php?u=40947