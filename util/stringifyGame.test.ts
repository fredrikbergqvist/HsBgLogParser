import { assertEquals, assertThrows } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { stringifyGame } from "./stringifyGame.ts";
import { gameMock } from "../__mocks__/game.mock.ts";

Deno.test("[stringifyGame] happy", () => {
  const result = stringifyGame(gameMock);
  assertEquals(result.replace(/ /g, ""), `{
    date: "2021-11-11T010101"
    hero: {
    name: "C'Thun"
    slug: "cthun"
    }
    position: 2
    mmr: 6745
    board:[
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
    available: ["Quilboar","Elemental","Murloc","Demon","Mech"]
    unavailable: ["Beast","Dragon","Pirate"]
    tierTurn: {
      two: 3
      three: 6
      four: 8
      five: 13
      six: 0
    }
    endingTurn: 13
    gameId: "gameId"
    player: "player"
  }`.replace(/ /g, ""));
});


Deno.test("[stringifyGame] unhappy", () => {
  assertThrows(() => {
    stringifyGame(undefined as any);
  }, TypeError, "Game is missing");
});
