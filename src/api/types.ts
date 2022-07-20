type GenericArray<T> = {
  count: number;
  next: URL | null;
  previous: URL | null;
  results: T[];
};

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: URL[];
  films: URL[];
  created: Date;
  edited: Date;
  url: URL;
};

type Planets = GenericArray<Planet>;

type People = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: 'male' | 'female' | 'unknown' | 'n/a';
  homeworld: URL;
  films: URL[];
  species: URL[];
  vehicles: URL[];
  starships: URL[];
  created: Date;
  edited: Date;
  url: URL;
};

type Peoples = GenericArray<People>;

export type { Planet, Planets, Peoples, People };
