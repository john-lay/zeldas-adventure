export const id = "ZA_EVENT_SWAP_SPELL_SPRITE";
export const groups = ["Zelda's Adventure"];
export const name = "Swap Spell Sprite";

const scriptValueHelpers = require("shared/lib/scriptValue/helpers");

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
    // {
    //     key: "equippedValue",
    //     label: "Equipped",
    //     type: "variable",
    //     defaultValue: {
    //       type: "variable",
    //       value: "LAST_VARIABLE",
    //     }
    // },
    {
        key: "equippedValue",
        type: "union",
        types: ["number", "variable"],
        label: "Equipped Variable",
        defaultType: "variable",
        defaultValue: "LAST_VARIABLE"
    },
];

export const compile = (input, helpers) => {
    const { equippedValue } = input;
    const { _addComment, appendRaw, _callNative, _stackPush, _stackPop, _setVariable, getVariableAlias } = helpers;
    const { precompileScriptValue, optimiseScriptValue } = scriptValueHelpers;

    _addComment(`Replacing reference spell with equipped spell sprite tiles`);
    // appendRaw(`VM_PUSH_CONST ` + input.equippedValue); // .ARG1 equipped
    // _setVariable(input.equippedValue, ".ARG1");
    // _stackPush(input.equippedValue);

    // Get & push the value for equipped variable .ARG1
    const [typeEquippedValue] = precompileScriptValue(optimiseScriptValue(equippedValue));
    // Check if the passed value is a number or variable
    if (typeEquippedValue[0].type === "number") {
        // It was a number, so we push to stack as constant
        _stackPushConst(typeEquippedValue[0].value);
    } else if (typeEquippedValue[0].type === "variable") {
        // It was a variable, so we push to stack as variable
        const variableAlias = getVariableAlias(typeEquippedValue[0].value);
        _stackPush(variableAlias);
    }

    appendRaw(`VM_PUSH_CONST 1`); // .ARG0 actor index 1 (spell reference sprite)

    // Call native function on engine side
    _callNative("setEquippedSpellSprite");

    appendRaw(`VM_POP 1`);
    _stackPop(1);
};
