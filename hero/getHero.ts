export type Hero = {
  name:string;
  slug:string;
}

export function getHero(hero:string = ""):Hero{
  return {
    name:hero,
    slug:hero.toLowerCase()
      .replace(/\s/g, "_")
      .replace(/'/g, "")
      .replace(/,/g, "")
  }
}
