# Technical notes

## Variable list

A listing of variables used in GB Studio and their types.

### Global
* `$00$: Variable 000` Health - `number`. (Represents the players health. 2 health units equal 1 heart)
* `$01$: Variable 001` Max Hearts - `number`. (Represents the number of hearts the player has. 2 health units equal 1 heart)
* `$03$: Variable 002` Rupees - `number`. (Represents the number of rupees the player has collected)
* `$04$: Variable 003` Weapons Found - `number`. (Count of the number of weapons the player has found)
* `$05$: Variable 004` Weapon Scroll Offset - `number`. (Tracks the scroll offset for the weapons in the inventory screen)
* `$04$: Variable 005` Treasures Found - `number`. (Count of the number of treasures the player has found)
* `$05$: Variable 006` Treasure Scroll Offset - `number`. (Tracks the scroll offset for the treasures in the inventory screen)
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
  * (Flag 4 represents Zelda has completed the Destiny Shrine)
  * (Flag 5 represents Zelda has completed the Water Shrine)
  * (Flag 6 represents Zelda has completed the Strength Shrine)
  * (Flag 7 represents Zelda has completed the Fire Shrine)
  * (Flag 8 represents Shurmak has given her Vision Henge speech)
  * (Flag 9 represents Zelda has spoken to the White Steed Lodgekeep)
  * (Flag 10 represents Zelda has collected the Torian forest heart container)
  * (Flag 11 represents Zelda has spoken to Lonlyn in Verna)
  * (Flag 12 represents Zelda has collected the Canvula forest heart container)
  * (Flag 13 represents Zelda has collected the South Port heart container)
  * (Flag 14 indicates whether or not Zelda is sailing from the Seacoast dock to the Sea Island)
  * (Flag 15 represents Zelda has collected the Mystery Island heart container)
  * (Flag 16 is ???)
* `$12$: Variable 012` Player PosX - `number`. (Stores Zelda's position when she exits the screen. Used to maintain her relative position on the next screen)
* `$13$: Variable 013` Player PosY - `number`. (Stores Zelda's position when she exits the screen. Used to maintain her relative position on the next screen)
* `$14$: Variable 014` Player Direction - `number`. (Stores Zelda's direction between scenes)
* `$15$: Variable 015` Player Attack Power - `number`. (Zelda's attack power)
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
  * (Flag 5 represents Zelda has used the Vial of Wind in Seacoast Inn)
  * (Flag 6 represents Zelda has paid the ferryman in Seacoast Inn)
  * (Flag 7 represents Zelda has defeated the Sea Monster)
  * (Flag 8 is ???)
  * (Flag 9 is ???)
  * (Flag 10 is ???)
  * (Flag 11 represents enemy 1 has been defeated)
  * (Flag 12 represents enemy 2 has been defeated)
  * (Flag 13 represents enemy 3 has been defeated)
  * (Flag 14 represents enemy 4 has been defeated)
  * (Flag 15 represents enemy 5 has been defeated)
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
  * (Flag 12 represents Zelda should resume in Ganon's Gauntlet)
  * (Flag 13 is ???)
  * (Flag 14 is ???)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
* `$19$: Variable 019` Map PosX - `number`. (Stores the player's dungeon position. Shows which dungeon room the player is in on the minimap)
* `$20$: Variable 020` Map PosY - `number`. (Stores the player's dungeon position. Shows which dungeon room the player is in on the minimap)
* `$21$: Variable 021` Enemy Counter - `number`. (Indicates the number of Zelda has defeated in this scene)
* `$22$: Variable 022` Exit Screen: Top, Right, Bottom, Left - `number`. (Indicates the direction Zelda was facing when exiting the screen. Used with the above)
    * (0 represents Zelda's position should be manually managed)
    * (1 represents Zelda exitted at the __top__ of the screen)
    * (2 represents Zelda exitted at the __right__ side of the screen)
    * (3 represents Zelda exitted at the __bottom__ of the screen)
    * (4 represents Zelda exitted at the __left__ side of the screen)
* `$23$: Variable 023` Language - `number`.
    * (0 represents English)
    * (1 represents French)
    * (2 represents Japanese)
* `$23$: Variable 023` Earth Shrine Flags - `word`.
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
  * (Flag 12 represents Llort has given his third speech)
  * (Flag 13 represents Zelda has collected the celestial sign)
  * (Flag 14 represents the (first) Red Sardak has given his speech)
  * (Flag 15 represents the (second) Blue Sardak has given his speech)
  * (Flag 16 represents the (third) Yellow Sardak has given his speech)
* `$24$: Variable 024` ZA Engine Flags - `word`.
  * (Flag 1 extend the spell reference sprite search to include region `0x8800`-`0x8FFF`. Causes slow scene load - use with caution!)
  * (Flag 2 represents all Treasures enabled in Debug)
  * (Flag 3 represents all Weapons enabled in Debug)
  * (Flag 4 represents open doors on touch flag is enabled in Debug)
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
  * (Flag 8 represents Pasquinade has given his second speech)
  * (Flag 9 represents Zelda has defeated Pasquinade)
  * (Flag 10 represents Zelda has collected the heart piece)
  * (Flag 11 represents Zelda has collected the celestial sign)
  * (Flag 12 is ???)
  * (Flag 13 is ???)
  * (Flag 14 is ???)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
* `$26$: Variable 026` Air Shrine Flags - `word`.
  * (Flag 1 is the Air Shrine Map)
  * (Flag 2 is the Air Shrine Compass)
  * (Flag 3 represents Zelda has defeated the 1st Vapora)
  * (Flag 4 represents Zelda has defeated the 2nd Vapora)
  * (Flag 5 represents Zelda has restored the bridge)
  * (Flag 6 represents Zelda has defeated Aviana)
  * (Flag 7 represents Zelda has collected the heart piece)
  * (Flag 8 represents Aviana has given her first speech)
  * (Flag 9 represents the 2nd Vapora has given its speech)
  * (Flag 10 represents Aviana has given her second speech)
  * (Flag 11 represents Zelda has collected the celestial sign)
  * (Flag 12 is ???)
  * (Flag 13 is ???)
  * (Flag 14 is ???)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
* `$27$: Variable 027` Destiny Shrine Flags - `word`.
  * (Flag 1 is the Destiny Shrine Map)
  * (Flag 2 is the Destiny Shrine Compass)
  * (Flag 3 represents Zelda has activated a switch)
  * (Flag 4 represents Malmord has given her third speech)
  * (Flag 5 represents Zelda has defeated Malmord)
  * (Flag 6 represents Zelda has collected the heart piece)
  * (Flag 7 represents Malmort has given her first speech)
  * (Flag 8 represents Malmort has given her second speech)
  * (Flag 9 represents Zelda has collected the celestial sign)
  * (Flag 10 is ???)
  * (Flag 11 is ???)
  * (Flag 12 is ???)
  * (Flag 13 is ???)
  * (Flag 14 is ???)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
* `$28$: Variable 028` Water Shrine Flags - `word`.
  * (Flag 1 is the Destiny Shrine Map)
  * (Flag 2 is the Destiny Shrine Compass)
  * (Flag 3 represents Zelda has used the plank)
  * (Flag 4 represents Zelda has defeated the first (South) Kelpie)
  * (Flag 5 represents Zelda has defeated the second (North) Kelpie)
  * (Flag 6 represents Zelda has defeated Agwanda)
  * (Flag 7 represents Zelda has collected the heart piece)
  * (Flag 8 represents Agwanda has given her first speech)
  * (Flag 9 represents the first Kelpie has given her speech)
  * (Flag 10 represents Agwanda has given her second speech)
  * (Flag 11 represents the second Kelpie has given her speech)
  * (Flag 12 represents Agwanda has given her third speech)
  * (Flag 13 represents the third Kelpie has given her speech)
  * (Flag 14 represents Zelda has collected the celestial sign)
  * (Flag 15 is ???)
  * (Flag 16 is ???)
* `$29$: Variable 029` Strength Shrine Flags - `word`.
  * (Flag 1 is the Strength Shrine Map)
  * (Flag 2 is the Strength Shrine Compass)
  * (Flag 3 represents Zelda has spoken to the thirsty child)
  * (Flag 4 represents Zelda has played the archery game, target 1)
  * (Flag 5 represents Zelda has played the archery game, target 2)
  * (Flag 6 represents Zelda has played the archery game, target 3)
  * (Flag 7 represents Zelda has unlocked the door in the Roar Stick room)
  * (Flag 8 represents Zelda has defeated the red knight)
  * (Flag 9 represents Zelda has activated the switch in the Iron Knuckle Switch room)
  * (Flag 10 represents Zelda has defeated the blue knight)
  * (Flag 11 represents Zelda has defeated the green knight)
  * (Flag 12 represents Ursore has given his last speech)
  * (Flag 13 represents Zelda has defeated Ursore)
  * (Flag 14 represents Zelda has collected the heart piece)
  * (Flag 15 represents Ursore has given his first speech)
  * (Flag 16 represents the red knight has given his speech)
* `$29$: Variable 029` Fire Shrine Flags - `word`.
  * (Flag 1 is the Fire Shrine Map)
  * (Flag 2 is the Fire Shrine Compass)
  * (Flag 3 represents Zelda has unlocked the first door)
  * (Flag 4 represents Zelda has unlocked the second door)
  * (Flag 5 represents Warbane has given his first speech)
  * (Flag 6 represents Zelda has unlocked the third door)
  * (Flag 7 represents Zelda has unlocked the fourth door)
  * (Flag 8 represents Warbane has given his second speech)
  * (Flag 9 represents Zelda has defeated Maxus)
  * (Flag 10 represents Warbane has given his third speech)
  * (Flag 11 represents Zelda has defeated Warbane)
  * (Flag 12 represents Zelda has collected the heart piece)
  * (Flag 13 represents the first blacksmith has given his speech)
  * (Flag 14 represents the second blacksmith has given his speech)
  * (Flag 15 represents Zelda has collected the celestial sign)
  * (Flag 16 is ???)
* `$29$: Variable 029` More Strength Shrine Flags - `word`.
  * (Flag 1 represents Ursore has given his second speech)
  * (Flag 2 represents the blue knight has given his speech)
  * (Flag 3 represents the green knight has given his speech)
  * (Flag 4 represents Ursore has given his third speech)
  * (Flag 5 represents Zelda has collected the celestial sign)
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

## Animated tiles guide

There are 9 different animated tiles which use a different key in the HUD to identify them.

![animated tiles](../assets/tilesets/animated.png)

- A scene with __sea__ tiles will have sea tile 0 followed by sea tile 1
- A scene with __crashing wave__ will have wave tile 0, wave tile 1, sea tile 0 and sea tile 1
- A scene with __river__ tiles will have river tile 0
- A scene with __sea__ tiles and __river__ tiles will have sea tile 1, sea tile 0 and river tile 0
- A scene with __lake__ tiles will have lake tile 0
- A scene with __lake__ tiles and __river__ tiles will have lake tile 1 and river tile 0
- A scene with __lava__ tiles will have lava tile 0 followed by lava tile 1
- A scene with __lamp__ tiles will have lamp tile 0 followed by lamp tile 1
- A scene with __torch__ tiles will have torch tile 0
- A scene with __torch__ tiles and __lamp__ tiles will have torch tile 3, lamp tile 0 and lamp tile 1

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
  - Lonlyn after giving Zelda rupees
- __Music (♫)__
  - Yvonne singing
  - Bard playing instrument
- __Sleep (Zzz)__
  - sleeping soldier
### Enemies
- __Shock (!)__ 
  - Taking damage

## Spells

Zelda can cast 18 different spells, which I've grouped into 4 discreet categories:

1. Single Projectile (straight line)
- Bow & Arrow
- Broadsword
- Dagger
- Noise
- Jade ring

2. Single Projectile (rotates)
- Hammer
- roar stick
- short axe
- Boomerang

3. Triple Projectile
- Calm
- Gold Necklace
- Feather
- Jade Amulet
- joust
- turquoise ring

4. Other
- Firestorm
    - fires 4 fireballs in each cardinal direction
- Rings of fire
    - Fires 3 fireballs in a row
- Pyros
    - fire 4 fireballs in an arc in the direction Zelda is facing

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

## Limitation (DX improvements / wishlist)

A list of features missing from the GB port which are present in the original.

- Colour!
- Missing slippery floor mechanics
- Magic shield doesn't protect against projectiles
- Damage scaling isn't in effect when Zelda powers up
- Enemies should stay defeated for a few screens
- Flying/jumping enemies should have a shadow
- Enemy/boss reset on pause
- Missing sound FX
