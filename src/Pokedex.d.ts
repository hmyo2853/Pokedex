export interface PokeIndexData {
  name: string;
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
    }
  ];
  id: number;
  state: Array;
  sprites: { other: { officialArtwork: { front_default: string } } };
}
