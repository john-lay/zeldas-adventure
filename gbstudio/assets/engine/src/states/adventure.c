#pragma bank 255

#include "data/states_defines.h"
#include "states/adventure.h"

#include "actor.h"
#include "camera.h"
#include "collision.h"
#include "game_time.h"
#include "input.h"
#include "scroll.h"
#include "trigger.h"
#include "data_manager.h"
#include "rand.h"
#include "vm.h"
#include "math.h"

#ifndef ADVENTURE_CAMERA_DEADZONE
#define ADVENTURE_CAMERA_DEADZONE 8
#endif

const unsigned char spellArrow[] = {
0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x18,0x18,0x1C,0x14,0xFE,0xFA,0x3F,0xE5,
0x3F,0xE5,0xFE,0xFA,0x1C,0x14,0x18,0x18,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x7F,0x7F,0x80,0xFF,
0x80,0xFF,0x7F,0x7F,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,

0x80,0x80,0xC0,0x40,0xE0,0xA0,0xF0,0x50,0xF0,0x70,0xC0,0xC0,0x40,0xC0,0x40,0xC0,
0x40,0xC0,0x40,0xC0,0x40,0xC0,0x40,0xC0,0x40,0xC0,0x40,0xC0,0x40,0xC0,0x80,0x80,
0x01,0x01,0x03,0x02,0x07,0x05,0x0F,0x0A,0x0F,0x0E,0x03,0x03,0x02,0x03,0x02,0x03,
0x02,0x03,0x02,0x03,0x02,0x03,0x02,0x03,0x02,0x03,0x02,0x03,0x02,0x03,0x01,0x01,

0x80,0x80,0x40,0xC0,0x40,0xC0,0x40,0xC0,0x40,0xC0,0x40,0xC0,0x40,0xC0,0x40,0xC0,
0x40,0xC0,0x40,0xC0,0xC0,0xC0,0xF0,0x70,0xF0,0x50,0xE0,0xA0,0xC0,0x40,0x80,0x80,
0x01,0x01,0x02,0x03,0x02,0x03,0x02,0x03,0x02,0x03,0x02,0x03,0x02,0x03,0x02,0x03,
0x02,0x03,0x02,0x03,0x03,0x03,0x0F,0x0E,0x0F,0x0A,0x07,0x05,0x03,0x02,0x01,0x01,
};

// const struct tileset_t sprite_spell_arrow_tileset;

void adventure_init(void) BANKED {
    // Set camera to follow player
    camera_offset_x = 0;
    camera_offset_y = 0;
    camera_deadzone_x = ADVENTURE_CAMERA_DEADZONE;
    camera_deadzone_y = ADVENTURE_CAMERA_DEADZONE;
    VBK_REG = 1;
    set_sprite_data(128, 12, spellArrow);
    // SetBankedSpriteData(128, 12, spellArrow, 0);
    // SetBankedSpriteData(128, 12, sprite_spell_arrow_tileset, BANKREF(sprite_spell_arrow));
    VBK_REG = 0;
}

void adventure_update(void) BANKED {
    actor_t *hit_actor;
    UBYTE tile_start, tile_end;
    UBYTE angle = 0;
    direction_e new_dir = DIR_NONE;

    player_moving = FALSE;

    if (INPUT_RECENT_LEFT) {
        new_dir = DIR_LEFT;
    } else if (INPUT_RECENT_RIGHT) {
        new_dir = DIR_RIGHT;
    } else if (INPUT_RECENT_UP) {
        new_dir = DIR_UP;
    } else if (INPUT_RECENT_DOWN) {
        new_dir = DIR_DOWN;
    }

    if (INPUT_LEFT) {
        player_moving = TRUE;
        if (INPUT_UP) {
            angle = ANGLE_315DEG;
        } else if (INPUT_DOWN) {
            angle = ANGLE_225DEG;
        } else {
            angle = ANGLE_270DEG;
        }
    } else if (INPUT_RIGHT) {
        player_moving = TRUE;
        if (INPUT_UP) {
            angle = ANGLE_45DEG;
        } else if (INPUT_DOWN) {
            angle = ANGLE_135DEG;
        } else {
            angle = ANGLE_90DEG;
        }
    } else if (INPUT_UP) {
        player_moving = TRUE;
        angle = ANGLE_0DEG;
    } else if (INPUT_DOWN) {
        player_moving = TRUE;
        angle = ANGLE_180DEG;
    }

    if (player_moving) {
        point16_t new_pos;
        new_pos.x = PLAYER.pos.x;
        new_pos.y = PLAYER.pos.y;
        point_translate_angle(&new_pos, angle, PLAYER.move_speed);

        // Step X
        tile_start = (((PLAYER.pos.y >> 4) + PLAYER.bounds.top)    >> 3);
        tile_end   = (((PLAYER.pos.y >> 4) + PLAYER.bounds.bottom) >> 3) + 1;
        if (angle < ANGLE_180DEG) {
            UBYTE tile_x = ((new_pos.x >> 4) + PLAYER.bounds.right) >> 3;
            while (tile_start != tile_end) {

                if (tile_at(tile_x, tile_start) & COLLISION_LEFT) {
                    new_pos.x = (((tile_x << 3) - PLAYER.bounds.right) << 4) - 1;
                    break;
                }
                tile_start++;
            }
            PLAYER.pos.x = MIN((image_width - PLAYER.bounds.right - 1) << 4, new_pos.x);
        } else {
            UBYTE tile_x = ((new_pos.x >> 4) + PLAYER.bounds.left) >> 3;
            while (tile_start != tile_end) {
                if (tile_at(tile_x, tile_start) & COLLISION_RIGHT) {
                    new_pos.x = ((((tile_x + 1) << 3) - PLAYER.bounds.left) << 4) + 1;
                    break;
                }
                tile_start++;
            }
            PLAYER.pos.x = MAX(0, (WORD)new_pos.x);
        }

        // Step Y
        tile_start = (((PLAYER.pos.x >> 4) + PLAYER.bounds.left)  >> 3);
        tile_end   = (((PLAYER.pos.x >> 4) + PLAYER.bounds.right) >> 3) + 1;
        if (angle > ANGLE_90DEG && angle < ANGLE_270DEG) {
            UBYTE tile_y = ((new_pos.y >> 4) + PLAYER.bounds.bottom) >> 3;
            while (tile_start != tile_end) {
                if (tile_at(tile_start, tile_y) & COLLISION_TOP) {
                    new_pos.y = ((((tile_y) << 3) - PLAYER.bounds.bottom) << 4) - 1;
                    break;
                }
                tile_start++;
            }
            PLAYER.pos.y = new_pos.y;
        } else {
            UBYTE tile_y = (((new_pos.y >> 4) + PLAYER.bounds.top) >> 3);
            while (tile_start != tile_end) {
                if (tile_at(tile_start, tile_y) & COLLISION_BOTTOM) {
                    new_pos.y = ((((UBYTE)(tile_y + 1) << 3) - PLAYER.bounds.top) << 4) + 1;
                    break;
                }
                tile_start++;
            }
            PLAYER.pos.y = new_pos.y;
        }
    }

    if (new_dir != DIR_NONE) {
        actor_set_dir(&PLAYER, new_dir, player_moving);
    } else {
        actor_set_anim_idle(&PLAYER);
    }

    hit_actor = NULL;
    if (IS_FRAME_ODD) {
        // Check for trigger collisions
        if (trigger_activate_at_intersection(&PLAYER.bounds, &PLAYER.pos, FALSE)) {
            // Landed on a trigger
            return;
        }

        // Check for actor collisions
        hit_actor = actor_overlapping_player(FALSE);
        if (hit_actor != NULL && hit_actor->collision_group) {
            player_register_collision_with(hit_actor);
        }
    }

    if (INPUT_A_PRESSED) {
        if (!hit_actor) {
            hit_actor = actor_in_front_of_player(8, TRUE);
        }
        if (hit_actor && !hit_actor->collision_group && hit_actor->script.bank) {
            script_execute(hit_actor->script.bank, hit_actor->script.ptr, 0, 1, 0);
        }
    }
}
