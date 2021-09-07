import { BoardState } from "./createBoard.ts";
import { postData } from "../data/postData.ts";
import { stringifyBoard } from "../util/stringifyBoard.ts";

export async function submitBoard(board: BoardState) {
  const body = JSON.stringify({
    query: `
        mutation {
          createBoard(data:${stringifyBoard(board)}){
            _id
          }
        }
      `
  });

  const result = await postData(body);
  return console.log(`Added board of ${board.hero.name} (${board.gameId}), internal id: ${result.createBoard._id}`);
}
