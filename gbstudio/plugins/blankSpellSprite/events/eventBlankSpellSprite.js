export const id = "ZA_EVENT_BLANK_SPELL_SPRITE";
export const groups = ["Zelda's Adventure"];
export const name = "Blank Reference Spell";


export const fields = [
    {
        type: "group",
        fields: [
            {
                label: "Replaces the spell reference actor's sprites with blank tiles. Can be used in conjuction with VM_ACTOR_SET_SPRITESHEET to dynamically replace projectiles.",
                type: "label",
            },
        ],
    },
    {
        type: "group",
        fields: [
            {
                label: "Requires the first actor in the scene to be the reference spell (as an actor)",
                type: "label",
            },
        ],
    }
];

export const compile = (input, helpers) => {
    const { _addComment, appendRaw, _callNative } = helpers;

    // FN_ARG0
    _addComment(`Replacing reference spell with blank tiles`);
    appendRaw(`VM_PUSH_CONST 1`); // .ARG0 actor index 1 (spell reference)

    // Call native function on engine side
    _callNative("setBlankSpellSprite");

    appendRaw(`VM_POP 1`);
};
