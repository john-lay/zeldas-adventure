#pragma bank 255

#include <gbdk/platform.h>
#include "vm.h"
#include "actor.h"

void CustomProjectile(SCRIPT_CTX * THIS, UBYTE tileset_bank, const tileset_t * tileset) BANKED {
    //
    VBK_REG = 1;
    // set_sprite_data(128, 12, spellArrow);
    // SetBankedSpriteData(128, 12, spellArrow, 0);
    // SetBankedSpriteData(128, 12, sprite_spell_arrow_tileset, BANKREF(sprite_spell_arrow));
    /**
     * Call set_sprite_data with data stored in banked memory (non-reentrant!)
     *
     * @param i first tile to write to
     * @param l number of tiles to write
     * @param ptr memory address of tile data within bank
     * @param bank bank to read from
     */
    SetBankedSpriteData(128, 12/*tileset->n_tiles*/, tileset->tiles, tileset_bank);
    
    VBK_REG = 0;
}

void SetupCustomProjectile(SCRIPT_CTX * THIS) OLDCALL BANKED {
	tileset_t* tileset = *(tileset_t**)VM_REF_TO_PTR(FN_ARG0);
	uint8_t tileset_bank = *(uint8_t*)VM_REF_TO_PTR(FN_ARG1);
	// UBYTE target_tile_idx = *(uint8_t*)VM_REF_TO_PTR(FN_ARG2);
	// UBYTE source_tile_idx = *(uint8_t*)VM_REF_TO_PTR(FN_ARG3);
	// UBYTE vram_bank = *(uint8_t*)VM_REF_TO_PTR(FN_ARG4);
	// UBYTE actor_id = *(uint8_t*)VM_REF_TO_PTR(FN_ARG5);
	CustomProjectile(THIS, tileset_bank, tileset);
}
