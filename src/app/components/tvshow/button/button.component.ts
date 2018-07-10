import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../../interfaces/show';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  @Input() button: string;
  @Input() show: Show;
  constructor() { }

  ngOnInit() {
  }

  public setButton(value: string) {
    this.button = value;
  }

  public getButton(value: string) {
    return (this.button === value) ? 'border-b-4 border-green-dark pb-2' : '';
  }

}
