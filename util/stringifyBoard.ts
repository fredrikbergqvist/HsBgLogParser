import { BoardState } from "../board/createBoard.ts";
import { stringifyString } from "./stringifyString.ts";
import { stringifyArrayBoardMinion } from "./stringifyArrayBoardMinion.ts";
import { stringifyBool } from "./stringifyBool.ts";
import { stringifyNumber } from "./stringifyNumber.ts";

export function stringifyBoard(board: BoardState): string {
  if (!board) {
    throw TypeError("Board state is missing");
  }
  return `{
        ${stringifyString("date", board.date)}
        hero: {
          ${stringifyString("name", board.hero.name)}
          ${stringifyString("slug", board.hero.slug)}
        }
        minions: ${stringifyArrayBoardMinion(board.minions)}
        ${stringifyNumber("turn", board.turn)}
        ${stringifyBool("isSelf", board.isSelf)}
        ${stringifyString("combatResult", board.combatResult)}
        ${stringifyString("gameId", board.gameId)}
        ${stringifyString("player", board.player)}
  }`;
}
