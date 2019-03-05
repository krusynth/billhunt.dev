---
title: Bootstrap Sass with rem instead of px for Vertical Typographical Rhythm
author: Bill Hunt
type: post
date: 2015-05-26T23:43:18+00:00
permalink: /blog/2015/05/26/bootstrap-sass-with-rem-instead-of-px-for-vertical-typographical-rhythm/

---
A huge number of sites use **Bootstrap** as a css framework these days. Using Bootstrap is even easier with the [`bootstrap-sass`][1] package, which uses [`SASS`][2] to allow developers to customize nearly every aspect of the framework. Unfortunately, [the current version doesn&#8217;t support units other than pixels (px)][3], so using percent, `em`s, or `rem`s isn&#8217;t easy. It also is rather hard to establish a **vertical grid for typography rhythm** aside from the default, since so many values are hardcoded.

To solve this, I&#8217;ve [created a boilerplate][4] that overrides the problematic aspects of `bootstrap-sass` to allow the easy use of `rem`s as well as setting up a solid vertical rhythm. We&#8217;re using this right now on our redesigned [Madison][5] project!<!--more-->

This package also includes some extra features (that are entirely optional!) such as [Compass][6], [Breakpoint][7], and [Sass Web Fonts][8] for loading Google Fonts. I&#8217;ve also replaced the default Glyphicons pack that Bootstrap sports with a full [Font Awesome][9] install, for lots of icon-goodness!

[Go fork and use it now!][4]

Screenshot:

[<img class="alignnone  wp-image-326" alt="Screen Shot 2015-05-26 at 3.13.30 PM" src="/uploads/2015/05/Screen-Shot-2015-05-26-at-3.13.30-PM.jpg" width="100%" />][10]

  * [payday loans online no credit check][11]
  * [check cashing][12]
  * [online payday loans direct lenders][13]
  * [apply for loan][14]
  * [payday loans for bad credit][15]

 [1]: https://github.com/twbs/bootstrap-sass/
 [2]: http://sass-lang.com/
 [3]: https://github.com/twbs/bootstrap/issues/1943
 [4]: https://github.com/opengovfoundation/bootstrap-sass-rem-boilerplate
 [5]: https://github.com/opengovfoundation/madison
 [6]: http://compass-style.org/
 [7]: https://github.com/at-import/breakpoint
 [8]: https://github.com/penman/Sass-Web-Fonts
 [9]: http://fortawesome.github.io/Font-Awesome/
 [10]: /uploads/2015/05/Screen-Shot-2015-05-26-at-3.13.30-PM.jpg
 [11]: http://paydaycashamericapawnloansforbadcredit.accountant
 [12]: http://speedycashpaydayloansonlinenet.accountant
 [13]: http://cashnetpaydayadvancecall.accountant
 [14]: http://paydayprosperloansavantcashadvance.accountant
 [15]: http://quickloanspaydaycashadvance.accountant