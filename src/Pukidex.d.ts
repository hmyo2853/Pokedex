export interface PukiIndexData {
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

export interface MyPukiList {
  id: number;
  name: string;
  genera: string;
  img: string;
}

export interface PukimonType {
  type: {
    name: string;
  };
}
