import { assertEquals, assertThrows } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { boardMock } from "../__mocks__/board.mock.ts";
import { stringifyBoard } from "./stringifyBoard.ts";

Deno.test("[stringifyBoard] happy", () => {
  const result = stringifyBoard(boardMock);
  assertEquals(result.replace(/ /g, ""), `{
    date: "2021-11-11T010101"
    hero: {
      name:"hero name"
      slug:"heroname"
    }
    minions:[
    {
      name: "Agamaggan, the Great Boar"
      stats: {
        attack: 8
        health: 8
      }
      capabilities: {
        poison: false
        windfury: false
        divineShield: false
        taunt: false
        deathrattle: false
        reborn: false
      }
    }
  ]
    turn: 10
    isSelf: true
    combatResult: "Win"
    gameId: "gameId"
    player: "player"
  }`.replace(/ /g, ""));
});


Deno.test("[stringifyBoard] unhappy", () => {
  assertThrows(() => {
    stringifyBoard(undefined as any);
  }, TypeError, "Board state is missing");
});
