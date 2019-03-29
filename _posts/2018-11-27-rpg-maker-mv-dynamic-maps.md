---
title: 'RPG Maker MV: Dynamic Maps Plugin'
author: Bill Hunt
type: post
date: 2018-11-28T02:13:58+00:00
url: /2018/11/27/rpg-maker-mv-dynamic-maps/
categories:
  - Hometown Hero
tags:
  - Javascript
  - RPG Maker MV

---
One of the core aspects that I wanted to add to Hometown Hero is the ability for towns to grow and change over time. However, due to the map system that comes with RPG Maker MV, you can only achieve this with lots of complicated events. As a result, I&#8217;ve created a plugin to make this easier.

My first attempt at this was to use events to bind images of the houses on top of the map base of just the grass and other background. The houses themselves sit below the characters, with the peaks of the roofs and shadows below the weather so they show on top of the characters.

[<img class="alignnone size-medium wp-image-18" src="/uploads/2018/11/Screen-Shot-2018-11-27-at-7.27.14-PM.jpg" alt="" width="300" height="156"/>][1][<img class="alignnone wp-image-14" src="/uploads/2018/11/parynn-mayor-1_01.png" alt="" width="275" height="155" />][2] [<img class="alignnone size-full wp-image-17" src="/uploads/2018/11/parynn-mayor-1_02.png" alt="" width="288" height="176" />][3][<img class="alignnone size-medium wp-image-19" src="/uploads/2018/11/Screen-Shot-2018-11-27-at-7.29.39-PM.jpg" alt="" width="300" height="181"/>][4]

As the houses gain &#8220;levels&#8221; and grow, the images for the houses are swapped out for larger buildings, while additional events around the event are turned on at the same level as the characters, so that they can&#8217;t walk through the sides of the building.

[<img class="alignnone size-full wp-image-16" src="/uploads/2018/11/parynn-mayor-3_01.png" alt="" width="288" height="176" />][5][<img class="alignnone size-medium wp-image-21" src="/uploads/2018/11/Screen-Shot-2018-11-27-at-7.38.07-PM.jpg" alt="" width="159" height="300"/>][6]

This results in a ridiculous large number of events necessary to frame out a whole town, as well as a lot of management of loaded images on top of the map &#8211; both of which negatively impact performance. The first plugin I created to resolve this [enables events that are larger than one tile][7]. This way, I could frame an entire block &#8211; say 3 tiles by 5 tiles &#8211; with one event to block the character&#8217;s passage. This still is laborious, however.

Digging in a bit, I found that RPG Maker MV stores map data as JSON files &#8211; it does not pre-generate any map images. This means that we can modify the data used to generate the map when it&#8217;s loaded to change the contents. My new approach is to use the map editor to generate each house as its own small map, and merge that onto the main map into the correct location.  I&#8217;ve created [another plugin that automates this process][8], allowing authors to specify other maps to merge onto the current one, at a specified location, given a set of conditions.

This make for a much quicker process using the native RPG Maker MV tools, rather than mucking around in Photoshop. The only minor drawback is that autotiling does not automatically detect the surrounding tiles in the parent map. This means that if you insert a map into another, there&#8217;s no way to automatically fix edges &#8211; the round corners and other transitions that RPG Maker MV creates for you normally. The solution is to make sure that the inserted map appears exactly how you want it in the destination.

 [1]: /uploads/2018/11/Screen-Shot-2018-11-27-at-7.27.14-PM.jpg
 [2]: /uploads/2018/11/parynn-mayor-1_01.png
 [3]: /uploads/2018/11/parynn-mayor-1_02.png
 [4]: /uploads/2018/11/Screen-Shot-2018-11-27-at-7.29.39-PM.jpg
 [5]: /uploads/2018/11/parynn-mayor-3_01.png
 [6]: /uploads/2018/11/Screen-Shot-2018-11-27-at-7.38.07-PM.jpg
 [7]: https://github.com/krues8dr/rpgmakermv-plugins/blob/master/Kru_MultitileEvents.js
 [8]: https://github.com/krues8dr/rpgmakermv-plugins/blob/master/Kru_MapMerge.js