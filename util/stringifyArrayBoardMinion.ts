import { BoardMinion } from "../minions/getMinions.ts";
import { stringifyString } from "./stringifyString.ts";
import { stringifyNumber } from "./stringifyNumber.ts";
import { stringifyBool } from "./stringifyBool.ts";

export function stringifyArrayBoardMinion(board: Array<BoardMinion> = []) {
  const stringifiedBoard = board.reduce((prev, curr) => {
    if (prev !== "") {
      prev += ",";
    }
    prev += `
      {
        ${stringifyString("name", curr.name)}
        stats: {
          ${stringifyNumber("attack", curr.stats.attack)}
          ${stringifyNumber("health", curr.stats.health)}
        }
        capabilities: {
          ${stringifyBool("poison", curr.capabilities.poison)}
          ${stringifyBool("windfury", curr.capabilities.windfury)}
          ${stringifyBool("divineShield", curr.capabilities.divineShield)}
          ${stringifyBool("taunt", curr.capabilities.taunt)}
          ${stringifyBool("deathrattle", curr.capabilities.deathrattle)}
          ${stringifyBool("reborn", curr.capabilities.reborn)}
        }
      }
    `;
    return prev;
  }, "");
  return `[${stringifiedBoard}]`;
}
