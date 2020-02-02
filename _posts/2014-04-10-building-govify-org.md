---
title: Building Govify.org
author: Bill Hunt
type: post
date: 2014-04-11T00:01:41+00:00
permalink: /blog/2014/04/10/building-govify-org/
originallyappeared_site_name:
  - OpenGov Foundation Blog
originallyappeared_site_url:
  - http://opengovfoundation.org/govify-org-the-story-behind-opengovs-april-fools-prank/
layout: post
---
<h3 dir="ltr">
  A Brief Summary
</h3>

<p dir="ltr">
  After a hackathon a few months back, we were joking about creating an easy way to take the data we&#8217;d painstakingly parsed from PDFs, word documents, and XML files, and &#8220;translate&#8221; it back into a format that government agencies are used to. Many of us have been shell-shocked in dealing with PDFs from government agencies, which are often scanned documents, off kilter and photocopied many times over. Fundamentally, they&#8217;re very difficult to pry information out of. For the OpenGov Foundation&#8217;s April Fools&#8217; prank, we created <a href="http://govify.org">Govify.org</a>, a tool to convert plain text into truly ugly PDFs.
</p>

<h3 dir="ltr">
  <!--more-->Implementation
</h3>

<p dir="ltr">
  A quick, [one-line ImageMagick command](https://gist.github.com/krues8dr/9437567), was the first version. We quickly produced a few sample documents, and decided that it would be fantastic if users could upload their own files and convert them. Very quickly it became clear that the process might take a couple of seconds, and a decent amount of CPU &#8211; so to deal with any sort of load, we&#8217;d need a modular, decentralized process, rather than a single webpage to do everything.
</p>

&nbsp;

<p dir="ltr">
  Hidden troll of <a href="https://twitter.com/FoundOpenGov">@FoundOpenGov</a>&#8216;s Govify is that front end is PHP, deploy is Ruby, worker is Python, & conversion is a shell script. <a href="https://twitter.com/search?q=%23nailedit&src=hash">#nailedit</a>
</p>

<p dir="ltr">
  — Ben Balter (@BenBalter) <a href="https://twitter.com/BenBalter/statuses/451011271018942464">April 1, 2014</a>
</p>

&nbsp;

<p dir="ltr">
  As <a href="https://twitter.com/BenBalter/">Ben Balter</a> points out, there are a lot of moving pieces to this relatively-simple setup. Govify.org is actually a combination of PHP, Compass + SASS, Capistrano, Apache and Varnish, Rackspace Cloud services and their graet API tools, Python and Supervisord, and ImageMagick with a bash script wrapper. Why in the world would you use such a hodgepodge of tools across so many languages? Or, as most people are asking these days, &#8220;why not just build the whole thing with Node.js?&#8221;
</p>

&nbsp;

<p dir="ltr">
  The short answer is, the top concern was time. We put the whole project together in a weekend, using very small pushes to build standalone, modular systems. We reused components wherever possible and tried to wholly avoid known pitfalls via the shortest route around them. A step by step breakdown of those challenges follow.
</p>

<h4 dir="ltr">
  Rough Draft
</h4>

<p dir="ltr">
  We started with just a single <a href="https://gist.github.com/krues8dr/9437567">ImageMagick command</a>, which:
</p>

<li dir="ltr">
  <p dir="ltr">
    Takes text as an input
  </p>
</li>

<li dir="ltr">
  <p dir="ltr">
    Fills the text into separate images
  </p>
</li>

<li dir="ltr">
  <p dir="ltr">
    Adds noise to the images
  </p>
</li>

<li dir="ltr">
  <p dir="ltr">
    Rotates the images randomly
  </p>
</li>

<li dir="ltr">
  <p dir="ltr">
    And finally outputs all of the pages as a PDF.
  </p>
</li>

<p dir="ltr">
  Using that to create a few sample documents, we began putting together a rough website to show them off. Like everyone else who needs to build a website in zero time, we threw <a href="http://getbootstrap.com/">Bootstrap onto a really basic template (generated with </a><a href="http://html5boilerplate.com/">HTML5 Boilerplate</a>. We use a few <a href="http://sass-lang.com/">SASS</a> libraries &#8211; <a href="http://compass-style.org/">Compass</a>, <a href="https://github.com/jlong/sass-bootstrap">SASS Bootstrap</a>, and <a href="https://github.com/meticulous/keanu">Keanu</a> &#8211; to get some nice helpers, and copied in our standard brand styles that we use everywhere else. A few minutes in photoshop and some filler text later, and we had a full website.
</p>

<p dir="ltr">
  We needed a nice way to deploy the site as we make changes, and our preferred tool is <a href="http://capistranorb.com/">Capistrano</a>. There are other tools available, like Fabric for Python or Rocketeer for PHP, but Capistrano excels in being easy to use, easy to modify, and mostly standalone. It&#8217;s also been around for a very long time and the one that we&#8217;ve been using the longest.
</p>

<p dir="ltr">
  We&#8217;re using <a href="http://www.rackspace.com/">Rackspace</a> for most of our hosting, so we stood up box with Varnish in front of Apache and stuck the files on there. Website shipped! <img alt="ship it!" src="https://lh4.googleusercontent.com/nJEFt67pywgNqyUI18Uao5KQA3IBaz1SAnxMS3muVM4HitF7AHqu5EwaKTdISXXEr-cHbRBf437T3HcXIweOREJP_nXfiMRS-XeyC67dRYzx77Q2BBq5Mq_Z54dut_n75A" width="20px;" height="20px;" />
</p>

<h4 dir="ltr">
  Web Uploading
</h4>

<p dir="ltr">
  Once that was done, we made the decision to allow users to upload their own files. At OpenGov, we&#8217;re primarily a PHP shop, so we decided to use PHP. OK, OK &#8211; stop groaning already. PHP is not the most elegant language in the world, and never will be. It has lots of horns and warts, and people like to trash it as a result. That being said, there are a few things it&#8217;s great at.
</p>

<p dir="ltr">
  First and foremost, it&#8217;s incredibly easy to optimize. Tools like <a href="http://www.php.net/manual/en/book.apc.php">APC</a> and <a href="https://github.com/facebook/hhvm">HipHop VM</a> which allow you to take existing PHP scripts and make them run *very* well. The variety and diversity of optimization tools for PHP make it a very attractive language for dealing with high-performance apps, generally.
</p>

&nbsp;

<p dir="ltr">
  Second, it&#8217;s a &#8220;web-first&#8221; language, rather than one that&#8217;s been repurposed for the web &#8211; and as a result, it&#8217;s very quick to build handlers for common web-tasks without using a single additional library or package. (And most of those tasks are very well documented on the PHP website as well.) <a href="http://www.php.net/manual/en/features.file-upload.php">Handling file uploads in PHP is a very simple pattern.</a>
</p>

&nbsp;

<p dir="ltr">
  So in no time at all, we were able to create a basic form where users could input a file to upload, have that file processed on the server, and output back our PDF. Using the native PHP ImageMagick functions to translate the files seemed like a lot of extra work for very little benefit, so we ran kept that part as <a href="https://github.com/opengovfoundation/govify">a tiny shell script</a>.
</p>

&nbsp;

<p dir="ltr">
  At this point however, we realized that the file processing iself was slow enough that any significant load could bring slow the server considerably. Rather than spinning up a bunch of identical servers, a job queue seemed like an ideal solution.
</p>

<h4 dir="ltr">
  Creating a Job Queue
</h4>

<p dir="ltr">
  A very common pattern for large websites that do processing of data is the job queue, where single items that need processing are added to a list somewhere by one application, and pulled off the list to be processed by another. (<a href="http://upload.wikimedia.org/wikipedia/commons/0/0c/Thread_pool.svg">Visual explanation</a>, from the Wikipedia Thread Queue article.) Since we&#8217;re using Rackspace already, we were able to use Rackspace Cloud Files to store our files for processing, and the Rackspace Queue to share the messages across the pieces of the application. The entire Rackspace Cloud stack is controllable via their API, and there are nice libraries for many languages available.
</p>

&nbsp;

<p dir="ltr">
  On our frontend, we were able to drop in the <a href="https://github.com/rackspace/php-opencloud/">php-opencloud library</a> to get access to the API. Instead of just storing the file locally, we push it up to Rackspace Cloud Files, and then insert a message into our queue, listing the details of the job. We also now collect the user&#8217;s email address, so that we can email to let them know that their file is ready.
</p>

&nbsp;

<p dir="ltr">
  The backend processing, however, presented a different set of challenges. Generally, you want an always-running process that is constantly checking the queue for new files to process. For processes that take a variable amount of time, you don&#8217;t want just a Cron job, since the processes can start stacking up and choke the server &#8211; instead we just have a single run loop that runs indefinitely, a daemon or service.
</p>

&nbsp;

<p dir="ltr">
  For all the things that PHP is good at, memory management is not on the list. Garbage collection is not done very well, so large processes can start eating memory rapidly. PHP also has a hard memory limit, which will just kill the process in an uncatchable way when it dies.
</p>

&nbsp;

<p dir="ltr">
  Python, on the other hand, does a rather admirable job of this. Creating a quick script to get the job back out of the Rackspace Queue, pull down the file to be manipulared, and push that file back up was a rather simple task using the <a href="https://github.com/rackspace/pyrax">Rackspace Pyrax library</a>. After several failed attempts in trying to use both the python-daemon and daemonize packages as a runner for the script, we reverted to using <a href="http://supervisord.org/">Supervisor</a> to keep the script going instead.
</p>

&nbsp;

<h4 dir="ltr">
  Final Thoughts
</h4>

<p dir="ltr">
  Obviously, this isn&#8217;t the most elegant architecture ever created. It would have made far more sense to use a single language for the whole application &#8211; most likely Python, even though very little is shared across the different pieces aside from the API.
</p>

<p dir="ltr">
  That being said, this thing scales remarkably well. Everything is nicely decentralized, and would perform well under significant load. However, we didn&#8217;t really get very significant load from our little prank &#8211; most people were just viewing the site and example PDFs, and very few were uploading their own. Sometimes overengineering is its own reward.
</p>

<p dir="ltr">
  Not bad for three days of work, if I do say so myself.
</p>

<p dir="ltr">
  All of the pieces are available on Github and GPL2 licensed for examining, forking, and commenting on.
</p>

<li dir="ltr">
  <p dir="ltr">
    <a href="https://github.com/opengovfoundation/govify">Govify Shell Script</a>
  </p>
</li>

<li dir="ltr">
  <p dir="ltr">
    <a href="https://github.com/opengovfoundation/govify-site">Govify Web Site & Uploader</a>
  </p>
</li>

<li dir="ltr">
  <p dir="ltr">
    <a href="https://github.com/opengovfoundation/govify-worker">Govify Worker Script</a>
  </p>
</li>