import { Game } from "./createGame.ts";
import { getPrettyDate } from "../util/getPrettyDate.ts";

export function writeGamesToFile(games: Array<Game>): void {
  const dateNow = new Date();
  const filename = `${getPrettyDate(dateNow)}_hs-bg-games.json`;
  Deno.writeTextFile(filename, JSON.stringify(games));

  console.log(`File written to ${filename}`);
}
