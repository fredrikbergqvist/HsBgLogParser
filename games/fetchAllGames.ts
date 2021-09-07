import { Game } from "./createGame.ts";
import { FAUNA_AUTH_KEY, FAUNA_ENDPOINT } from "../config.ts";

export async function fetchAllGames(size = 10): Promise<Array<Game>> {
  const games = await fetch(FAUNA_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${FAUNA_AUTH_KEY}`
    },
    body: JSON.stringify({
      query: `query {
        allGames(_size:${size}){
          data {
            _id
            date
            hero {
              name
              slug
            }
            tierTurn {
              two
              three
              four
              five
              six
            }
            mmr
            player
            available
            unavailable
            position
            endingTurn
            gameId
            board {
              name
              stats {
                attack
                health
              }
              capabilities {
                taunt
                windfury
                poison
                divineShield
                deathrattle
              }
            }
          }
        }
      }`
    })
  });
  const body = await games.json();
  return body.data.allGames.data;
}

