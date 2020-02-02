---
title: Scriptaculous Sortable Create onUpdate Event Not Firing
author: Bill Hunt
type: post
date: 2009-02-11T02:06:52+00:00
permalink: /blog/2009/02/10/scriptaculous-sortable-create-onupdate-event-not-firing/
layout: post
---
I&#8217;ve been having trouble with a **Scriptaculous sortable** object that wasn&#8217;t catching the onUpdate function I&#8217;d assigned. In this case, I was using an **UL** for the parent with **LI**s inside. After digging into the code, I discovered that there are several criteria that must be for the actual items that are going to be sortable, or else the event won&#8217;t fire. These are:<!--more-->

  1. Each item must have a **unique id**.
  2. The item id **must contain an underscore** (**_**)
  3. The item id **cannot begin with an underscore or a hyphen**

Using myname_## should work fine, as long as ## is a unique integer in each case. Technically, it must match the following regular expression:

`/^[^_\-](?:[A-Za-z0-9\-\_]*)[_](.*)$/`