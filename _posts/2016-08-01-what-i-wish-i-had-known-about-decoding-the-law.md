---
title: What I Wish I Had Known About Decoding The Law
author: Bill Hunt
type: post
date: 2016-08-01T13:28:54+00:00
permalink: /blog/2016/08/01/what-i-wish-i-had-known-about-decoding-the-law/
layout: post
---
<p dir="ltr">
  After a little over three years of working on <a href="http://www.statedecoded.com/">The State Decoded</a> (and a bit less than that on <a href="https://mymadison.io/">Madison</a>), I’ve learned quite a few things about the law.  The process of translating legal code into machine-readable data is not an easy one, but after thousands of hours working on this problem we’ve made some solid progress in automating it.
</p>

<p dir="ltr">
  What follows are a few lessons about the law that I wish I’d known before starting, which may help other developers to make good decisions in open law and legislation projects.<!--more-->
</p>

<h2 dir="ltr">
  Every Place is the Same
</h2>

<p dir="ltr">
  All of the legal code I’ve encountered so far is somewhat similar. The law in most places consists of many sections (denoted by the § symbol in most places), grouped together by subject area under a hierarchy of structures.  These structures are usually named things like article, chapter, title, appendix, subchapter.  Occasionally one finds things like subsection or subcode.  Sections are generally referred to by their identifier number &#8211; both in the code and by external references.
</p>

<p dir="ltr">
  In many places, there are entirely separate codes for different legal concerns &#8211; the charter is frequently a separate body of code from the other public laws, the administrative code may be broken out, and so forth.  <a href="http://www.sanfranciscocode.org/">In San Francisco, the law is separated into over a dozen individual codes.</a>
</p>

Most structures and sections have some sort of short identifier &#8211; usually numeric &#8211; as well as a title.  Structures may have additional introductory or following text, or just be a list of sections.  Sections usually have a body consisting of paragraphs, sub-paragraphs, sub-sub-paragraphs, and so on &#8211; a sort of internal hierarchy.  These may be numbered with numerals, letters, or roman numerals, so be careful when parsing to determine whether i means 1 or 9.  Referring to a particular paragraph is common, so having permalinks to these is useful.

Sections may also contain tables, images, drawings, maps, and other non-textual information.  These can be used to display zoning areas, show costs over time, or explain the makeup of the city’s flag or seal.

Many structures will begin with a list of legal definitions that are used throughout the sections under that structure, occasionally these will apply to the entire legal code.  It is possible to provide inline definitions of these terms as they are defined by the law code, but you must take into account the scope given for these definitions &#8211; the scope is usually stated at the beginning of the definitions section.

<h2 dir="ltr">
  Every Place is Different
</h2>

<p dir="ltr">
  From city to state to federal, almost every government agency and body has a different system of law.  This means that every new city or state will have a different system of naming, numbering, and structuring their laws.
</p>

One city may use hyphens to segment numbering structures &#8211; such as in Chicago (e.g. §1-8-010) &#8211; another may use periods, and some places, like San Francisco, use both (§1.13-5).  There may be numbers or numbers and letters or in the case of appendices, letters only.  Numbers may be sequential within a section, or there may be numbers missing entirely.  Sometimes numbers are sequential for the entire legal code, more often they are not.

Due to complexities in both the legislation and codification process, a legal code may change format in the middle.  For instance, in San Francisco’s Charter, Article XVI, §16.123 covers Civilian Positions with the Police Department, but all of the §16.123-* codes are for The Arts, Music, Sports, and Pre-school for Every Child Amendment of 2003.  In cases where codes are reused in whole or in part from other sources, such as building codes, the numbering may be entirely different in the middle of a structure. (We’ll come back to other problems with building codes in a minute.)

<h2 dir="ltr">
  Data Consistency & Quality Issues
</h2>

<p dir="ltr">
  In many legal codes, a section identifier may be used multiple times, especially in those codes that have multiple bodies broken out.  It’s not unusual to have two or more sections numbered §1-1 in a legal code, with the article, chapter, and/or title, etc. needed to differentiate the actual section that the number refers to. (Here are a couple of examples from Baltimore, they use this numbering pattern in almost every Article: <a href="http://baltimorecode.org/10/1/1-1/">[1]</a>, <a href="http://baltimorecode.org/01/1/1-1/">[2]</a>, <a href="http://baltimorecode.org/16/1/1-1/">[3]</a>, etc.)  This means it’s often not possible to use a single identifier to uniquely identify a law.  With The State Decoded, to solve this we provide an option to use permalinks that reflect the full structural hierarchy.
</p>

In a few places, sections of law do not have titles (aka “catch lines”), only a numeric identifier.  Since titles are extremely useful, the legal publishers in a given place may add their own titles &#8211; but as of the time of writing this, they are able to claim copyright over these titles and not provide them as part of the open legal data itself.  [When we encountered this in Maryland, we used Mechanical Turk to pay volunteers to create new, free, public domain titles for the entire legal code.][1]  It didn’t cost us very much money to have the nearly 32,000 titles added, and now the entire code is much more usable.

Frequently, sections of the code will be removed via legislation.  These may still appear in the published law code but labelled Removed, sometimes with a short explanation.  In some cases, particular numbered sections may be listed as Reserved, where the legislative body intends to put new code in the future but hasn’t done so yet.  The effect of this is that structures may end up having no actual sections, such as [this one in San Francisco][2].

Since legal terms and section numbers will appear repeatedly throughout a section, this can wreak havoc on weighted-term search engines, such as Solr/Elasticsearch/Lucene, which end up miscalculating averages.  This is especially problematic if you’re storing multiple historical versions of the law code (more on this below).

<h2 dir="ltr">
  Copyright and The Law
</h2>

<p dir="ltr">
  Although in general the law is considered to be public domain &#8211; freely usable by anyone, without cost or restriction &#8211; there are ongoing legal battles attempting to restrain it with copyright and usage agreements.  If you want to avoid costly legal fees, it’s safest to make sure you have the official blessing of the place whose law you’re republishing before attempting to do so.  <a href="http://www.latimes.com/business/hiltzik/la-fi-mh-state-of-georgia-copyright-wall-20150727-column.html">Georgia recently sued Carl Malamud for republishing their laws.</a>
</p>

Furthermore, many places cannot afford (or choose not to spend the money) to have all of their laws written from scratch.  Most notably, building codes are routinely re-used from the  International Code Council’s (a.k.a. ICC) publications, which are protected by copyright.  [Although the 5th Circuit court has ruled that these codes included as part of the law are not protected][3], many places would rather not involve themselves in legal battles, and will not publish their own building codes!

They may also take an alternate route, and simply make references to other building codes instead of including these texts directly &#8211; commonly called incorporation by reference.  San Francisco makes reference to California’s building codes, which itself uses the ICC’s codes.

Furthermore, many legal publishers have added additional commentary and annotations to the existing law codes.  Since this supplementary information is not part of the actual legal code itself, it is not in the public domain, and they are under no obligation to provide it to anyone. In fact, many companies exist primarily to sell access to this data.

<h2 dir="ltr">
  The Law Changes Over Time
</h2>

<p dir="ltr">
  As with most things, the law is constantly growing and changing. Converting the law into a digital format is not a one-time event &#8211; it is an ongoing process that requires time and effort.  Some places update their legal code every week or two, some only once or twice a year.
</p>

This is often because the process of codifying the law is usually separate from the legislative process.  In most places, a body of elected officials will vote on bills to determine changes to the law, but the bills do not always say exactly how the new law precisely will read.  This means that someone else will have to interpret the bill to create a new wording.  This may then be handed off to yet another group &#8211; frequently an outside vendor &#8211; to actually incorporate into the law, with numbering, etc.

All of this means that digitizing the law once is not enough to stay current and relevant, it must be updated as often as the official code is.  You probably also will want to keep multiple versions of the code over time, to be able to show what the law was at any point in history.

<h2 dir="ltr">
  The Law as Written Is Not Always The Law
</h2>

<p dir="ltr">
  The nature of our democracy in the United States allows for judicial review, which can overturn or interpret particular aspects of the law.  This means that even if you have the official text of the code of law, you might not know the actual law or how it is applied.  To determine the full law, you must refer to other sources.
</p>

With The State Decoded, for states we are able to include opinions and cases via [Court Listener][4]’s API.  However, we don’t have a reliable way of showing these for cities.  And decisions in courts can frequently impact potential future decisions in other courts on similar topics, even if they’re not covering the same jurisdiction.

Pending legislation may also change the law in the future, and that’s a good thing for people to know about &#8211; as the law as written today may change tomorrow.  A bill that’s already been enacted may not take effect until a particular date in the future.

<h2 dir="ltr">
  The Law Does Not Mean The Same Thing in Different Places
</h2>

<p dir="ltr">
  Since the definitions of particular terms are specific to a given place &#8211; or even a specific section of code for a particular place &#8211; these terms are not universal, which makes it hard to compare laws directly.  In one city, a month may be 30 days, or 31, or specific to a given reference for a month.
</p>

There have been some attempts at creating an ontology of law to provide a way of universally comparing similar ideas.  However, since the law is written in Word or WordPerfect in most places, this metadata has to be added downstream, and is not easily automated.

<h2 dir="ltr">
  Standards, Formats, and Standard Formats
</h2>

<p dir="ltr">
  Standards in data are critical for making tools interoperable.  It’s important to use existing standards whenever possible to make sure that in the future everyone’s tools will be able to talk to each other and share data.  Whenever possible, you should try to leverage popular existing standards for your data interfaces, and should almost never invent your own!
</p>

When work began on The State Decoded, there were no obvious standard formats for legal code.  [I wrote in more detail about standards for the law a few years back.][5]  Since that time, [Akoma Ntoso][6] ([A][6].[N][6].[)][6] has become the most popular standard format to distribute legal code internationally.  It’s an XML schema which provides everything you need to break up the law into usable data.  A similar format, USLM, is used by the US House of Representatives and we used to focus on that for compatability.  However, USLM lacks the flexibility of Akoma Ntoso for different types of documents, and A.N. has become much simpler to implement.  It also allows for additional microformats within the data, which helps with the ontology problem.

In general, you’ll need a way to store highly structured data to properly represent the law.  XML is ideal because it can handle the nesting and inline markup associated with legal code.  JSON is not a good choice, since it’s designed for strict hierarchical structures and is awful at inline markup.

For database storage, many groups use eXistdb, which stores XML documents natively &#8211; however, since both [MySQL][7] and [PostgreSQL][8] now have native support for XML and XPath similar to eXistdb, they are fantastic choices for this.  I strongly recommend breaking up the law code into sections for each record, rather than keeping structures together or breaking things into paragraphs, as this makes it much easier to work with the data.

<h2 dir="ltr">
  And that’s just to start
</h2>

<p dir="ltr">
  There will undoubtedly be more issues that come up that I haven’t run into yet, but above are a lot of the ones I’ve run into over the last three years.  If you encounter others or know something I don’t, <a href="https://twitter.com/krues8dr">please get in touch and let me know</a>!
</p>

&nbsp;

* * *

<h2 dir="ltr">
  Updates
</h2>

[Harlan Yu][9] points out, _&#8220;Another fun example: 26 USC 401(e) & (j) were repealed but subsections not renumbered b/c everyone refers to 401(k).&#8221;_ [<small>(original)</small>][10]

[Kristin Hodgins][11] says that Canada is similar to the US in most of these, except copyright: _&#8220;Unlike in the US, s 12 of Canada&#8217;s Copyright Act provides for crown copyright, which applies to all govt publications. Some Cdn jurisdictions provide licence to freely reproduce legislation.&#8221;_ [<small>(original)</small>][12]

 [1]: https://opengovfoundation.org/capturing-catching-titles-giving-readable-titles-to-marylands-legal-code/
 [2]: http://library.amlegal.com/nxt/gateway.dll/California/publicworks/article2publiccontractprocedure?f=templates$fn=default.htm$3.0$vid=amlegal:sanfrancisco_ca$anc=JD_Article2
 [3]: https://www.law.cornell.edu/copyright/cases/293_F3d_791.htm
 [4]: https://www.courtlistener.com/
 [5]: http://www.opengovfoundation.org/setting-the-standards-for-open-government-data/
 [6]: http://www.akomantoso.org/
 [7]: http://dev.mysql.com/doc/refman/5.7/en/xml-functions.html
 [8]: https://www.postgresql.org/docs/9.2/static/functions-xml.html
 [9]: https://twitter.com/harlanyu
 [10]: https://twitter.com/harlanyu/status/762649137057767425
 [11]: https://twitter.com/kristinhodgins
 [12]: https://twitter.com/kristinhodgins/status/762738387048542208