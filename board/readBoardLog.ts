import { BoardState, createBoard } from "./createBoard.ts";
import { DECK_TRACKER_BOARD_FILE } from "../config.ts";


export async function readBoardLog(): Promise<Array<BoardState>> {
  const boardTextOutput: string = await Deno.readTextFile(DECK_TRACKER_BOARD_FILE);

  const boardRows = boardTextOutput
    // File separates entried with "," but also use comma in values.
    // Replace "," with "|" for easier handling
    .replace(/","/g, "\"\|")
    // Split the rows by return
    .split("\r\n")
    // remove any empty entries
    .filter(r => r !== "");

  //remove csv header
  boardRows?.shift();
  return boardRows.map(createBoard);
}
