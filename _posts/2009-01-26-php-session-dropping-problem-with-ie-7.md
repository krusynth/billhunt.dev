---
title: PHP Session Dropping Problem with IE 7
author: Bill Hunt
type: post
date: 2009-01-26T20:51:12+00:00
permalink: /blog/2009/01/26/php-session-dropping-problem-with-ie-7/
layout: post
---
We were just struggling [here at work][1] with an insane problem where IE 7 (and ONLY IE 7) was **dropping sessions for PHP**. Literally, we would try a trivial test case of creating a session and a new session id (generated with the session\_id() function) would appear each time. Checking the session\_save_path showed that new sessions were being created each time. In the end, we discovered that **IE 7 will not save session cookies if there is an underscore in the domain name**. (Our development sites frequently have an underscore in the subdomain name &#8211; it&#8217;s amazing that we hadn&#8217;t found this out earlier.) We&#8217;ve replaced the underscore with a hyphen, and everything appears to work correctly.

 [1]: http://hotels.vibeagent.com "VibeAgent"