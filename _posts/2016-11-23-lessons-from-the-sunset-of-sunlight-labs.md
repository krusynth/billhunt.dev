---
title: Lessons from the Sunset of Sunlight Labs
author: Bill Hunt
type: post
date: 2016-11-23T16:37:58+00:00
permalink: /blog/2016/11/23/lessons-from-the-sunset-of-sunlight-labs/
featured_image: /uploads/2016/11/sunlight-small-125x125.jpg
layout: post
---
<p dir="ltr">
  A few months ago, I joined <a href="https://sunlightfoundation.com/">Sunlight Foundation</a> as their Senior Technology Adviser. <a href="https://twitter.com/rightsduff">Kat Duffy</a>, who was then the Sunlight Labs director, brought me on to help bolster their programming efforts and lend support across the organization. However, only a couple of weeks later we learned that <a href="http://sunlightfoundation.com/2016/09/20/statement-from-sunlight-foundations-board-chairman/">Sunlight Labs was being shut down entirely</a>. <!--more-->With the time we had until the official closure, we quickly shifted our focus to

  <a href="http://sunlightfoundation.com/2016/11/01/sunlight-labs-update-nonprofits-step-up-to-preserve-tools-for-transparency/">preserving the legacy of Labs’ work over the last decade</a>.
</p>

<p dir="ltr">
  A quick inventory of our technology assets revealed hundreds of repositories and over fifty servers in various states of decay. A lot of effort would be required to preserve the data and tools for future use. What follows are a few of the lessons from this work.
</p>

<p dir="ltr">
  It’s important to note that Sunlight Labs was never a traditional software development shop – it was always an incubator in which interesting ideas were cultivated. Resources were frequently limited, and delivering new tools and concepts was the top priority. Many of the tools created were never designed to be released. As anyone who’s worked under these constraints can attest, best methods and rigorous practice are often put aside to focus on delivery.
</p>

<h2 dir="ltr">
  Begin with an end
</h2>

<p dir="ltr">
  The most important thing I’ve learned in the last few years is to start all projects with an end in mind. I’ve written previously about <a href="https://krues8dr.com/blog/2016/09/27/the-end-of-the-second-act-of-civic-tech/">the uncertain future of civic technology and nonprofit funding</a>.  We can no longer take for granted that our projects will continue forever. Far too many civic technology projects have effectively become abandonware as a result of lack of foresight.
</p>

<p dir="ltr">
  One effective way of preventing this is to begin your project by thinking about your end goals. Do you want to create a tool for other people to take and use? Is it good enough to simply release some data once and then move on? Is your project one that you’re willing to independently run indefinitely? How long can you expect to be able to work on it? What happens to the project if something happens to you or your organization?
</p>

<p dir="ltr">
  Writing down all of your contingency plans in a public way can help to mitigate these problems when they inevitably come up later. Make sure that you would feel comfortable if you had to walk away from your work tomorrow. Setting a deadline for the end of your work, and communicating this information with stakeholders, can be useful as well.
</p>

<h2 dir="ltr">
  Documentation
</h2>

<p dir="ltr">
  We all are aware of the critical importance of documenting our projects, yet few projects have good documentation. It can be very time-consuming to write down everything that a new person needs to know about your project, but this is absolutely critical work. I recommend doing as much of this work as possible up-front, and making it an integral part of your process moving forward. This is still useful even if your work isn’t writing code for computers – always take the time to write for humans.
</p>

<p dir="ltr">
  In the same way that you have your peers review your work or that you write your tests, make sure to include writing documentation as a step in the process. Make a new rule for your team: if a feature doesn’t have documentation, it doesn’t get merged and it doesn’t ship.
</p>

<p dir="ltr">
  Assume nothing. Although today you may have the luxury of showing every new team member how every system works as part of their onboarding process, that may change suddenly and without warning. Write as if your end user probably knows nothing about your internal process. Make sure you explain every step of using your tools – from getting the data to running and deploying the software. Give examples as frequently as possible, with screenshots and exact commands wherever it makes sense.
</p>

<h2 dir="ltr">
  Licensing
</h2>

<p dir="ltr">
  As a general rule, if your code and/or data doesn’t have a license, no one else can use it. There are huge exceptions to this, but it is almost always easier to be explicit than to hire a legal team.
</p>

<p dir="ltr">
  Since a large number of Sunlight’s projects did not have licenses, I <a href="https://github.com/krues8dr/project-migration">created a tool to add licenses in bulk</a> to all projects that were missing them.  We used the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPLv3 license</a> for most of these, as it is a strong license that requires sharing of modifications to code, helping to preserve these tools for future use.  There are lots of <a href="http://choosealicense.com/">other good licenses</a> to consider, however.
</p>

<h2 dir="ltr">
  Keep a clean house
</h2>

<p dir="ltr">
  One of the more laborious tasks was preparing the many projects to be <a href="https://github.com/sunlightlabs">shared publicly on GitHub</a>. Since a large number of these project had only been stored on an internal GitLab server with no public access, many of them had secure secrets – passwords and API credentials – hardcoded into the source. Frequently, these credentials were stored outside of the usual settings files, and since the credentials were different on every project, tools like <a href="https://rtyley.github.io/bfg-repo-cleaner/">BFG</a> were not enough to find all of them. Again, I ended up having to write a <a href="https://github.com/krues8dr/project-migration">collection of tools</a> to migrate repositories from GitLab to GitHub, to check for potentially problematic files, and to automatically remove credentials from those files. Even after that, it still required many hours of manually reviewing code to check for stray credentials.
</p>

<p dir="ltr">
  For most projects, it’s a better idea to never check in any secure credentials to your repositories in the first place. <a href="https://12factor.net/config">Storing these in the environment instead</a> is a common way of avoiding this situation. If that’s too complicated for any reason, you can always simply use standard configuration files and have Git (or whatever version control tool you prefer) ignore them.
</p>

<p dir="ltr">
  Do remember to keep an example of your configuration file in the repository and up-to-date, though. In one case we were unable to deploy updated code to our server due to an incomplete Fabric configuration, and had to update the code manually on the live server as a result.
</p>

<h2 dir="ltr">
  Pick the simplest solution
</h2>

<p dir="ltr">
  One of the biggest challenges was the large number of simple “brochure” sites that were custom applications written from scratch, instead of using a common off-the-shelf solution. These were difficult for staff to maintain and keep running – often taking three different people to update a single page. In one case, we lost all of the content of a site due to it being built on Heroku using a database service that ceased to exist – we had to scrape the Internet Archive to get the content back. The main Sunlight Foundation website itself was one of the most complicated applications that Labs had created, pulling data from seven different databases – each one a completely different type (including MySQL, PostgreSQL, Mongo, Redis, Memcache, and others) – to deliver the content.
</p>

<p dir="ltr">
  Since Sunlight would no longer have any dedicated technical team, keeping these running wouldn’t be viable. After discussing with the rest of the staff, I picked WordPress as a simple platform for people to be able to manage the content moving forward. We picked WPEngine for managed hosting, so staff could rely on them to handle any technical issues that might arise.
</p>

<p dir="ltr">
  For future projects, I would recommend that developers avoid reinventing the wheel – especially if all that is required is a simple content management system. Working with your staff to identify the needs of a project and finding the simplest solution helps to ensure that things will work long after the developer of that project is gone or is too busy to help. And in most cases, one database is plenty.
</p>

<h2 dir="ltr">
  … But plan for the worst
</h2>

<p dir="ltr">
  A constant pain point was that the architecture of Labs’ software used individual, huge servers that hosted critical pieces of infrastructure shared by all applications, with almost no redundancy. This meant that when the only DNS server or database server went down, most of our applications all failed immediately. This happened several times over the few months while we were shutting down Labs.  This also meant that servers were consistently under-utilized while being incredibly expensive – the monthly AWS bill was over $6,000 per month!
</p>

<p dir="ltr">
  A little bit of extra redundancy can go a long way. Moreover, designing your architecture with small “atomic” pieces can reduce shared dependencies and provide greater stability. This is usually cheaper than running huge servers as well. Running one application per server is a good rule of thumb for smaller tools, and you can always split out services (databases, task runners, etc) as your needs grow.
</p>

<p dir="ltr">
  As a quick aside – over the years, the number of servers I’ve seen fail due to logs filling a hard drive is astonishing. Spend the time to learn how to use tools like <a href="http://www.linuxcommand.org/man_pages/logrotate8.html">logrotate</a> and set up your servers so that something simple doesn’t take down your application.
</p>

<h2 dir="ltr">
  The final steps
</h2>

<p dir="ltr">
  When the time came to shut things down and transfer content, we had the help of many partners. Most notably, the <a href="https://archive.org/">Internet Archive</a> was incredibly helpful in scraping all of our content from a list of sites we provided. Their fantastic <a href="https://archive.org/details/301works&tab=about">301Works project</a> took our our in-house url shortener domain name and a spreadsheet of our links, to preserve those forever so we were able to shut it down entirely (see above about not reinventing the wheel).
</p>

<p dir="ltr">
  One thing that made the transfer process much, much easier was services such as Heroku and Namecheap which allow you to easily transfer a property to a new owner. For both of these, you simply need to provide a username and the transferee needs only to accept – it’s a very straightforward process. GitHub proved to be more complicated, as we first had to add the new owner as an admin of the repositories and then have them manually move the repositories to the new Organization owner – this took a while with so many repositories moving over.
</p>

<p dir="ltr">
  Amazon was the most difficult piece, as we had to create AMIs of our EC2 instances (a very slow process with the aforementioned huge servers) and then grant access (by account number) to the new owners. I was never able to grant access to an S3 bucket to a separate account – whether the documentation is out of date or there was a system bug, I’ll never know –   for most of these I just made the content public wherever possible and sent out links.
</p>

<h2 dir="ltr">
  Wrapping up
</h2>

<p dir="ltr">
  We should always hope that our projects don’t suddenly come to an end without warning.  But we also must plan for the future as it our work may stop tomorrow. Taking steps up early in a project can help to make sure your work lasts beyond the length of your involvement, and that it can be used by as many people as possible. Make sure you invest the time now, so that you won’t need to later.
</p>