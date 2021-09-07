import { BoardState } from "../board/createBoard.ts";

export const boardMock: BoardState = {
  date: "2021-11-11T010101",
  hero: {
    name: "hero name",
    slug: "heroname"
  },
  minions: [
    {
      name: "Agamaggan, the Great Boar",
      stats: {
        attack: 8,
        health: 8
      },
      capabilities: {
        poison: false,
        windfury: false,
        divineShield: false,
        taunt: false,
        deathrattle: false,
        reborn: false
      }
    }
  ],
  turn: 10,
  isSelf: true,
  combatResult: "Win",
  gameId: "gameId",
  player: "player"
};
