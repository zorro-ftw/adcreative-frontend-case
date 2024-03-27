export interface Episode {
  id: string;
  name: string;
}

export interface Character {
  id: string;
  name: string;
  image: string;
  episode: Episode[];
}

export interface GetCharactersQueryType {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number | null;
      prev: number | null;
    };
    results: Character[];
  };
}
