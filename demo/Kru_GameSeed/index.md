---
title: 'RPG Maker MV: Kru_GameSeed Plugin'
type: page
layout: rmmv-demo
---

* [Documentation](https://github.com/krues8dr/rpgmakermv-plugins/wiki/Kru_GameSeed)
* [Download](https://raw.githubusercontent.com/krues8dr/rpgmakermv-plugins/master/Kru_GameSeed.js)

This plugin is shown using [Hime's Custom Page Conditions](http://himeworks.com/2015/10/custom-page-conditions-mv/).

Each time you start a new game, a new game seed is generated. This seed
persists with your saved game, and will determine whether the east path
or west path is blocked by a torch.

## Right Torch Event Code

{:.pre}
```
Comment : <page condition>
If : Script : seedTest(10) <= 5
  Plugin Command : activate_page
: End
Comment : </page condition>
```

## Left Torch Event Code

{:.pre}
```
Comment : <page condition>
If : Script : seedTest(10) > 5
  Plugin Command : activate_page
: End
Comment : </page condition>
```

## NPC Event Code

{:.pre}
```
Comment : <page condition>
If : Script : seedTest(10) <= 5
  Text: Actor1(1), Window, Bottom
  :  : The path to the east is blocked! You must
  :  : go west!
: Else
  Text: Actor1(1), Window, Bottom
  :  : The path to the west is blocked! You must
  :  : go east!
: End
Comment : </page condition>
```
