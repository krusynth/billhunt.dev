---
title: Defensive Programming
author: Bill Hunt
type: post
date: 2010-04-09T19:51:42+00:00
permalink: /blog/2010/04/09/defensive-programming/
layout: post
---
As a web developer, the greater part of my job is not creating new apps, but hacking together disparate software packages into Frankensteinian amalgamations that (supposedly) work together seamlessly.  This is universally a headache, as the original authors tend to write code thinking that their app is the only one that will be installed.  [WordPress][1], [Vanilla][2], and [Interspire&#8217;s Email Marketer][3] are some of the worst offenders that I struggle with regularly.

When coding your own brilliant application, there are a few simple things you can do to avoid potential collisions and headaches later, especially if anyone else will be using your code.  Here are a few areas to pay attention to.<!--more-->

### Namespace

First and foremost, you need to watch out for collisions. If you&#8217;re not using a language with built-in namespacing (e.g. PHP <5.3), you&#8217;ll need to manage this manually. Some areas that you need to watch out for are:

  * Class Names
  * Session Variables
  * Local Variables
  * Constants & Globals
  * Database Tables

Most databases already have a &#8220;users&#8221; table somewhere, and an app of any size is likely to have a variable named &#8220;args&#8221; or &#8220;params&#8221; (or two, or ten&#8230;). For most cases, it&#8217;s usually enough to prefix your names with your application name.  Keeping your names verbose helps, too.

### Program Flow

When writing code, it&#8217;s always a good idea to keep everything to small, reusable functions.  This is especially true of published apps, because your users are very likely to be using your code in ways that your original app is not.  Try to break things down to the smallest possible chunks, even if it looks pedantic in your application.  For instance, break up your createUser() function into separate functions to add the user to the user table, subscribing the user to an email list, adding the user to the default group, etc.

Assume that your code will be executing inside of someone else&#8217;s code.  Try not to use print and echo statements when you can simply pass returned values &#8211; only print as the final step.  (An easy way to fake this is to use output buffering.)  You never know where your output is going anyway &#8211; so don&#8217;t assume that it will be a particular format &#8211; it may end up as HTML, an email body, or in the error log depending on how it&#8217;s implemented.

Pay special attention to any implicit defaults or rules that your code expects.  Don&#8217;t force the code to expect complicated series of objects or parameters that any one else wouldn&#8217;t immediately understand.  Don&#8217;t rely on database restrictions to impose your business rules.

Assume that your code will be glued into an existing user system at some point &#8211; make your user system as user-friendly as possible.  Create big wide hooks that anyone can use later to interact with your user system.  Actually, do this for everything.  (Ok, WordPress, you got that one right at least.)

Keep things wrapped up in nice containers.  Don&#8217;t just leave large procedural chunks lying around for others to trip over.  Don&#8217;t forget to give some attention to your configuration files on this front.

**Don&#8217;t use globals.  Don&#8217;t use globals.  For the love of God, don&#8217;t use globals.  I don&#8217;t care how clever you think you are (I&#8217;m looking at you, [WordPress][1]), you&#8217;re going to screw everyone else up if you use globals.**

### Don&#8217;t Step On Toes

When you&#8217;re managing your resources, it&#8217;s a good idea to be courteous of others.  If you&#8217;re using a database connection or local file, keep a copy of the handle around instead of relying on the implicit &#8220;last opened&#8221; scheme many languages offer.  And since you&#8217;re all such brilliant developers, I don&#8217;t have to remind you to make sure to clean up after yourself &#8211; closing any connections that you opened, deleting any temporary files you&#8217;ve created, and cleaning up any objects you&#8217;re done using.  Even better, write error handling into all of your code so these things are done automatically even if something fails!

One particularly abused area is Session/Cookie management.  I cannot begin to list the number of applications that hijack the session and fill/clear it wantonly.  In general, you should never be destroying a session, or blanking out the entire cookie.  Always sandbox off your content into a hash (using namespaces again), so that you can remove only the content you added.  Also, don&#8217;t ever set the session name directly &#8211; just use the default.  (At least, in PHP you can&#8217;t use two different sessions simultaneously &#8211; setting the session name removes the ability to use any other session).

### In conclusion&#8230;

Do be a considerate programmer.  Do keep good fences (as they make for good neighbors).  Don&#8217;t build giant monoliths (as they attract groups of violent monkeys).  Stick to these rules and you&#8217;ll save everyone a lot of trouble in the long run.

 [1]: http://wordpress.org
 [2]: http://vanillaforums.org/
 [3]: http://www.interspire.com/emailmarketer/