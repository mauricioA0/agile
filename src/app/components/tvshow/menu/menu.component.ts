import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Episode } from '../../../interfaces/episode';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() seasons: number[];
  @Input() season: number;
  @Input() episodes: Episode[];
  constructor() { }

  ngOnInit() {
  }

  public classSeason(season: number) {
    return (season === this.season) ? 'border-b-4 border-green-dark pb-2' : '';
  }

  public setSeason(season: number) {
    this.season = season;
  }

  public get episodesFilter() {
    const episodesF = _.cloneDeep(this.episodes);
    return episodesF.filter((episode) => (episode && episode.SeasonNumber === this.season));
  }

}
