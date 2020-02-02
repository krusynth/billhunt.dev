---
title: 'Mysql, PHP: Internationalization'
author: Bill Hunt
type: post
date: 2006-07-10T15:31:04+00:00
permalink: /blog/2006/07/10/mysql-php-internationalization/
layout: post
---
Oh, man. This was a toughie. What follows is an account of how to deal intelligently with foreign characters and data entry in PHP/MySQL.

<!--more-->



So I’m working on a site, and realize that I need to handle foreign names within content. No fun. So I change my MySQL table to use `utf8_general_ci`, instead of ye ‘ol `latin1_swedish_ci` (which does funny things like equivolating umlaut-u to “y”), and, of course, convert all of the columns as well.

Now, this looks like it’s working fine until I take my DAO and start trying to edit content, at which point it freaks out and shows foreign characters all wrong. I make sure the html document doctype is set properly, only to discover that the PHP MySQL client (i.e., Mr. mysql\_query() function) is actuallystill using latin1\_swedish! I hack a bit of code into my DAO, so that I can override this on a per-table basis, by having it run the following once as a normal query immediately after connecting:

**

** <code class="codeblock">SET NAMES utf8;</code>

At this point, everything works great. Except for one little catch &#8211; `RLIKE` and `REGEXP`, the core of my tokenized search engine, work based on latin1_swedish again, so not only is ‘Ç’ != ‘C’, but I can’t even search within that foreign text for native characters. Which messes everything up. Anybody got any good ideas?