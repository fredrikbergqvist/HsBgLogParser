import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { getMinions } from "./getMinions.ts";

Deno.test("[getMinions] happy - one minion - basic", () => {
  const result = getMinions("Dragonspawn Lieutenant (2/3)");
  assertEquals(result, [
    {
      "name": "Dragonspawn Lieutenant",
      "stats": {
        "attack": 2,
        "health": 3
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": false,
        "reborn": false
      }
    }
  ]);
});
Deno.test("[getMinions] happy - one minion - huge stats", () => {
  const result = getMinions("Dragonspawn Lieutenant (9999/9999)");
  assertEquals(result, [
    {
      "name": "Dragonspawn Lieutenant",
      "stats": {
        "attack": 9999,
        "health": 9999
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": false,
        "reborn": false
      }
    }
  ]);
});
Deno.test("[getMinions] happy - one minion - all keywords", () => {
  const result = getMinions("Dragonspawn Lieutenant (2/3 Taunt, Deathrattle, Divine Shield, Windfury, Poisonous)");
  assertEquals(result, [
    {
      "name": "Dragonspawn Lieutenant",
      "stats": {
        "attack": 2,
        "health": 3
      },
      "capabilities": {
        "taunt": true,
        "windfury": true,
        "poison": true,
        "divineShield": true,
        "deathrattle": true,
        "reborn": false
      }
    }
  ]);
});
Deno.test("[getMinions] happy - several minions", () => {
  const result = getMinions("Glyph Guardian (3/5), Kindly Grandmother (5/2 Deathrattle), Rat Pack (4/2 Deathrattle), " +
    "Scavenging Hyena (4/2), Scavenging Hyena (6/2), Micro Mummy (2/3), Pack Leader (4/4), Rabid Saurolisk (4/3), " +
    "Prophet of the Boar (2/3), Menagerie Mug (2/4), Acolyte of C'Thun (2/4 Taunt), Imprisoner (6/6 Taunt, Deathrattle)");
  assertEquals(result, [
    {
      "name": "Glyph Guardian",
      "stats": {
        "attack": 3,
        "health": 5
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": false,
        "reborn": false
      }
    },
    {
      "name": "Kindly Grandmother",
      "stats": {
        "attack": 5,
        "health": 2
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": true,
        "reborn": false
      }
    },
    {
      "name": "Rat Pack",
      "stats": {
        "attack": 4,
        "health": 2
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": true,
        "reborn": false
      }
    },
    {
      "name": "Scavenging Hyena",
      "stats": {
        "attack": 4,
        "health": 2
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": false,
        "reborn": false
      }
    },
    {
      "name": "Scavenging Hyena",
      "stats": {
        "attack": 6,
        "health": 2
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": false,
        "reborn": false
      }
    },
    {
      "name": "Micro Mummy",
      "stats": {
        "attack": 2,
        "health": 3
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": false,
        "reborn": false
      }
    },
    {
      "name": "Pack Leader",
      "stats": {
        "attack": 4,
        "health": 4
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": false,
        "reborn": false
      }
    },
    {
      "name": "Rabid Saurolisk",
      "stats": {
        "attack": 4,
        "health": 3
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": false,
        "reborn": false
      }
    },
    {
      "name": "Prophet of the Boar",
      "stats": {
        "attack": 2,
        "health": 3
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": false,
        "reborn": false
      }
    },
    {
      "name": "Menagerie Mug",
      "stats": {
        "attack": 2,
        "health": 4
      },
      "capabilities": {
        "taunt": false,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": false,
        "reborn": false
      }
    },
    {
      "name": "Acolyte of C'Thun",
      "stats": {
        "attack": 2,
        "health": 4
      },
      "capabilities": {
        "taunt": true,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": false,
        "reborn": false
      }
    },
    {
      "name": "Imprisoner",
      "stats": {
        "attack": 6,
        "health": 6
      },
      "capabilities": {
        "taunt": true,
        "windfury": false,
        "poison": false,
        "divineShield": false,
        "deathrattle": true,
        "reborn": false
      }
    }
  ]);
});


Deno.test("[getMinions] unhappy", () => {
  const result = getMinions();
  assertEquals(result, []);
});
Deno.test("[getMinions] empty", () => {
  const result = getMinions("");
  assertEquals(result, []);
});
