import { createGame, Game } from "./createGame.ts";
import { DECK_TRACKER_GAME_FILE } from "../config.ts";

export async function clearLog(logPath: string, data: string = "") {
  console.log(`Resetting ${logPath}`);
  return Deno.writeTextFile(logPath, data);
}

export async function readGameLog(): Promise<Array<Game>> {
  const gamesTextOutput: string = await Deno.readTextFile(DECK_TRACKER_GAME_FILE);
  const gameRows = gamesTextOutput
    // File separates entried with "," but also use comma in values.
    // Replace "," with "|" for easier handling
    .replace(/","/g, "\"\|")
    // Split the rows by return
    .split("\r\n")
    // remove any empty entries
    .filter(r => r !== "");

  //remove csv header
  const header = gameRows?.shift();
  await clearLog(DECK_TRACKER_GAME_FILE, header + "\r\n");

  return gameRows.map(createGame);
}
