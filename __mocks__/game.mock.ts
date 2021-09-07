import { Game } from "../games/createGame.ts";
import { boardMinionsMock } from "./boardMinions.mock.ts";

export const gameMock: Game = {
  "date": "2021-11-11T010101",
  "hero": {
    "name": "C'Thun",
    "slug": "cthun"
  },
  "tierTurn": {
    "two": 3,
    "three": 6,
    "four": 8,
    "five": 13,
    "six": 0
  },
  "mmr": 6745,
  "player": "player",
  "available": [
    "Quilboar",
    "Elemental",
    "Murloc",
    "Demon",
    "Mech"
  ],
  "unavailable": [
    "Beast",
    "Dragon",
    "Pirate"
  ],
  "position": 2,
  "endingTurn": 13,
  "gameId": "gameId",
  "board": boardMinionsMock
};
