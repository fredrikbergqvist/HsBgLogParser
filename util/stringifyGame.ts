import { Game } from "../games/createGame.ts";
import { stringifyString } from "./stringifyString.ts";
import { stringifyNumber } from "./stringifyNumber.ts";
import { stringifyArrayBoardMinion } from "./stringifyArrayBoardMinion.ts";
import { stringifyArrayString } from "./stringifyArrayString.ts";

export function stringifyGame(game: Game): string {
  if (!game) {
    throw TypeError("Game is missing");
  }
  return `{
        ${stringifyString("date", game.date)}
        hero: {
          ${stringifyString("name", game.hero.name)}
          ${stringifyString("slug", game.hero.slug)}
        }
        ${stringifyNumber("position", game.position)}
        ${stringifyNumber("mmr", game.mmr)}
        board: ${stringifyArrayBoardMinion(game.board)}
        available: ${stringifyArrayString(game.available)}
        unavailable: ${stringifyArrayString(game.unavailable)}
        tierTurn:{
          ${stringifyNumber("two", game.tierTurn.two)}
          ${stringifyNumber("three", game.tierTurn.three)}
          ${stringifyNumber("four", game.tierTurn.four)}
          ${stringifyNumber("five", game.tierTurn.five)}
          ${stringifyNumber("six", game.tierTurn.six)}
        }
        ${stringifyNumber("endingTurn", game.endingTurn)}
        ${stringifyString("gameId", game.gameId)}
        ${stringifyString("player", game.player)}
      }`;
}
