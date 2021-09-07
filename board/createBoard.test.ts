import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { createBoard } from "./createBoard.ts";

Deno.test("[createBoard] happy", () => {
  const result = createBoard(`"Wed, 07 Jul 2021 09:59:32 GMT|"Arch-Villain Rafaam|"Dragonspawn Lieutenant (2/3 Taunt)|"1|"|"Win|"gameId|"player"`);
  assertEquals(result, {
      date: "2021-07-07T09:59:32.000Z",
      hero: {
        name: "Arch-Villain Rafaam",
        slug: "arch-villain_rafaam"
      },
      minions: [
        {
          "name": "Dragonspawn Lieutenant",
          "stats": {
            "attack": 2,
            "health": 3
          },
          "capabilities": {
            "taunt": true,
            "windfury": false,
            "poison": false,
            "divineShield": false,
            "deathrattle": false,
            "reborn": false
          }
        }
      ],
      turn: 1,
      isSelf: false,
      combatResult: "Win",
      gameId: "gameId",
      player: "player"
    }
  );
});
