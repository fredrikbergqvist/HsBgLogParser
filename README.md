# Hearthstone Battlegrounds Log Parser

This is a small [🦕 Deno](https://deno.land/) app for parsing [HS Deck tracker](https://hsreplay.net/downloads/?hl=en)
logs created by the
[Battleground match data](https://github.com/jawslouis/Battlegrounds-Match-Data) plugin and then uploading the logs to
a [Fauna DB](https://fauna.com/)

I created it to play around with Fauna and Deno and will take no responsibility for any problems you may have using it
;)

## Setup

Create an account [Fauna](https://fauna.com/) and create a project.

Set paths and Fauna information in `config.template.ts`  and rename it to `config.ts`.

The data schema for fauna db can be found in the data directory `HsBg_Schema.gql`, but I cannot guarantee that it is
fully up-to-date.

Import `HsBg_Schema.gql` in your fauna project.

## Run

`deno run --allow-read --allow-write --allow-net <PATH>\HsBgLogReader\readLogs.ts`
