---
title: Customizable Class Skills
author: Bill Hunt
type: post
date: 2018-09-09T19:20:26+00:00
url: /2018/09/09/customizable-class-skills/
categories:
  - Hometown Hero
tags:
  - Javascript
  - RPG Maker MV

---
I&#8217;ve been playing a lot of Grim Dawn over the last few months, which is an ARPG in the style of Diablo 2.  Both games feature passive skills in addition to active, invokable skills.  I am surprised that no classic-style RPGs use this, favoring instead a level-based or event-based skill system.

I&#8217;ve started work on a plugin to allow the player to invest in the skills that they want, while ignoring ones they don&#8217;t care about.  The idea is to remove most of the &#8220;fluff&#8221; around skills in classic JRPGs &#8211; such as the dozen or so White Magic and Black Magic spells no one ever, ever uses.  Instead of having three different healing or fire spells, just have one spell that you can invest in over time to improve.

[<img class="alignnone size-medium wp-image-9" src="/uploads/2018/09/skills1.jpg" alt="" width="300" height="230"/>][1] <img class="alignnone size-medium wp-image-10" src="/uploads/2018/09/skills2.jpg" alt="" width="300" height="230"/>

As part of the bigger game concept, my idea is for melee fighters to be able to invest in their fighting skills to gain more damage and specific weapon proficiency (passively). Instead of limiting what weapons a particular class can use, certain classes can instead get better at specific weapons and armor. (Maybe there should be stat limitations instead, like the ARPGs have?) Similarly, elemental magic can be improved and upgraded, with more advanced tiers available.

I&#8217;ve posted [the plugin on my Github][2]. The interface is largely complete at this point, but it will still require more work to integrate with the &#8220;real&#8221; base skill system &#8211; these don&#8217;t actually add the skills yet. The passive skills also do not yet modify the `actor` yet.

 [1]: /uploads/2018/09/skills1.jpg
 [2]: /uploads/2018/09/skills2.jpg