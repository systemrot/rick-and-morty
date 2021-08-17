export type CharactersResponse = {
  info: Info;
  results: CharacterDetail[];
};

export type CharacterDetail = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
};

export type Info = {
  count: number;
  next: string;
  pages: number;
  prev: string;
};
