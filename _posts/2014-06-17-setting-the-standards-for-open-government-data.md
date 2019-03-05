---
title: Setting the Standards for Open Government Data
author: Bill Hunt
type: post
date: 2014-06-17T23:18:40+00:00
permalink: /blog/2014/06/17/setting-the-standards-for-open-government-data/
originallyappeared_site_name:
  - OpenGov Foundation Blog
originallyappeared_site_url:
  - http://opengovfoundation.org/setting-the-standards-for-open-government-data/

---
City and state governments across America are adopting Open Data policies at a fantastic clip. Technology hotbed San Francisco has one, but places far from Silicon Valley &#8211; like Pittsburgh, PA &#8211; are also joining the municipal open data movement. The increasing availability of free tools and enthusiastic volunteer software developers has opened the door for a vast amount of new government data to be made publicly available in digital form. But merely putting this data out there on the Internet is only the first step.

<!--more-->Much of this city data is released under assumption that a government agency must publish something &#8211; anything &#8211; and fast. In this rush to demonstrate progress, little thought is given to the how. But the citizens who care about this data &#8211; and are actually building websites and applications with it &#8211; need to access it in machine-readable, accessible, and standards-compliant formats, as the Sunlight Foundation explains here. This explains why most city open data sets aren’t seen or used. There is a vast difference between merely opening data, and publishing Open Data.

By publishing data in good formats that adhere to modern, widely-accepted standards, users of the data may reuse existing software to manipulate and display the data in a variety of ways, without having to start from scratch. Moreover, it allows easy comparison between data from different sources. If every city and every organization chooses to adopt their own standard for data output, this task becomes absolutely insurmountable &#8211; the data will grow faster than anyone on the outside can possibly keep up.

### It’s a Mess: Most “Open Government Data” Is Virtually Useless

Take, for example, the mess that is data.gov. Lots of data is available &#8211; but most of these datasets are windows-only self-extracting zip archives of Excel files without headings that are nearly useless. This is not what the community at large means by &#8220;Open Data&#8221; &#8211; there are lots of closed formats along the way.

Similarly, data which is released with its own schema, rather than adopting a common standard, is just as problematic. If you&#8217;re forcing your users to learn an entirely new data schema &#8211; essentially, a brand new language &#8211; and to write entirely new parsing software &#8211; a brand new translator &#8211; just to interact with your data, you&#8217;ve added a considerable barrier to entry that undercuts openness and accessibility.

A good standard lets anyone who wants to interact with the data do so easily, without having to learn anything new or build anything new. Standard programming libraries can be built, so that it&#8217;s as simple as opening a webpage for everyone. This means that in most programming languages, using a standards-based data source can be as simple as it is to interact with the web, import httplib and you’re done.

### Evaluating Existing Standards

Every day at The OpenGov Foundation, I work with legal and legislative data. Laws, legal codes, legislation, regulations, and judicial opinions are a few examples. What standard do we use? Well, let’s look at the most common standards available for publishing legal data on the Internet:

  * Akoma Ntoso &#8211; a well-known XML-based format that is very verbose. The level of complexity presents a high barrier to entry for most users, and has prevented its wide adoption.
  * United States Legislative Markup (USLM) &#8211; another XML-based format used by the US House of Representatives. It has the advantage of being not very verbose, extensible, and easy to use.
  * State Decoded XML &#8211; the format used by The State Decoded project. Currently, this only support law code data, and is not widely adopted outside of this project.
  * JSON &#8211; JSON is not actually a standard, but a general format well suited to relational and tabular data, and chunks of plain text. A variant is JSON-LD which has all of the same properties, but is better for relational data. It is commonly used for transferring data on the web, but it is not practical for annotated or marked-up data.

None of these are ideal. But if I had to pick a single option to move forward, the USLM standard is the most attractive for several reasons:

  * It is older, established, and has good documentation
  * It is easily implemented and used
  * It is extensible, but not especially verbose
  * It is designed to handle inline markup and annotation, such as tables, mathematical formulas, and images

It also acts as a very good “greatest common factor” as a primary format &#8211; it can be translated easily into common formats such as HTML, Microsoft Word, plain text, and even JSON &#8211; but does not add any superfluous complexity to address most common needs (e.g., tables or annotations) that other formats require.

### Setting the Standard for Open Law & Legislative Data

Moving forward, the next step beyond simply exporting USLM data from existing data sources would be to to have end-to-end solutions that speak USLM natively. Instead of editing Word or WordPerfect documents to craft legislation, lawmakers could write bills in new tools that look and feel like Word, but are actually crafting well-formatted USLM XML behind the scenes, instead of a closed-source, locked-in format. This is what we call “What You See Is What You Mean” &#8211; or WYSIWYM.

Here at The OpenGov Foundation, we believe in a rich, standards-based data economy, and we are our actively doing our part to contribute. Our open-source online policymaking platform &#8211; Madison &#8211; already consumes USLM, and we are actively working on an WYSIWYM editor to make it easier to create and modify policy documents in Madison. We are also investigating USLM support for The State Decoded &#8211; both as an input and output format. Hopefully, other software projects will actively follow suit &#8211; creating an interoperable ecosystem of legal data for everyone in the United States.