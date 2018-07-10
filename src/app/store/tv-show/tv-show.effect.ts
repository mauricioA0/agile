import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';

import { Show } from '../../interfaces/show';
import { TvShowState } from '../../interfaces/tv-show-state';
import * as TvShowActions from './tv-show.action';
import { environment } from '../../../environments/environment';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { withLatestFrom, mergeMap, catchError } from 'rxjs/operators';
import { Episode } from '../../interfaces/episode';

@Injectable()
export class TvShowEffects {

  @Effect()
    GetTvShow$: Observable<Action> = this.actions$.pipe(
      ofType<TvShowActions.GetTvShow>(TvShowActions.GET_TV_SHOW),
      mergeMap((action: TvShowActions.GetTvShow) =>
        this.http.get(`${environment.apiUrl}tv-shows/SHOW123.json`)
          .map((data: Show) => {
            return new TvShowActions.GetTvShowSuccess(data);
          })
          .catch(() => of(new TvShowActions.GetTvShowError()))
      )
    );

  @Effect()
    GetEpisode$: Observable<Action> = this.actions$.pipe(
      ofType<TvShowActions.GetEpisode>(TvShowActions.GET_EPISODE),
      mergeMap((action: TvShowActions.GetEpisode) =>
        this.http.get(`${environment.apiUrl}episodes/SHOW123.json`)
          .map((data: Episode[]) => {
            const seasson: number[] = [];
            if (data.length) {
              data.map((episode) => {
                if (episode && !seasson.includes(episode.SeasonNumber)) {
                  seasson.push(episode.SeasonNumber);
                }
              });
            }
            return new TvShowActions.GetEpisodeSuccess(data, seasson);
          })
          .catch(() => of(new TvShowActions.GetEpisodeError()))
      )
    );
    constructor(
      private http: HttpClient,
      private actions$: Actions,
      private store: Store<{state: TvShowState}>
    ) { }
}
