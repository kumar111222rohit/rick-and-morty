export type CharacterProps = {
  characterData: {
    results: [
      id: number,
      name: string,
      status: string,
      species: string,
      type: string,
      gender: string,
      origin: object,
      location: object,
      image: string,
      episodes: any,
      url: string,
      created: string,
    ];
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string;
    };
  };
  handlePagination: (page: any) => void;
  episodesData: any;
};
