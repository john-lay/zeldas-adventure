# Zelda's Adventure

A port of Zelda's Adventure for the Philips CD-i to the Gameboy.

The culmination of DMG Adventure [part I](https://github.com/john-lay/dmg-adventure), [part II](https://github.com/john-lay/dmg-adventure-ii), [part III](https://github.com/john-lay/dmg-adventure-iii) and [za engine](https://github.com/john-lay/za-engine)

Created with a [fork](https://github.com/john-lay/gb-studio) of [GB Studio](https://www.gbstudio.dev/)

## Installation

If you want to play the game, the ROM can be downloaded from [here](https://github.com/john-lay/zeldas-adventure/releases)

If you want to build or edit the game you will need to build the modified copy of GB Studio (The game was built with version `3.0.3`), which can be downloaded from [here](https://github.com/john-lay/gb-studio/releases).
The scenes are build using [Tiled](https://www.mapeditor.org/) and can be found in `/assets/tilemaps` and tilesets are taken from [Link's awakening disassembly project](https://github.com/zladx/LADX-Disassembly/tree/master/src/gfx).

# Technical notes

## Variable list

A listing of variables and their types in re-usable components (Actors/Scenes)

### Global
* `$00$: Variable 000` _Health - `number`. (Private variable. Represents the old/cached health. 2 health units equal 1 heart)
* `$01$: Variable 001` Health - `number`. (Public variable. Can be updated in GB Studio. If the value above is different it triggers a HUD redraw)
* `$02$: Variable 002` _Max Hearts - `number`. (Private variable. Represents the old/cached maximum hearts. 2 health units equal 1 heart)
* `$03$: Variable 003` Max Hearts - `number`. (Public variable. Can be updated in GB Studio. If the value above is different it triggers a HUD redraw)
* `$04$: Variable 004` _Rupees - `number`. (Private variable. Indicates the old/cached number of rupees Zelda has collected)
* `$05$: Variable 005` Rupees - `number`. (Public variable. Can be updated in GB Studio. If the value above is different it triggers a HUD redraw)
* `$06$: Variable 006` Inventory Interaction - `number`. (Update the background tiles in the inventory screen based on point and click user interaction)
    * (1 represents the inventory weapons have been scrolled left)
    * (2 represents the inventory weapons have been scrolled right)
    * (3 represents the 1st weapon slot has been selected)
    * (4 represents the 2nd weapon slot has been selected)
    * (5 represents the 3rd weapon slot has been selected)
    * (6 represents the 4th weapon slot has been selected)
    * (7 represents the 5th weapon slot has been selected)
    * (8 represents the 6th weapon slot has been selected)
    * (9 represents the inventory treasures have been scrolled left)
    * (10 represents the inventory treasures have been scrolled right)
    * (11 represents the 1st treasure slot has been selected)
    * (12 represents the 2nd treasure slot has been selected)
    * (13 represents the 3rd treasure slot has been selected)
    * (14 represents the 4th treasure slot has been selected)
    * (15 represents the 5th treasure slot has been selected)
    * (16 represents the 6th treasure slot has been selected)
* `$07$: Variable 007` Inventory1 - `word`. (Keep track of the weapons Zelda has found)
  * (Flag 1 represents the weapon: Wand)
  * (Flag 2 represents the weapon: Bow and Arrow)
  * (Flag 3 represents the weapon: Broadsword)
  * (Flag 4 represents the weapon: Calm)
  * (Flag 5 represents the weapon: Feather)
  * (Flag 6 represents the weapon: Rings of Fire)
  * (Flag 7 represents the weapon: Firestorm)
  * (Flag 8 represents the weapon: Gold Necklace)
  * (Flag 9 represents the weapon: Hammer)
  * (Flag 10 represents the weapon: Jade Amulet)
  * (Flag 11 represents the weapon: Joust)
  * (Flag 12 represents the weapon: Jade Ring)
  * (Flag 13 represents the weapon: Dagger)
  * (Flag 14 represents the weapon: Noise)
  * (Flag 15 represents the weapon: Pyros)
  * (Flag 16 represents the weapon: Roar Stick)
* `$08$: Variable 008` Inventory2 - `word`. (Keep track of the weapons and treasures Zelda has found)
  * (Flag 1 represents the weapon: Short Axe)
  * (Flag 2 represents the weapon: Turquoise Ring)
  * (Flag 3 represents the weapon: Boomerang)
  * (Flag 4 represents the treasure: Ladder)
  * (Flag 5 represents the treasure: Candle)
  * (Flag 6 represents the treasure: Bone)
  * (Flag 7 represents the treasure: Black Orb)
  * (Flag 8 represents the treasure: Bouquet)
  * (Flag 9 represents the treasure: Ticket B)
  * (Flag 10 represents the treasure: Empty Bottle)
  * (Flag 11 represents the treasure: Water Bottle)
  * (Flag 12 represents the treasure: Coal)
  * (Flag 13 represents the treasure: Diamond)
  * (Flag 14 represents the treasure: Flute)
  * (Flag 15 represents the treasure: Plank)
  * (Flag 16 represents the treasure: Knife)
* `$09$: Variable 009` Inventory3 - `word`. (Keep track of the treasures Zelda has found)
  * (Flag 1 represents the treasure: Harp)
  * (Flag 2 represents the treasure: Ticket A)
  * (Flag 3 represents the treasure: Life Potion)
  * (Flag 4 represents the treasure: Rug)
  * (Flag 5 represents the treasure: Magic Shield)
  * (Flag 6 represents the treasure: Salt Cellar)
  * (Flag 7 represents the treasure: Raft)
  * (Flag 8 represents the treasure: Red Boots)
  * (Flag 9 represents the treasure: Zora Repellent)
  * (Flag 10 represents the treasure: Red Bow)
  * (Flag 11 represents the treasure: Vial of Wind)
  * (Flag 12 represents the treasure: Golden Boots)
  * (Flag 13 represents zelda has a key)
  * (Flag 14 is ???)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
* `$10$: Variable 010` Equipped - `number`. (Keep track of the equipped item)
  * (1 represents the weapon: Wand)
  * (2 represents the weapon: Bow and Arrow)
  * (3 represents the weapon: Broadsword)
  * (4 represents the weapon: Calm)
  * (5 represents the weapon: Feather)
  * (6 represents the weapon: Rings of Fire)
  * (7 represents the weapon: Firestorm)
  * (8 represents the weapon: Gold Necklace)
  * (9 represents the weapon: Hammer)
  * (10 represents the weapon: Jade Amulet)
  * (11 represents the weapon: Joust)
  * (12 represents the weapon: Jade Ring)
  * (13 represents the weapon: Dagger)
  * (14 represents the weapon: Noise)
  * (15 represents the weapon: Pyros)
  * (16 represents the weapon: Roar Stick)
  * (17 represents the weapon: Short Axe)
  * (18 represents the weapon: Turquoise Ring)
  * (19 represents the weapon: Boomerang)
  * (20 represents the treasure: Ladder)
  * (21 represents the treasure: Candle)
  * (22 represents the treasure: Bone)
  * (23 represents the treasure: Black Orb)
  * (24 represents the treasure: Bouquet)
  * (25 represents the treasure: Ticket B)
  * (26 represents the treasure: Empty Bottle)
  * (27 represents the treasure: Water Bottle)
  * (28 represents the treasure: Coal)
  * (29 represents the treasure: Diamond)
  * (30 represents the treasure: Flute)
  * (31 represents the treasure: Plank)
  * (32 represents the treasure: Knife)
  * (33 represents the treasure: Harp)
  * (34 represents the treasure: Ticket A)
  * (35 represents the treasure: Life Potion)
  * (36 represents the treasure: Rug)
  * (37 represents the treasure: Magic Shield)
  * (38 represents the treasure: Salt Cellar)
  * (39 represents the treasure: Raft)
  * (40 represents the treasure: Red Boots)
  * (41 represents the treasure: Zora Repellent)
  * (42 represents the treasure: Red Bow)
  * (43 represents the treasure: Vial of Wind)
  * (44 represents the treasure: Golden Boots)
* `$11$: Variable 011` Overworld Flags - `word`.
  * (Flag 1 represents Zelda has completed the Earth Shrine)
  * (Flag 2 represents Zelda has completed the Illusion Shrine)
  * (Flag 3 represents Zelda has completed the Air Shrine)
  * (Flag 4 represents Zelda has collected the Destiny Shrine)
  * (Flag 5 represents Zelda has collected the Water Shrine)
  * (Flag 6 represents Zelda has collected the Strength Shrine)
  * (Flag 7 represents Zelda has collected the Fire Shrine)
  * (Flag 8 represents Shurmak has given her Vision Henge speech)
  * (Flag 9 represents Zelda has spoken to the White Steed Lodgekeep)
  * (Flag 10 represents Zelda has collected the Torian forest heart container)
  * (Flag 11 is ???)
  * (Flag 12 is ???)
  * (Flag 13 is ???)
  * (Flag 14 is ???)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
* `$12$: Variable 012` Zelda PosX - `number`. (Stores Zelda's position when she exits the screen. Used to maintain her relative position on the next screen)
* `$13$: Variable 013` Zelda PosY - `number`. (Stores Zelda's position when she exits the screen. Used to maintain her relative position on the next screen)
* `$14$: Variable 014` Exit Screen: Top, Right, Bottom, Left - `number`. (Indicates the direction Zelda was facing when exiting the screen. Used with the above)
    * (0 represents null/no position)
    * (1 represents Zelda exitted at the __top__ of the screen)
    * (2 represents Zelda exitted at the __right__ side of the screen)
    * (3 represents Zelda exitted at the __bottom__ of the screen)
    * (4 represents Zelda exitted at the __left__ side of the screen)
    * (5 represents Zelda's screen position is explicitly managed)
* `$15$: Variable 015` Attack Power - `number`. (Zelda's attack power)
* `$16$: Variable 016` Spell Cost - `number`. (Cost of the equipped spell)
```
  * (1.  Wand ------------- No cost)
  * (2.  Bow and Arrow ---- 1 rupee)
  * (3.  Broadsword ------- 2 rupees)
  * (4.  Calm ------------- 1 rupee)
  * (5.  Feather ---------- 2 rupees)
  * (6.  Rings of Fire ---- 3 rupees)
  * (7.  Firestorm -------- 1 rupee)
  * (8.  Gold Necklace ---- 2 rupees)
  * (9.  Hammer ----------- 2 rupees)
  * (10. Jade Amulet ------ 24 rupees)
  * (11. Joust ------------ 3 rupees)
  * (12. Jade Ring -------- 3 rupees)
  * (13. Dagger ----------- 2 rupees)
  * (14. Noise ------------ 1 rupee)
  * (15. Pyros ------------ 4 rupees)
  * (16. Roar Stick ------- 3 rupees)
  * (17. Short Axe -------- 2 rupees)
  * (18. Turquoise Ring --- 26 rupees)
  * (19. Boomerarg -------- 1 rupee)
```
* `$17$: Variable 017` Scene Flags - `word`.
  * (Flag 1 represents the enemy dropping a rupee)
  * (Flag 2 represents the enemy dropping a heart)
  * (Flag 3 represent the enemy dropped a rupee or a heart)
  * (Flag 4 represents Zelda has spoken to a fairy)
  * (Flag 5 is ???)
  * (Flag 6 is ???)
  * (Flag 7 is ???)
  * (Flag 8 is ???)
  * (Flag 9 is ???)
  * (Flag 10 is ???)
  * (Flag 11 is ???)
  * (Flag 12 is ???)
  * (Flag 13 is ???)
  * (Flag 14 is ???)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
* `$18$: Variable 018` Resume location - `word`.
  * (Flag 1 represents a Save and Continue operation)
  * (Flag 2 represents a Save and Quit operation)
  * (Flag 3 represents Zelda should resume at Vision Henge)
  * (Flag 4 represents Zelda should resume in the Earth Shrine)
  * (Flag 5 represents Zelda should resume in the Illusion Shrine)
  * (Flag 6 represents Zelda should resume in the Air Shrine)
  * (Flag 7 represents Zelda should resume in the Destiny Shrine)
  * (Flag 8 represents Zelda should resume in the Water Shrine)
  * (Flag 9 represents Zelda should resume in the Strength Shrine)
  * (Flag 10 represents Zelda should resume in the Fire Shrine)
  * (Flag 11 represents Zelda should resume outside a boss room)
  * (Flag 12 is ???)
  * (Flag 13 is ???)
  * (Flag 14 is ???)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
* `$19$: Variable 019` Map PosX - `number`. (Stores the player's dungeon position. Shows which dungeon room the player is in on the minimap)
* `$20$: Variable 020` Map PosY - `number`. (Stores the player's dungeon position. Shows which dungeon room the player is in on the minimap)
* `$21$: Variable 021` Enemy Counter - `number`. (Indicates the number of Zelda has defeated in this scene)
* `$22$: Variable 022` Earth Shrine Flags - `word`.
  * (Flag 1 is the Earth Shrine Map)
  * (Flag 2 is the Earth Shrine Compass)
  * (Flag 3 represents Zelda has used the ladder)
  * (Flag 4 represents Zelda has defeated the Red Sardak)
  * (Flag 5 represents Zelda has defeated the Blue Sardak)
  * (Flag 6 represents Zelda has used the candle)
  * (Flag 7 represents Llort has given his first speech)
  * (Flag 8 represents Zelda has defeated the Yellow Sardak)
  * (Flag 9 represents Llort has given his second speech)
  * (Flag 10 represents Zelda has defeated Llort)
  * (Flag 11 represents Zelda has collected the heart piece)
  * (Flag 12 is ???)
  * (Flag 13 is ???)
  * (Flag 14 is ???)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
* `$23$: Variable 023` Zelda Direction - `number`. (Stores Zelda's direction between scenes)
* `$24$: Variable 024` ZA Engine Flags - `word`.
  * (Flag 1 extend the spell reference sprite search to include region `0x8800`-`0x8FFF`. Causes slow scene load - use with caution!)
  * (Flag 2 is ???)
  * (Flag 3 is ???)
  * (Flag 4 is ???)
  * (Flag 5 is ???)
  * (Flag 6 is ???)
  * (Flag 7 is ???)
  * (Flag 8 is ???)
  * (Flag 9 is ???)
  * (Flag 10 is ???)
  * (Flag 11 is ???)
  * (Flag 12 is ???)
  * (Flag 13 is ???)
  * (Flag 14 is ???)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
* `$25$: Variable 025` Illusion Shrine Flags - `word`.
  * (Flag 1 is the Illusion Shrine Map)
  * (Flag 2 is the Illusion Shrine Compass)
  * (Flag 3 represents Zelda has placed the Orb on the pedestal)
  * (Flag 4 represents Zelda has opened the first locked door)
  * (Flag 5 represents Pasquinade has given his first speech)
  * (Flag 6 represents Zelda has used the candle)
  * (Flag 7 represents Zelda has opened the second locked door)
  * (Flag 8 is ???)
  * (Flag 9 is ???)
  * (Flag 10 is ???)
  * (Flag 11 is ???)
  * (Flag 12 is ???)
  * (Flag 13 is ???)
  * (Flag 14 is ???)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
~~* `$22$: Variable 022` Is Sailing - `bool`. (Indicates whether or not Zelda is sailing from the Seacoast dock to the Sea Island)~~

## Animated tiles guide

There are 9 different animated tiles which use a different key in the HUD to identify them.

- A scene with sea tiles will have sea tile 0 followed by sea tile 1
- A scene with crashing wave will have wave tile 0, wave tile 1, sea tile 0 and sea tile 1
- A scene with river tiles will have river tile 0
- A scene with sea tiles and river tiles will have sea tile 1, sea tile 0 and river tile 0
- A scene with lake tiles will have lake tile 0
- A scene with lake tiles and river tiles will have lake tile 1 and river tile 0
- A scene with lava tiles will have lava tile 0 followed by lava tile 1
- A scene with lamp tiles will have lamp tile 0 followed by lamp tile 1
- A scene with torch tiles will have torch tile 0
- A scene with torch tiles and lamp tiles will have torch tile 3, lamp tile 0 and lamp tile 1

## Collision Guide

- Group 1 represents Zelda's attack spells and the Enemies collision group
- Group 2 represents Zelda's attack spells and switches
- Group 3 represent Enemy projectile attacks

## Emotes

Notes on the emote icons and when they're used. Available emotes: \
__Shock (!), Question (?), Love (❤), Pause (...), Anger (>_<), Sweat (O_O;), Music (♫), Sleep (Zzz)__
### Zelda
- __Shock (!)__ 
  - Spell doesn't work on enemy
  - Using a treasure to reveal the path forwards
  - Interacting with a barrier
- __Love (❤)__
  - Collect a treasure/weapon, heart container or regain health
- __Sweat (O_O;)__
  - Not enough rupees to cast a spell
### NPCs
- __Pause (...)__
  - Krebb after receiving the dagger spell
- __Music (♫)__
  - Yvonne singing
  - Bard playing instrument
- __Sleep (Zzz)__
  - sleeping soldier
### Enemies
- __Shock (!)__ 
  - Taking damage

## Spells

Zelda can cast 18 different spells, which I've bundled into 4 discreet categories. More details [here](/documentation/notes.md#spells)

1. Single projectile (i.e. __arrow__) [`5 spells`]
2. Single animated projectile (i.e. spinning __boomerang__) [`4 spells`]
3. Triple projectile (i.e. __calm__ spell produces 3 fireballs emanating from Zelda's wand) [`6 spells`]
4. Other (spells which don't conform to the above) [`3 spells`]

When animating these spells in GB Studio, Zelda fires a reference spell (a sprite placeholder with suitably unique tiles) which is swapped based on the equipped spell.
- Sprites are found in [/assets/sprites/spells/](/assets/sprites/spells/)
- [GB Studio modification for spell tile swap](https://github.com/john-lay/gb-studio/blob/develop/appData/src/gb/src/core/zeldasSpellData.c)

### Known Limitations

There are 2 main issues when trying to animate the spells in GB Studio

1. The animation state isn't respected for a projectile. [issue logged here](https://github.com/chrismaltby/gb-studio/issues/1026#issuecomment-1138993250) which prevents spells from being properly animated (category 2 above). Of the 4 spells affected: __hammer__, __roar stick__, __short axe__ and __boomerang__, the __boomerang__ is the spell which doesn't work as a static animation. The work around for this is to create a unique animation for the __boomerang__.
2. The sprite animation limit on each scene. For the other category there are 3 spells. The __firestorm__ spell shoots a projectile in each of the cardinal directions. The __rings of fire__ fire 3 spells in a line and the __pyros__ spell places 3 sprites around Zelda in the direction she's facing. The first 2 spells can reuse the default animation which is called _Four Directions_ in GB Studio. The __pyros__ spell, however requires a 2 frame animation, so again (like the __boomerang__) requires a unique animation. 

If an on screen enemy can also fire a projectile, then the 2 unique sprites + enemy projectile pushes the GB Studio engine past its limit and causes the scene to never load.
\
\
Now that the 2 problematic spells have been identified: __boomerang__ and __pyros__ a compromise has to be reached. As the pyros spell is not required or especially effective against any enemy, this spell has been reduced to a small cameo and can only be used in the 4 screens that surround the Wimbich pond.
