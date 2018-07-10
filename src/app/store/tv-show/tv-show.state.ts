import { TvShowState } from '../../interfaces/tv-show-state';

export function initializeTvShowState(): TvShowState {
    return {
        show: null,
        episodes: null,
        loading: false
    };
}
