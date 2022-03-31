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
* `$09$: Variable 006` Inventory9 - `word`. (Keep track of the treasures Zelda has found)
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
  * (Flag 8 is ???)
  * (Flag 9 is ???)
  * (Flag 10 is ???)
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
