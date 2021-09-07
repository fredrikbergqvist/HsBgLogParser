import { readGameLog } from "./games/readGameLog.ts";
import { submitGame } from "./games/submitGame.ts";
import { writeGamesToFile } from "./games/writeGamesToFile.ts";

try {
  const games = await readGameLog();
  console.log(`Finished importing games, found: ${games.length}`);
  if (games.length > 0) {
    await writeGamesToFile(games);
    // @ts-ignore
    await Promise.all(games.map((g) => submitGame(g)));
  }
} catch (error) {
  console.error("An error occurred 😱", error);
}


// Since boardstates takes up alot of database space on the free tier I opted not to import or parse it
// const allGames = await fetchAllGames();
// const boardStates = await readBoardLog();
// console.log(`Finished importing boardStates, found: ${boardStates.length}`);
// if (boardStates.length > 0) {
//   await writeBoardsToFile(boardStates);
//   // @ts-ignore
//   await Promise.all(boardStates.map((g) => submitBoard(g)));
//   await clearLog(DECK_TRACKER_BOARD_FILE);
// }
