# Notes
Miscellaneous notes and research.

## Spells

Single Projectile (straight line)
- Bow & Arrow
- Broadsword
- Dagger
- Noise
- Jade ring

Single Projectile (spins)
- Hammer
- roar stick
- short axe
- Boomerang

Triple Projectile
- Calm
- Gold Necklace
- Feather
- Jade Amulet
- joust
- turquoise ring

Other
- Firestorm
    - fires 4 fireballs in each cardinal direction
- Rings of fire
    - Fires 3 fireballs in a row
- Pyros
    - fire 4 fireballs in an arc in the direction Zelda is facing
## Limitation (DX improvements)
[ ] Colour!
[ ] Missing slippery floor mechanics
[ ] Magic shield doesn't protect against projectiles
[ ] Damage scaling isn't in effect when Zelda powers up
[ ] Enemies should stay defeated for a few screens
[ ] Flying/jumping enemies should have a shadow
[ ] Enemy/boss reset on pause
[ ] Missing sound FX

todo
====
[x] swap air shrine and strength shrine celestial signs
[x] celestial signs don't disappear (no way to exit some shrines without)
[x] bossses shouldn't be able to taunt once defeated
[x] add boss damage to bestiary
[x] would old wimbich blacksmith be better than tokkey on ss broadsword entrance
[x] thin joust projectile
[x] strength shrine attack boost
[x] world map compass warp set map x+y
[x] debug feature: salt cellar or magic shield clear all actors from screen
[\] consider new debug flag that once set implements alt. logic for crashing rooms. Instead of enemy counter. Just one defeat opens door.
[ ] slow roar stick down
[x] world map not showing marker

shrine review
=============

[ ] Remove enemy counter when not needed + reset to zero after door is deactivated / item is activated
[ ] Remove enemy counter with 1 hit!
[x] Add boss taunt / speech flag (only taunt once)
[x] Add door open (only open doors once)
[ ] identify slow down + review enemy scripts that need position data
[\] move boss update logic to self update
[\] consider new "on enemy hit" script.
[x] resume outside boss room set map explicit position

other sprites
=============
celestial sign = piece of power
ganons avatar = mad batter
shooting gallery = ooa bear
water shrine spears = original pixel art

Possible causes of crash
========================
- review stalfos script for possible cause of crash in illusion shrine
- IS and AS enemy scripts appear to indicate the player is being deactivated at the end of "On Hit: Group 1" events
- some collectable sprites have a weird hide player ref. on init

reproducible crash
- IS crash happens east of room using knife (requires all enemies killed to activate knife)
- AS crash happens south of compass (requires all enemies killed to activate compass)
- WS crash east of first Kelpie (requires x hits to deactivate spikes)
- ES crash south of 3 keese screen (requires all enemies killed to activate compass)


final release
=============

[x] Delete default actors
[ ] Disable debug menu
[ ] Finalise readme
[ ] Finalise notes
[ ] Update itch page
[ ] Record video for promo video
[ ] 100% playthrough
[ ] QR code credits
[\] update tolemac map with outline


"type": "ZELDASINVENTORY",
"type": "POINTNCLICK",

"type": "ZELDASADVENTURE",
"type": "TOPDOWN",

music
-----
celestial sign
- spooky/detective intro (mid portion), overworld/great melody 2, 
-- overworld/great melody 2
boss
- overworld/villians of hip hop, jingles/ short sml2, action/boss fight 1, action/monty's overheating spaceship, action/tense boss music
    - action/monty's overheating spaceship
ending - exploration/twilight drive


enemy scripts that need position data
-------------------------------------
Battle Bat
Dragonfly
Eyesoar
Peahat
Piranha

enemy scripts that use player relative location
-----------------------------------------------
crow / dacto
crow / dacto alt
goriya
hard hat beetle
leever
lynel
stalfos (jump)
tektite
tektite alt
wizzrobe
zol
zora
