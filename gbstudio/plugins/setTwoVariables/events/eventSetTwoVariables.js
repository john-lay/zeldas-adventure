// // https://gist.github.com/pau-tomas/25ef9ab2508b80b22bde4091b1df0503
export const id = "JD_SET_TWO_VARIABLES";

export const name = "Set Two Variables";
export const groups = ["Zelda's Adventure"];

export const fields = [
    {
        key: "vectorX",
        type: "variable",
    },
    {
        key: "vectorY",
        type: "variable",
    },
    {
        key: "value",
        type: "number",
        min: 0,
        max: 255,
        defaultValue: 128
    }
];

export const compile = (input, helpers) => {
    const { variableSetToValue } = helpers;
    const { vectorX, vectorY, value} = input;
    variableSetToValue(vectorX, value);
    variableSetToValue(vectorY, value);
};
