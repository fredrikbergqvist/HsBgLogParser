import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { stringifyArrayBoardMinion } from "./stringifyArrayBoardMinion.ts";
import { boardMinionsMock } from "../__mocks__/boardMinions.mock.ts";

Deno.test("[stringifyArrayBoardMinion] happy", () => {
  const result = stringifyArrayBoardMinion(boardMinionsMock);
  assertEquals(result.replace(/ /g, ""), `[
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
  ]`.replace(/ /g, ""));
});

Deno.test("[stringifyArrayBoardMinion] empty", () => {
  const result = stringifyArrayBoardMinion([]);
  assertEquals(result.replace(/ /g, ""), `[]`.replace(/ /g, ""));
});

Deno.test("[stringifyArrayBoardMinion] unhappy", () => {
  const result = stringifyArrayBoardMinion(undefined as any);
  assertEquals(result.replace(/ /g, ""), `[]`.replace(/ /g, ""));
});
