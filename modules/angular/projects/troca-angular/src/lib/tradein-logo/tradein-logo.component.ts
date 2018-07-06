import {Component, Input, OnInit} from '@angular/core';
import {InputType} from "../input/input.component";

declare var require: any;

export enum LogoTheme {
  DEFAULT = 'default',
  LIGHT = 'light'
}

@Component({
  selector: 'tf-tradein-logo',
  templateUrl: './tradein-logo.component.html',
  styleUrls: ['./tradein-logo.component.scss']
})
export class TradeinLogoComponent implements OnInit {

  @Input() text?: string;
  @Input() link?: string;
  @Input() url: string;
  @Input() theme?: LogoTheme;

  public getLogoTheme = (): string => {
    if (this.theme === LogoTheme.LIGHT) {
      return this.url = require('../assets/trade-in-light.svg');
    }
    return this.url = require('../assets/trade-in.svg');
  }

  constructor() { }

  ngOnInit() {
  }

}
