import {Component, Input, OnInit} from '@angular/core';

declare var require: any;

@Component({
  selector: 'tf-tradein-logo',
  templateUrl: './tradein-logo.component.html',
  styleUrls: ['./tradein-logo.component.scss']
})
export class TradeinLogoComponent implements OnInit {

  @Input() text?: string;
  @Input() link?: string;

  public url = require('../assets/trade-in.svg');

  constructor() { }

  ngOnInit() {
  }

}
