import { Character } from 'pods/character/api';

export interface Characters {
  info: Info;
  results: Character[];
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
