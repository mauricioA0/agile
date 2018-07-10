import * as TvShowActions from './tv-show.action';
import { TvShowState } from '../../interfaces/tv-show-state';
import { initializeTvShowState } from './tv-show.state';
export type Action = TvShowActions.All;

export function TvShowReducer(state: TvShowState = initializeTvShowState(), action: Action): TvShowState {
    switch (action.type) {
        case TvShowActions.GET_TV_SHOW: {
            return { ...state, loading: true };
        }

        case TvShowActions.GET_TV_SHOW_SUCCESS: {
            return {
                ...state,
                show: action.payload,
                loading: false
            };
        }

        case TvShowActions.GET_EPISODE: {
          return { ...state, loading: true };
        }

        case TvShowActions.GET_EPISODE_SUCCESS: {
          return {
              ...state,
              episodes: action.episodes,
              seasons: action.seasons,
              loading: false
          }
        }

        default: {
          return state;
      }

  }
}
