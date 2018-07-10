import { Cast } from './cast';
import { Genres } from './genres';

export interface Show {
  Cast: Cast[];
  Genres: Genres[];
  Images: {
    Background: string;
  };
  Synopsis: string;
  Title: string;
  Year: number;
}
