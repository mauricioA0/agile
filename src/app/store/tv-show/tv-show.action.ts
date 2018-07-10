import { Action } from '@ngrx/store';
import { TvShowState } from '../../interfaces/tv-show-state';
import { Show } from '../../interfaces/show';
import { Episode } from '../../interfaces/episode';

export const GET_TV_SHOW = '[TV_SHOW] GET_TV_SHOW';
export const GET_TV_SHOW_SUCCESS = '[TV_SHOW] GET_TV_SHOW_SUCCESS';
export const GET_TV_SHOW_ERROR = '[TV_SHOW] GET_TV_SHOW_ERROR';
export const GET_EPISODE = '[Episode] GET_EPISODE';
export const GET_EPISODE_SUCCESS = '[Episode] GET_EPISODE_SUCCESS';
export const GET_EPISODE_ERROR = '[Episode] GET_EPISODE_ERROR';

export class GetTvShow implements Action {
  readonly type = GET_TV_SHOW;
}

export class GetTvShowSuccess implements Action {
  readonly type = GET_TV_SHOW_SUCCESS;
  constructor(public payload: Show) {}
}

export class GetTvShowError implements Action {
  readonly type = GET_TV_SHOW_ERROR;
}

export class GetEpisode implements Action {
  readonly type = GET_EPISODE;
}

export class GetEpisodeSuccess implements Action {
  readonly type = GET_EPISODE_SUCCESS;
  constructor(public episodes: Episode[], public seasons: number[]) {}
}

export class GetEpisodeError implements Action {
  readonly type = GET_EPISODE_ERROR;
}

export type All = GetTvShow | GetTvShowSuccess | GetTvShowError
                  | GetEpisode | GetEpisodeSuccess | GetEpisodeError;
