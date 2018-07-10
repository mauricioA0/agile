import { Show } from './show';
import { Episode } from './episode';

export interface TvShowState {
  loading: boolean;
  show?: Show;
  episodes?: Episode[];
  seasons?: number[];
}
