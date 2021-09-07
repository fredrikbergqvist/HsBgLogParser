export type BoardMinionCapabilities = {
  poison: boolean,
  windfury: boolean,
  divineShield: boolean,
  taunt: boolean,
  deathrattle: boolean,
  reborn: boolean
}
export type BoardMinion = {
  name: string
  stats: {
    attack: number,
    health: number
  },
  capabilities: BoardMinionCapabilities
}

function getCapabilities(minion = ""): BoardMinionCapabilities {
  return {
    poison: minion.indexOf("Poisonous") >= 0,
    windfury: minion.indexOf("Windfury") >= 0,
    divineShield: minion.indexOf("Divine Shield") >= 0,
    taunt: minion.indexOf("Taunt") >= 0,
    deathrattle: minion.indexOf("Deathrattle") >= 0,
    reborn: minion.indexOf("Reborn") >= 0
  };
}


export function getMinions(minion = ""): Array<BoardMinion> {
  if (!minion) {
    return [];
  }
  const strengthRegex = /([0-9]+)\/([0-9]+)/g;
  const minionValues = minion.trim().split("),");
  return minionValues.reduce((prev, curr, i) => {
    const name = curr.substr(0, curr.indexOf("(")).trim();
    const stats = curr.match(strengthRegex)?.shift()?.split("/") || [];
    const capabilities = getCapabilities(curr);
    prev.push({
      name,
      stats: {
        attack: Number(stats[0]),
        health: Number(stats[1])
      },
      capabilities
    });
    return prev;
  }, [] as Array<BoardMinion>);
}
