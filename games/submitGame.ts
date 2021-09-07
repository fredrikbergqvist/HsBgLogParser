import { Game } from "./createGame.ts";
import { postData } from "../data/postData.ts";
import { stringifyGame } from "../util/stringifyGame.ts";

export async function submitGame(game: Game) {
  const body = JSON.stringify({
    query: `
    mutation {
      createGame(data:${stringifyGame(game)}){
        _id
      }
    }
    `
  });
  const result = await postData(body);
  console.log(`Added game as ${game.hero.name} (${game.gameId}), internal id: ${result.createGame._id}`);
}
