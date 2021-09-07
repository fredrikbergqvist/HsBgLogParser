import { BoardMinion } from "../minions/getMinions.ts";


export const boardMinionMock: BoardMinion = {
  "name": "Agamaggan, the Great Boar",
  "stats": {
    "attack": 8,
    "health": 8
  },
  "capabilities": {
    "taunt": false,
    "windfury": false,
    "poison": false,
    "divineShield": false,
    "deathrattle": false,
    reborn: false
  }
};

export const boardMinionsMock: Array<BoardMinion> = [boardMinionMock];
