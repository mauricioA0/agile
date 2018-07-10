import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Show } from '../../../interfaces/show';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit {

  @Input() show: Show;

  constructor() { }

  ngOnInit() {
  }

}
