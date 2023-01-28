export interface PokeIndexData {
  id: number;
  name: string;
  names: [
    {
      language: {
        name: string;
      };
      name: string;
    }
  ];
  genera: [
    {
      genus: string;
      language: {
        name: string;
      };
    }
  ];
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
      };
    }
  ];
}
