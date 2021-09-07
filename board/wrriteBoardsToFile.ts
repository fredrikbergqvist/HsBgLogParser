import { getPrettyDate } from "../util/getPrettyDate.ts";
import { BoardState } from "./createBoard.ts";

export function writeBoardsToFile(boards: Array<BoardState>): void {
  const dateNow = new Date();
  const filename = `${getPrettyDate(dateNow)}_hs-bg-boards.json`;
  Deno.writeTextFile(filename, JSON.stringify(boards));

  console.log(`Boards written to ${filename}`);
}
