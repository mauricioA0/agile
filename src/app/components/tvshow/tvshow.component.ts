import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TvShowAction from '../../store/tv-show/tv-show.action';
import { TvShowState } from '../../interfaces/tv-show-state';
import { Show } from '../../interfaces/show';
import { Observable } from 'rxjs/Observable';
import { Episode } from '../../interfaces/episode';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
  public state$: any;
  public show: Show;
  public episodes: Episode[];
  public seasons: number[];
  public season: number;
  public loading$: Observable<boolean>;
  public background: string;
  public button = 'SINOPSE';
  constructor( private store: Store<{state: TvShowState}> ) {
    this.state$ = this.store.select('state');

    this.loading$ = this.state$.map((state: TvShowState) => state.loading);

    this.state$.map((state: TvShowState) => state.show).subscribe((show) => {
      if (show) {
        this.show = show;
        this.background = `url(${show.Images.Background})`;
      }
    });

    this.state$.map((state: TvShowState) => state.episodes).subscribe((episodes) => {
      if (episodes) {
        this.episodes = episodes;
      }
    });

    this.state$.map((state: TvShowState) => state.seasons).subscribe((seasons) => {
      if (seasons) {
        this.seasons = seasons;
        this.season = seasons[0];
      }
    });

    this.store.dispatch(new TvShowAction.GetTvShow());
    this.store.dispatch(new TvShowAction.GetEpisode());
  }

  ngOnInit() {
  }

}
