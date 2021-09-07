import { BoardMinion, getMinions } from "../minions/getMinions.ts";
import { getTribeInformation } from "./getTribeInformation.ts";
import { getHero, Hero } from "../hero/getHero.ts";


export type Game = {
  date: string;
  hero: Hero
  position: number;
  mmr: number;
  board: Array<BoardMinion>;
  available: Array<string>;
  unavailable: Array<string>;
  tierTurn: {
    two: number;
    three: number;
    four: number;
    five: number;
    six: number;
  },
  endingTurn: number;
  gameId: string;
  player: string;
}

export function createGame(game: String): Game {
  const gameValues = game.split("|")
    .map(e => e.replace(/"/g, ""));
  return {
    date: new Date(gameValues[0]).toISOString(),
    hero: getHero(gameValues[1]),
    position: Number(gameValues[2]),
    mmr: Number(gameValues[3]),
    board: getMinions(gameValues[4]),
    ...getTribeInformation(gameValues[5]),
    tierTurn: {
      two: Number(gameValues[6]),
      three: Number(gameValues[7]),
      four: Number(gameValues[8]),
      five: Number(gameValues[9]),
      six: Number(gameValues[10])
    },
    endingTurn: Number(gameValues[11]),
    gameId: gameValues[12],
    player: gameValues[13]
  };
}
