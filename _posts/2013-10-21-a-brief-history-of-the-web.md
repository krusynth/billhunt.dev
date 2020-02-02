---
title: A brief history of the web
author: Bill Hunt
type: post
date: 2013-10-21T22:16:11+00:00
permalink: /blog/2013/10/21/a-brief-history-of-the-web/
layout: post
---
A few months back, there was a rather interesting discussion on Reddit about different internet technologies. I put the following comment together as a bit of historical perspective.  In retrospect, it&#8217;s probably not 100% accurate, and a bit or a rant, but I figured other people might find it interesting.

<!--more-->Your webserver back in the old days was probably

**NCSA HTTPd** if your host hadn&#8217;t switched over to **Apache**. Apache is still one of the most popular webservers today. NCSA HTTPd, not so much. Apache is written in **C**, but you don&#8217;t need to know any C to configure it. Webservers generally deliver files, most often **HTML** which is just a marked up text file, but also images and videos and audio and pdfs and anything else you want.

A few years later and you also commonly see **Nginx** as a webserver and Microsoft&#8217;s **IIS** on Windows servers.

Programming on the web pretty much started with CGI scripts and was purely server-side. Back in the early nineties, this is how we did things &#8211; generally a **C** program that was compiled, and set to receive input from the webserver and do something with it &#8211; your form emailers and counters and guestbooks and so forth. You really don&#8217;t see much of this any more.

Most people switched over to **Perl** as an easy way to write scripts, rather than using compiled executables. Perl is notoriously hard to read and write, but a pretty good language for string processing (which is basically all the web is at the core). It has declined in popularity significantly over the last ten years or so.

**Java** began to show up more for web use towards the end of the nineties. These days, it&#8217;s synonymous with &#8220;Enterprise&#8221;, and generally used for large business applications. It&#8217;s a very dense language, and lots of frameworks exist for it, including ones like Spring, Hibernate, Struts, etc. Many, many other languages have grown up around Java, including **Scala**, **Clojure**, and **Groovy**.

**PHP** showed up about then as well, and quickly became the most widely-used language on the web. This was primarily due to its friendliness, ease of use, and ease of deployment &#8211; you could just drop scripts on a server the same as with html files and run them. Since PHP is so easy to use, _lots_ of hobbyists have picked it up, and a large amount of awful code and poor tutorials have been written with PHP. Even so, the changes since version 5 have been increasingly bringing PHP towards the modern era, and it&#8217;s actually quite good these days. (Haters gonna hate.) There are many frameworks for PHP, including Symfony, CodeIgniter, Laravel, Cake, Zend, and others. Several of the most popular Content Management Systems (or **CMS**) are written in PHP, including **Drupal**, **WordPress**, and **Joomla**.

**Ruby** was gaining steam by the early 2000s. Based off of **Smalltalk**, it&#8217;s a very &#8220;smart&#8221; language that&#8217;s actually a lot of fun to write. It&#8217;s got a lot of niceties that do help you write code with less effort. The joke is that hipsters use Ruby, but it&#8217;s really a great language. It also has a fantastic package manager **RubyGems** / **gem**. **Rails** is the most popular framework for it; most other web frameworks often tend to just be clones of Rails. It&#8217;s a very opinionated framework, though &#8211; with lots of, what we call in the programming world, &#8220;magic&#8221;. Another popular framework is **Sinatra**, which is a thinner framework.

**Python** has technically been used on the web as long as PHP, but still doesn&#8217;t have very much marketshare. It is, however, used for not-web things frequently, especially among academics. In some schools, it has replaced **Basic**as the first language to teach children, due to its friendliness. The most popular framework is **Django**, though there is also **Pyramid/Pylons** and **Flask**.

**ASP** also needs a mention, though it is not an OpenSource language like the others, and owned by Microsoft. You often see it in conjunction with **.Net**, and it&#8217;s very popular for use in large corporations (pretty much anywhere you might otherwise see Java). It&#8217;s not very friendly, IMHO.

In the last few years, some older &#8220;purely functional&#8221; languages have come to popularity as well, including **Haskell**and **Clojure** (outgrowth of **Lisp**).

Now, you still needed somewhere to store all of your data, so the first popular databases came about. Most of these were **ANSI SQL** variants, and so behave almost identically, with the main differences being under the hood. These include:

**MySQL** : Still one of the most popular databases in use on the web. There&#8217;s a popular fork known as **MariaDB** as well, which gives you a few new tricks (like server clusters!).

**PostgreSQL**: probably the second most popular. (I&#8217;m guessing.)

**MSSQL**: the obligatory Microsoft version.

and **SQLite** which actually just operates on text files and is super lightweight.

And last, there&#8217;s **Oracle** which is a megalithic company all to itself, as well as a database, and a _Business Intelligence_ service provider. Large organizations, colleges, and universities give them lots of money to make their systems go.

And then you have the no-SQL data stores that came to popularity in the last ten years or so, which generally are non-relational document stores. There are _lots_ of these, but a few of note are:

**Memcache** was one of the first and most popular, especially since Facebook picked it up.

**<a id="mongodb"></a>MongoDB** which gives you a lot of the abilities of a relational DB.  Mongo has recently received a lot of negative criticism due to fundamental flaws in implementation.  [[1][1]] [[2][2]] [[3][3]]

**CouchDB** another Apache project that uses JSON to store data.

**Cassandra** yet another Apache project, designed for high-availability of large amounts of data

**Tokyo Cabinet** and **Kyoto Cabinet** successors of **dbm**.

Now, going back for a second, we eventually wanted browsers to be able to do some neat things, so **Javascript**came about &#8211; a programming language that runs in your browser. It actually doesn&#8217;t have much in common with Java, regardless of the name, and is actually an outgrowth of **ECMAScript**, which also gave us **ActionScript** which is used in Adobe&#8217;s **Flash** multimedia platform.

There are many, many Javascript frameworks. The old bunch, which mainly made writing code a bit easier and doing things like animations, included **Prototype**, **Scriptaculous**, and **jQuery**, and newer ones such as**Underscore**, and **Zepto**. The new bunch is are more similar to traditional web frameworks, giving Models and Views (and _sometimes_ Controllers or otherwise just Routers), including **Backbone**, **Ember**, **Knockout**, and **Angular**.

In the last few years, **Node** has appeared, as a way of using Javascript on the server-side. It&#8217;s actually very performant for IO operations, but suffers from being relatively young, and people are still finding the best ways to use existing frameworks with it.  Still, it provides an excellent package manager called **NPM** which is ver similar to **Ruby**&#8216;s.

 [1]: http://pastebin.com/raw.php?i=FD3xe6Jt
 [2]: http://nyeggen.com/blog/2013/10/18/the-genius-and-folly-of-mongodb/
 [3]: https://jira.mongodb.org/browse/PYTHON-532