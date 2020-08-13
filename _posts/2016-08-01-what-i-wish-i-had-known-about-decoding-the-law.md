---
title: What I Wish I Had Known About Decoding The Law
author: Bill Hunt
type: post
date: 2016-08-01T13:28:54+00:00
permalink: /blog/2016/08/01/what-i-wish-i-had-known-about-decoding-the-law/
layout: post
---
After a little over three years of working on [The State Decoded](http://www.statedecoded.com/) (and a bit less than that on [Madison](https://mymadison.io/)), I’ve learned quite a few things about the law.  The process of translating legal code into machine-readable data is not an easy one, but after thousands of hours working on this problem we’ve made some solid progress in automating it.

What follows are a few lessons about the law that I wish I’d known before starting, which may help other developers to make good decisions in open law and legislation projects.

**Update: In 2020, [the Supreme Court ruled](https://www.documentcloud.org/documents/6878241-Georgia-v-Public-Resource.html) that legal codes, _including annotations_, are public domain works. The text below has been updated to strikethrough portions relevant to these changes.**

## Every Place is the Same

All of the legal code I’ve encountered so far is somewhat similar. The law in most places consists of many sections (denoted by the § symbol in most places), grouped together by subject area under a hierarchy of structures.  These structures are usually named things like article, chapter, title, appendix, subchapter.  Occasionally one finds things like subsection or subcode.  Sections are generally referred to by their identifier number  both in the code and by external references.

In many places, there are entirely separate codes for different legal concerns – the charter is frequently a separate body of code from the other public laws, the administrative code may be broken out, and so forth.  [In San Francisco, the law is separated into over a dozen individual codes.](https://codelibrary.amlegal.com/codes/san_francisco/latest/overview)

Most structures and sections have some sort of short identifier – usually numeric – as well as a title.  Structures may have additional introductory or following text, or just be a list of sections.  Sections usually have a body consisting of paragraphs, sub-paragraphs, sub-sub-paragraphs, and so on – a sort of internal hierarchy.  These may be numbered with numerals, letters, or roman numerals, so be careful when parsing to determine whether i means 1 or 9.  Referring to a particular paragraph is common, so having permalinks to these is useful.

Sections may also contain tables, images, drawings, maps, and other non-textual information.  These can be used to display zoning areas, show costs over time, or explain the makeup of the city’s flag or seal.

Many structures will begin with a list of legal definitions that are used throughout the sections under that structure, occasionally these will apply to the entire legal code.  It is possible to provide inline definitions of these terms as they are defined by the law code, but you must take into account the scope given for these definitions – the scope is usually stated at the beginning of the definitions section.

## Every Place is Different

From city to state to federal, almost every government agency and body has a different system of law.  This means that every new city or state will have a different system of naming, numbering, and structuring their laws.

One city may use hyphens to segment numbering structures – such as in Chicago (e.g. §1-8-010) – another may use periods, and some places, like San Francisco, use both (§1.13-5).  There may be numbers or numbers and letters or in the case of appendices, letters only.  Numbers may be sequential within a section, or there may be numbers missing entirely.  Sometimes numbers are sequential for the entire legal code, more often they are not.

Due to complexities in both the legislation and codification process, a legal code may change format in the middle.  For instance, in San Francisco’s Charter, Article XVI, §16.123 covers Civilian Positions with the Police Department, but all of the §16.123-* codes are for The Arts, Music, Sports, and Pre-school for Every Child Amendment of 2003.  In cases where codes are reused in whole or in part from other sources, such as building codes, the numbering may be entirely different in the middle of a structure. (We’ll come back to other problems with building codes in a minute.)

## Data Consistency & Quality Issues

In many legal codes, a section identifier may be used multiple times, especially in those codes that have multiple bodies broken out.  It’s not unusual to have two or more sections numbered §1-1 in a legal code, with the article, chapter, and/or title, etc. needed to differentiate the actual section that the number refers to. This means it’s often not possible to use a single identifier to uniquely identify a law.  With The State Decoded, to solve this we provide an option to use permalinks that reflect the full structural hierarchy.

In a few places, sections of law do not have titles (aka “catch lines”), only a numeric identifier.  Since titles are extremely useful, the legal publishers in a given place may add their own titles – but as of the time of writing this, they are able to claim copyright over these titles and not provide them as part of the open legal data itself.  [When we encountered this in Maryland, we used Mechanical Turk to pay volunteers to create new, free, public domain titles for the entire legal code.](https://web.archive.org/web/20161218042805/https://www.opengovfoundation.org/capturing-catching-titles-giving-readable-titles-to-marylands-legal-code/)  It didn’t cost us very much money to have the nearly 32,000 titles added, and now the entire code is much more usable.

Frequently, sections of the code will be removed via legislation.  These may still appear in the published law code but labelled Removed, sometimes with a short explanation.  In some cases, particular numbered sections may be listed as Reserved, where the legislative body intends to put new code in the future but hasn’t done so yet.  The effect of this is that structures may end up having no actual sections, such as [this one in San Francisco](http://library.amlegal.com/nxt/gateway.dll/California/publicworks/article2publiccontractprocedure?f=templates$fn=default.htm$3.0$vid=amlegal:sanfrancisco_ca$anc=JD_Article2).

Update: [Harlan Yu points out](https://twitter.com/harlanyu/status/762649137057767425), "Another fun example: 26 USC 401(e) & (j) were repealed but subsections not renumbered b/c everyone refers to 401(k)."

Since legal terms and section numbers will appear repeatedly throughout a section, this can wreak havoc on weighted-term search engines, such as Solr/Elasticsearch/Lucene, which end up miscalculating averages.  This is especially problematic if you’re storing multiple historical versions of the law code (more on this below).

## Copyright and The Law

~~Although in general the law is considered to be public domain – freely usable by anyone, without cost or restriction – there are ongoing legal battles attempting to restrain it with copyright and usage agreements.  If you want to avoid costly legal fees, it’s safest to make sure you have the official blessing of the place whose law you’re republishing before attempting to do so.  [Georgia recently sued Carl Malamud for republishing their laws.](http://www.latimes.com/business/hiltzik/la-fi-mh-state-of-georgia-copyright-wall-20150727-column.html)~~

Furthermore, many places cannot afford (or choose not to spend the money) to have all of their laws written from scratch.  Most notably, building codes are routinely re-used from the  International Code Council’s (a.k.a. ICC) publications, which are protected by copyright.  [Although the 5th Circuit court has ruled that these codes included as part of the law are not protected](https://www.law.cornell.edu/copyright/cases/293_F3d_791.htm), many places would rather not involve themselves in legal battles, and will not publish their own building codes!

They may also take an alternate route, and simply make references to other building codes instead of including these texts directly – commonly called incorporation by reference.  San Francisco makes reference to California’s building codes, which itself uses the ICC’s codes.

~~Furthermore, many legal publishers have added additional commentary and annotations to the existing law codes.  Since this supplementary information is not part of the actual legal code itself, it is not in the public domain, and they are under no obligation to provide it to anyone. In fact, many companies exist primarily to sell access to this data.~~

Update: [Kristin Hodgins says that](https://twitter.com/kristinhodgins/status/762738387048542208) Canada is similar to the US in most of these, except copyright: _"Unlike in the US, s 12 of Canada's Copyright Act provides for crown copyright, which applies to all govt publications. Some Cdn jurisdictions provide licence to freely reproduce legislation."_

## The Law Changes Over Time

As with most things, the law is constantly growing and changing. Converting the law into a digital format is not a one-time event – it is an ongoing process that requires time and effort.  Some places update their legal code every week or two, some only once or twice a year.

This is often because the process of codifying the law is usually separate from the legislative process.  In most places, a body of elected officials will vote on bills to determine changes to the law, but the bills do not always say exactly how the new law precisely will read.  This means that someone else will have to interpret the bill to create a new wording.  This may then be handed off to yet another group – frequently an outside vendor – to actually incorporate into the law, with numbering, etc.

All of this means that digitizing the law once is not enough to stay current and relevant, it must be updated as often as the official code is.  You probably also will want to keep multiple versions of the code over time, to be able to show what the law was at any point in history.

## The Law as Written Is Not Always The Law

The nature of our democracy in the United States allows for judicial review, which can overturn or interpret particular aspects of the law.  This means that even if you have the official text of the code of law, you might not know the actual law or how it is applied.  To determine the full law, you must refer to other sources.

With The State Decoded, for states we are able to include opinions and cases via [Court Listener](https://www.courtlistener.com/)’s API.  However, we don’t have a reliable way of showing these for cities.  And decisions in courts can frequently impact potential future decisions in other courts on similar topics, even if they’re not covering the same jurisdiction.

Pending legislation may also change the law in the future, and that’s a good thing for people to know about – as the law as written today may change tomorrow.  A bill that’s already been enacted may not take effect until a particular date in the future.

## The Law Does Not Mean The Same Thing in Different Places

Since the definitions of particular terms are specific to a given place – or even a specific section of code for a particular place – these terms are not universal, which makes it hard to compare laws directly.  In one city, a month may be 30 days, or 31, or specific to a given reference for a month.

Update: [Eric Mill](https://twitter.com/konklone) and [Jacob Kaplan-Moss](https://twitter.com/jacobian) pointed out that some legislative bodies have an even stranger interpretation of time. In cases where a law or mandate requires the legislature to perform an action by a given date, but they can't complete the action in that time, they will extend that day **legally** past 24 hours. As a result, you may see a motion in legislative data along the lines of `for the purposes of this legislative session, July 31st has 250 hours.` This can play havoc with processing the data, as you may see timestamps such as `July 31 107:24` which will have to be saved in some non-native-date format.  The U.S. Congress uses something similar called a ["legislative day"](https://www.senate.gov/reference/glossary_term/legislative_day.htm) which continues until the body adjourns next - which may be days or **months** later!

There have been some attempts at creating an ontology of law to provide a way of universally comparing similar ideas.  However, since the law is written in Word or WordPerfect in most places, this metadata has to be added downstream, and is not easily automated.

## Standards, Formats, and Standard Formats

Standards in data are critical for making tools interoperable.  It’s important to use existing standards whenever possible to make sure that in the future everyone’s tools will be able to talk to each other and share data.  Whenever possible, you should try to leverage popular existing standards for your data interfaces, and should almost never invent your own!

When work began on The State Decoded, there were no obvious standard formats for legal code.  [I wrote in more detail about standards for the law a few years back.](https://web.archive.org/web/20170504123904/https://opengovfoundation.org/setting-the-standards-for-open-government-data/)  Since that time, [Akoma Ntoso](http://www.akomantoso.org/) has become the most popular standard format to distribute legal code internationally.  It’s an XML schema which provides everything you need to break up the law into usable data.  A similar format, USLM, is used by the US House of Representatives and we used to focus on that for compatability.  However, USLM lacks the flexibility of Akoma Ntoso for different types of documents, and A.N. has become much simpler to implement.  It also allows for additional microformats within the data, which helps with the ontology problem.

In general, you’ll need a way to store highly structured data to properly represent the law.  XML is ideal because it can handle the nesting and inline markup associated with legal code.  JSON is not a good choice, since it’s designed for strict hierarchical structures and is awful at inline markup.

For database storage, many groups use eXistdb, which stores XML documents natively – however, since both [MySQL](http://dev.mysql.com/doc/refman/5.7/en/xml-functions.html) and [PostgreSQL](https://www.postgresql.org/docs/9.2/static/functions-xml.html) now have native support for XML and XPath similar to eXistdb, they are fantastic choices for this.  I strongly recommend breaking up the law code into sections for each record, rather than keeping structures together or breaking things into paragraphs, as this makes it much easier to work with the data.

## And that’s just to start

There will undoubtedly be more issues that come up that I haven’t run into yet, but above are a lot of the ones I’ve run into over the last three years.  If you encounter others or know something I don’t, [please get in touch and let me know](https://twitter.com/krues8dr)!
