---
title: Scriptaculous / Prototype IE 8 Autocomplete disappearing problem
author: Bill Hunt
type: post
date: 2009-10-30T19:29:55+00:00
permalink: /blog/2009/10/30/scriptaculous-prototype-ie-8-autocomplete-disappearing-problem/

---
In **Internet Explorer 8**, it seems that **Scriptaculous** / **Prototype** sometimes miscalculate exactly where to place the **autocomplete box**. As a result, it will usually **not show up at all**, since it&#8217;s off the screen. The trick here is that it&#8217;s calculating a left and top absolute position that are wrong, and then writing them directly to the element as inline styles.

The solution, though a bit of a hack, is to write styles for the div container that use the **!important rule**, which will override any inline styles. Here&#8217;s what the fix should look like:

`<br />
#my_auto_complete {<br />
    position: relative !important;<br />
    top: -10px !important;<br />
    left: 0px !important;<br />
}<br />
`