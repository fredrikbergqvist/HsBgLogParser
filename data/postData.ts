import { FAUNA_AUTH_KEY, FAUNA_ENDPOINT } from "../config.ts";

export async function postData(body: any) {
  const result = await fetch(FAUNA_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${FAUNA_AUTH_KEY}`
    },
    body
  });
  const json = await result.json();
  return json.data;
}
