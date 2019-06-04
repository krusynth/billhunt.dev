---
title: 'RPG Maker MV: Class Skill Tree'
author: Bill Hunt
type: post
date: 2019-05-28T20:39:00+00:00

categories:
  - RPG-Maker-MV
  - Plugins
tags:
  - Javascript
  - RPG Maker MV
image: /uploads/2019/05/skilltree.jpg

---

I've released the first piece of my custom skills system, the Skill Tree plugin.
This plugin allows game authors to create a tree of skills for each class, with
dependencies and requirements that must be unlocked. Skills also now have
levels, so instead of having Fire 1, 2, and 3 which are only useful for a small
part of the game, you can just use one Fire spell that increases in potency.

![Skill Tree System](/uploads/2019/05/skilltree.jpg)

The player is allocated skill points as they progress through levels that they
can use to buy these skills. The game author can also use the new helper
functions to test if the player has a given skill, creating more robust plots
and stories. The author can also customize the damage, healing, and cost to use
the skill based on the level.

One thing I found interesting about games like Planescape and Geneforge is
having multiple methods for a player to deal with a particular plot point - say,
if you have a skill of a particular level or your intelligence is high enough.
Although the latter is possible with RPG Maker MV, I'm hoping to have the
potential for "passive" skills that players may want to invest in to open up
alternative paths.

In the demo below, the player starts with plenty of skill points but no skills.
The NPC is in need of healing, so the player will have to buy some points in
Heal to help them out! Also note that you can't buy Heal All until you've spent
enough points on Heal.

{:.links-list}
* [live demo](/demo/Kru_SkillTree/)
* [download](https://raw.githubusercontent.com/krues8dr/rpgmakermv-plugins/master/Kru_SkillTree.js)
* [documentation](https://github.com/krues8dr/rpgmakermv-plugins/wiki/Kru_SkillTree)

You can download this plugin, along with all of my other RPG Maker MV plugins,
from [my GitHub repository.](https://github.com/krues8dr/rpgmakermv-plugins)