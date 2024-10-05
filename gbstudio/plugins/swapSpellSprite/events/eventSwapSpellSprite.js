export const id = "ZA_EVENT_SWAP_SPELL_SPRITE";
export const groups = ["Zelda's Adventure"];
export const name = "Swap Spell Sprite";

// inspired by https://github.com/tomo666/gb-studio-xv-plugins
export const fields = [
    {
        type: "group",
        fields: [
            {
                label: "Replaces the spell reference actor's sprites with the equipped spell sprite.",
                type: "label",
            },
        ],
    },
];

export const compile = (input, helpers) => {
    const { _addComment, appendRaw, _callNative } = helpers;

    _addComment(`Replacing reference spell with equipped spell sprite tiles`);
    appendRaw(`VM_PUSH_VALUE VAR_EQUIPPED`); // .ARG1 equipped
    appendRaw(`VM_PUSH_CONST 1`); // .ARG0 actor index 1 (spell reference sprite)

    // Call native function on engine side
    _callNative("setEquippedSpellSprite");

    appendRaw(`VM_POP 2`);
};
