import { BoardMinion, getMinions } from "../minions/getMinions.ts";
import { getHero, Hero } from "../hero/getHero.ts";

export type CombatResult = "Win" | "Lose" | "Draw";
export type BoardState = {
  date: string;
  hero: Hero;
  minions: Array<BoardMinion>;
  turn: number;
  isSelf: boolean;
  combatResult: CombatResult;
  gameId: string;
  player: string;
}

export function createBoard(board: string): BoardState {
  const boardValues = board.split("|")
    .map(e => e.replace(/"/g, ""));
  const minions = getMinions(boardValues[2]);
  return {
    date: new Date(boardValues[0]).toISOString(),
    hero: getHero(boardValues[1]),
    minions,
    turn: Number(boardValues[3]),
    isSelf: boardValues[4] !== "",
    combatResult: boardValues[5] as CombatResult,
    gameId: boardValues[6],
    player: boardValues[7]
  };
}
