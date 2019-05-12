---
title: 'Reputation Plugin'
author: Bill Hunt
type: post
date: 2019-03-26T19:39:00+00:00

categories: [RPG-Maker-MV, Plugins]
tags:
  - Javascript
  - RPG Maker MV
image: /uploads/2019/03/reputation-1.jpg

---
![Final Fantasy VI banquet with Emperor Gestahl](/uploads/2019/03/ff6.jpg)![Harvest Moon heart affection ranks](/uploads/2019/03/harvestmoon.jpg)

I was always enjoyed the classic RPGs where it felt like your decisions actually
impacted the fictional world, especially by interacting with the characters you
encountered in your adventures. Final Fantasy VI featured several complicated
scenes where the player had to answer questions or talk to people in town to
gain status with the Emperor. Harvest Moon featured the ability to woo a
townsperson by chatting with them or bringing them gifts over time to gain their
affection (represented by hearts in their diary).

![Grim Dawn factions screen](/uploads/2019/03/grimdawn.jpg)![Geneforge 4 by Spiderweb Games](/uploads/2019/03/geneforge4.jpg)

More recent games have included versions of this same idea. Grim Dawn has
several factions that you can aid, and the monsters themselves also represent
a few different factions. At one point in the game, you have to decide between
two different groups to join, and the other become your enemy.
[Spiderweb Games](https://www.spiderwebsoftware.com/) has done a masterful job
of crafting stories around the tension between different groups in their games,
playing one against another as the player chooses which they will ally with.

These sorts of mechanics are possible to create with RPG Maker MV, but it can be
complicated. I've created a plugin to make it easy to keep track of reputation
or affection across groups or individuals.

![Reputation plugin for RPG Maker MV](/uploads/2019/03/reputation-1.jpg)

By default, this plugin adds a "Factions" item to the game menu. By using the
native game variables, you can add factions to the list and keep track of your
influence with them. Since these use standard RPG Maker MV variables, you don't
need to do anything fancy to work with conditions in your events. These factions
can also have custom icons on the Factions screen, and these can be a larger
size than your standard icons. The plugin also allows you to change shop prices,
offering a discount to friends or allowing you to sell back items for better
prices than the default 50% builtin to the  engine.

{:.links-list}
* [live demo](/demo/Kru_Reputation/)
* [download](https://raw.githubusercontent.com/krues8dr/rpgmakermv-plugins/master/Kru_Reputation.js)
* [documentation](https://github.com/krues8dr/rpgmakermv-plugins/wiki/Kru_Reputation)

This plugin requires [Kru_Core](https://raw.githubusercontent.com/krues8dr/rpgmakermv-plugins/master/Kru_Core.js).

[You can download the plugin, along with all of my other RPG Maker MV plugins,
from my GitHub repository.](https://github.com/krues8dr/rpgmakermv-plugins)