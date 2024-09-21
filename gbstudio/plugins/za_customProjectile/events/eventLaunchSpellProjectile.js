// const id = "EVENT_LAUNCH_CUSTOM_PROJECTILE";
// const name = "Launch Spell Projectile";
// const groups = ["Zelda's Adventure"];
// const subGroups = {
//   EVENT_GROUP_ACTOR: "EVENT_GROUP_ACTIONS",
// };

// const fields = [
//   {
//     key: "__section",
//     type: "tabs",
//     defaultValue: "projectile",
//     variant: "eventSection",
//     values: {
//       projectile: "FIELD_PROJECTILE",
//       source: "FIELD_SOURCE",
//       presets: "FIELD_PRESETS",
//     },
//   },

//   {
//     type: "group",
//     conditions: [
//       {
//         key: "__section",
//         in: ["projectile", undefined],
//       },
//     ],
//     fields: [
//       {
//         key: "spriteSheetId",
//         type: "sprite",
//         label: "FIELD_SPRITE_SHEET",
//         description: "FIELD_SPRITE_SHEET_PROJECTILE_DESC",
//         defaultValue: "LAST_SPRITE",
//       },
//       {
//         key: "spriteStateId",
//         type: "animationstate",
//         label: "FIELD_ANIMATION_STATE",
//         description: "FIELD_ANIMATION_STATE_DESC",
//         defaultValue: "",
//       },
//     ],
//   },
//   {
//     key: "actorId",
//     type: "actor",
//     label: "FIELD_SOURCE",
//     description: "FIELD_ACTOR_PROJECTILE_SOURCE_DESC",
//     defaultValue: "$self$",
//     conditions: [
//       {
//         key: "__section",
//         in: ["source"],
//       },
//     ],
//   },
//   {
//     type: "group",
//     conditions: [
//       {
//         key: "__section",
//         in: ["source"],
//       },
//     ],
//     fields: [
//       {
//         key: "x",
//         label: "FIELD_OFFSET_X",
//         description: "FIELD_PROJECTILE_OFFSET_X_DESC",
//         type: "number",
//         min: -256,
//         max: 256,
//         width: "50%",
//         defaultValue: 0,
//       },
//       {
//         key: "y",
//         label: "FIELD_OFFSET_Y",
//         description: "FIELD_PROJECTILE_OFFSET_Y_DESC",
//         type: "number",
//         min: -256,
//         max: 256,
//         width: "50%",
//         defaultValue: 0,
//       },
//     ],
//   },
//   {
//     type: "group",
//     conditions: [
//       {
//         key: "__section",
//         in: ["source"],
//       },
//     ],
//     fields: [
//       {
//         label: "FIELD_LAUNCH_AT",
//         key: "directionType",
//         type: "select",
//         options: [
//           ["direction", "FIELD_FIXED_DIRECTION"],
//           ["actor", "FIELD_ACTOR_DIRECTION"],
//           ["target", "FIELD_ACTOR_TARGET"],
//           ["angle", "FIELD_ANGLE"],
//           ["anglevar", "FIELD_ANGLE_VARIABLE"],
//         ],
//         defaultValue: "direction",
//         alignBottom: true,
//       },
//       {
//         key: "otherActorId",
//         label: "FIELD_DIRECTION",
//         description: "FIELD_PROJECTILE_DIRECTION_DESC",
//         type: "actor",
//         defaultValue: "$self$",
//         conditions: [
//           {
//             key: "directionType",
//             eq: "actor",
//           },
//         ],
//       },
//       {
//         key: "direction",
//         label: "FIELD_DIRECTION",
//         description: "FIELD_PROJECTILE_DIRECTION_DESC",
//         type: "direction",
//         defaultValue: "right",
//         conditions: [
//           {
//             key: "directionType",
//             eq: "direction",
//           },
//         ],
//       },
//       {
//         key: "angle",
//         label: "FIELD_ANGLE",
//         description: "FIELD_PROJECTILE_ANGLE_DESC",
//         type: "angle",
//         defaultValue: 0,
//         min: -256,
//         max: 256,
//         conditions: [
//           {
//             key: "directionType",
//             eq: "angle",
//           },
//         ],
//       },
//       {
//         key: "angleVariable",
//         label: "FIELD_ANGLE",
//         description: "FIELD_PROJECTILE_ANGLE_DESC",
//         type: "variable",
//         defaultValue: "LAST_VARIABLE",
//         conditions: [
//           {
//             key: "directionType",
//             eq: "anglevar",
//           },
//         ],
//       },
//       {
//         key: "targetActorId",
//         label: "FIELD_TARGET",
//         description: "FIELD_PROJECTILE_TARGET_DESC",
//         type: "actor",
//         defaultValue: "$self$",
//         conditions: [
//           {
//             key: "directionType",
//             eq: "target",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     key: "initialOffset",
//     label: "FIELD_DIRECTION_OFFSET",
//     description: "FIELD_PROJECTILE_OFFSET_DESC",
//     type: "number",
//     min: 0,
//     max: 256,
//     width: "50%",
//     defaultValue: 0,
//     conditions: [
//       {
//         key: "__section",
//         in: ["source"],
//       },
//     ],
//   },
//   {
//     type: "group",
//     conditions: [
//       {
//         key: "__section",
//         in: ["projectile", undefined],
//       },
//     ],
//     fields: [
//       {
//         key: "speed",
//         label: "FIELD_SPEED",
//         description: "FIELD_SPEED_DESC",
//         type: "moveSpeed",
//         allowNone: true,
//         defaultValue: 2,
//         width: "50%",
//       },
//       {
//         key: "animSpeed",
//         label: "FIELD_ANIMATION_SPEED",
//         description: "FIELD_ANIMATION_SPEED_DESC",
//         type: "animSpeed",
//         defaultValue: 15,
//         width: "50%",
//       },
//     ],
//   },
//   {
//     key: "lifeTime",
//     label: "FIELD_LIFE_TIME",
//     description: "FIELD_PROJECTILE_LIFE_TIME_DESC",
//     type: "number",
//     min: 0,
//     max: 4,
//     step: 0.1,
//     width: "50%",
//     defaultValue: 1,
//     conditions: [
//       {
//         key: "__section",
//         in: ["projectile", undefined],
//       },
//     ],
//   },
//   {
//     type: "group",
//     alignBottom: true,
//     conditions: [
//       {
//         key: "__section",
//         in: ["projectile", undefined],
//       },
//     ],
//     fields: [
//       {
//         key: "loopAnim",
//         label: "FIELD_LOOP_ANIMATION",
//         description: "FIELD_LOOP_ANIMATION_DESC",
//         type: "checkbox",
//         defaultValue: true,
//       },
//       {
//         key: "destroyOnHit",
//         label: "FIELD_DESTROY_ON_HIT",
//         description: "FIELD_PROJECTILE_DESTROY_ON_HIT_DESC",
//         type: "checkbox",
//         defaultValue: true,
//       },
//     ],
//   },
//   {
//     type: "group",
//     conditions: [
//       {
//         key: "__section",
//         in: ["projectile", undefined],
//       },
//     ],
//     fields: [
//       {
//         key: "collisionGroup",
//         label: "FIELD_COLLISION_GROUP",
//         description: "FIELD_COLLISION_GROUP_DESC",
//         type: "collisionMask",
//         width: "50%",
//         includePlayer: false,
//         defaultValue: "3",
//       },
//       {
//         key: "collisionMask",
//         label: "FIELD_COLLIDE_WITH",
//         description: "FIELD_COLLIDE_WITH_DESC",
//         type: "collisionMask",
//         width: "50%",
//         includePlayer: true,
//         defaultValue: ["1"],
//       },
//     ],
//   },
//   {
//     type: "presets",
//     conditions: [
//       {
//         key: "__section",
//         in: ["presets"],
//       },
//     ],
//   },
// ];

// const userPresetsGroups = [
//   {
//     id: "projectile",
//     label: "FIELD_PROJECTILE",
//     fields: [
//       "spriteSheetId",
//       "spriteStateId",
//       "speed",
//       "animSpeed",
//       "lifeTime",
//       "loopAnim",
//       "destroyOnHit",
//       "collisionGroup",
//       "collisionMask",
//     ],
//     selected: true,
//   },
//   {
//     id: "source",
//     label: "FIELD_SOURCE",
//     fields: ["actorId", "x", "y"],
//     selected: true,
//   },
//   {
//     id: "direction",
//     label: "FIELD_DIRECTION",
//     fields: [
//       "directionType",
//       "otherActorId",
//       "direction",
//       "angle",
//       "angleVariable",
//       "targetActorId",
//       "initialOffset",
//     ],
//     selected: true,
//   },
// ];

// const userPresetsIgnore = ["__section"];

// const compile = (input, helpers) => {
//   const {
//     getProjectileIndex,
//     launchProjectileInDirection,
//     launchProjectileInAngle,
//     launchProjectileInSourceActorDirection,
//     launchProjectileInActorDirection,
//     launchProjectileInAngleVariable,
//     launchProjectileTowardsActor,
//     actorSetActive,
//   } = helpers;

//   actorSetActive(input.actorId);
//   const projectileIndex = getProjectileIndex(
//     input.spriteSheetId,
//     input.spriteStateId,
//     input.speed,
//     input.animSpeed,
//     input.lifeTime,
//     input.initialOffset,
//     input.collisionGroup,
//     input.collisionMask
//   );
//   if (projectileIndex < 0) {
//     return;
//   }
//   if (input.directionType === "direction") {
//     launchProjectileInDirection(
//       projectileIndex,
//       input.x,
//       input.y,
//       input.direction,
//       input.destroyOnHit,
//       input.loopAnim
//     );
//   } else if (input.directionType === "angle") {
//     launchProjectileInAngle(
//       projectileIndex,
//       input.x,
//       input.y,
//       input.angle,
//       input.destroyOnHit,
//       input.loopAnim
//     );
//   } else if (input.directionType === "anglevar") {
//     launchProjectileInAngleVariable(
//       projectileIndex,
//       input.x,
//       input.y,
//       input.angleVariable,
//       input.destroyOnHit,
//       input.loopAnim
//     );
//   } else if (input.directionType === "actor") {
//     if (input.actorId === input.otherActorId) {
//       launchProjectileInSourceActorDirection(
//         projectileIndex,
//         input.x,
//         input.y,
//         input.destroyOnHit,
//         input.loopAnim
//       );
//     } else {
//       launchProjectileInActorDirection(
//         projectileIndex,
//         input.x,
//         input.y,
//         input.otherActorId,
//         input.destroyOnHit,
//         input.loopAnim
//       );
//     }
//   } else if (input.directionType === "target") {
//     if (input.actorId === input.targetActorId) {
//       launchProjectileInSourceActorDirection(
//         projectileIndex,
//         input.x,
//         input.y,
//         input.destroyOnHit,
//         input.loopAnim
//       );
//     } else {
//       launchProjectileTowardsActor(
//         projectileIndex,
//         input.x,
//         input.y,
//         input.targetActorId,
//         input.destroyOnHit,
//         input.loopAnim
//       );
//     }
//   }
// };

// module.exports = {
//   id,
//   description: "EVENT_LAUNCH_PROJECTILE_DESC",
//   groups,
//   subGroups,
//   fields,
//   compile,
//   userPresetsGroups,
//   userPresetsIgnore,
//   waitUntilAfterInitFade: true,
// };


/*
 * Author: Tomo (@indiegdevstdio)
 * Replaces sprite tiles in Color-Only mode
 */
const scriptValueHelpers = require("shared/lib/scriptValue/helpers");

const id = "EVENT_LAUNCH_CUSTOM_PROJECTILE";
const name = "Launch Spell Projectile";
const groups = ["Zelda's Adventure"];

const fields = [].concat(
  [{
    type: "group",
    fields: [
      {
        label: "Replaces a specified sprite tile with ability to select a VRAM bank in 'Color Only' mode games.",
        type: "label",
      },
    ],
  }],
//   [{
//     type: "group",
//     fields: [
//       {
//         key: "actor",
//         type: "actor",
//         label: "Actor",
//         description: "The actor in which you want to replace the sprite’s tile.",
//         defaultValue: "$self$",
//         width: "70%",
//       },
//       {
//         key: "vram_bank",
//         type: "union",
//         types: ["number", "variable"],
//         label: "VRAM Bank",
//         description: "The bank you want to reference. 0 = Bank 0, 1 = Bank 1.",
//         defaultType: "number",
//         defaultValue: {
//           number: 0,
//         },
//         width: "30%",
//       },
//     ],
//   }],
  [{
    type: "group",
    fields: [
      {
        key: "tileset_bank_tiles",
        type: "text",
        label: "Tile Bank",
        description: "The source tile bank reference to use for replacing.",
        defaultValue: "___bank_tileset_number_tiles",
        width: "50%",
      },
      {
        key: "tileset_tiles",
        type: "text",
        label: "Tileset",
        description: "The source tileset reference to use for replacing.",
        defaultValue: "_tileset_number_tiles",
        width: "50%",
      },
    ],
  }]
//   [{
//     type: "group",
//     fields: [
//       {
//         key: "source_tile_idx",
//         type: "union",
//         types: ["number", "variable"],
//         label: "Background Tile Index",
//         description: "The background tile index in the source tileset to replace with.",
//         defaultType: "number",
//         defaultValue: {
//           number: 0,
//         },
//         width: "50%",
//       },
//       {
//         key: "target_tile_idx",
//         type: "union",
//         types: ["number", "variable"],
//         label: "Sprite Tile Index",
//         description: "The sprite’s tile index to be replaced by the background tile.",
//         defaultType: "number",
//         defaultValue: {
//           number: 0,
//         },
//         width: "50%",
//       },
//     ],
//   }],
);

export const compile = (input, helpers) => {
//   const { vram_bank, actor, tileset_bank_tiles, tileset_tiles, source_tile_idx, target_tile_idx } = input;
  const { tileset_bank_tiles, tileset_tiles} = input;
  const { _stackPush, getVariableAlias, _stackPushConst, _callNative, _stackPop, appendRaw,
    variableSetToScriptValue, variableSetToValue, _stackPushReference, actorSetById, actorSetActive, actorPushById } = helpers;
  const { precompileScriptValue, optimiseScriptValue } = scriptValueHelpers;

  // Push actor index to stack
  // FN_ARG5
//   actorPushById(actor);

//   // Get & push the value for vram_bank 
//   // FN_ARG4
//   const [typeVramBank] = precompileScriptValue(optimiseScriptValue(vram_bank));
//   // Check if the passed value is a number or variable
//   if (typeVramBank[0].type === "number") {
//     // It was a number, so we push to stack as constant
//     _stackPushConst(typeVramBank[0].value);
//   } else if (typeVramBank[0].type === "variable") {
//     // It was a variable, so we push to stack as variable
//     const variableAlias = getVariableAlias(typeVramBank[0].value);
//     _stackPush(variableAlias);
//   }

//   // Get & push the value for source tile index 
//   // FN_ARG3
//   const [typeSourceTileIdx] = precompileScriptValue(optimiseScriptValue(source_tile_idx));
//   // Check if the passed value is a number or variable
//   if (typeSourceTileIdx[0].type === "number") {
//     // It was a number, so we push to stack as constant
//     _stackPushConst(typeSourceTileIdx[0].value);
//   } else if (typeSourceTileIdx[0].type === "variable") {
//     // It was a variable, so we push to stack as variable
//     const variableAlias = getVariableAlias(typeSourceTileIdx[0].value);
//     _stackPush(variableAlias);
//   }

//   // Get & push the value for target tile index
//   // FN_ARG2
//   const [typeTargetTileIdx] = precompileScriptValue(optimiseScriptValue(target_tile_idx));
//   // Check if the passed value is a number or variable
//   if (typeTargetTileIdx[0].type === "number") {
//     // It was a number, so we push to stack as constant
//     _stackPushConst(typeTargetTileIdx[0].value);
//   } else if (typeTargetTileIdx[0].type === "variable") {
//     // It was a variable, so we push to stack as variable
//     const variableAlias = getVariableAlias(typeTargetTileIdx[0].value);
//     _stackPush(variableAlias);
//   }

  // FN_ARG1
  // FN_ARG0
  appendRaw(`
    VM_PUSH_CONST ` + tileset_bank_tiles + `
    VM_PUSH_CONST ` + tileset_tiles + `
    `);

  // Call native function on engine side
  _callNative("SetupCustomProjectile");

  // Remove pushed values from stack
  appendRaw(`
    VM_POP 2
    `);

  // Remove pushed values from stack
//   _stackPop(4);
};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
};
