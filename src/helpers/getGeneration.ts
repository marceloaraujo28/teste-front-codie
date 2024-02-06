export function getGenerationNumber(region: string): number {
  const regionLowerCase = region.toLowerCase();

  const regionsAndGenerations: Record<string, number> = {
    kanto: 1,
    johto: 2,
    hoenn: 3,
    sinnoh: 4,
    unova: 5,
    kalos: 6,
    alola: 7,
    galar: 8,
    paldea: 9,
  };

  return regionsAndGenerations[regionLowerCase];
}
