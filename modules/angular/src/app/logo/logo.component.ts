import { Component, Input } from '@angular/core';

declare var require: any;


export enum LogoType {
  Logo = 'logo',
  Iso = 'iso',
  Backoffice = 'backoffice',
  TradeIn = 'trade-in',
}

@Component({
  selector: 'ts-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

  @Input() text?: string;
  @Input() link?: string;
  @Input() type: LogoType;



  private getLogo = () => {
    switch (this.type) {

      case LogoType.Logo :
        return require('./logo.png');
        break;

      case LogoType.TradeIn :
        return require('./trade-in.svg');
        break;
      case LogoType.Backoffice :
        return require('./trade-in.svg');
        break;
        case LogoType.Iso :
        return require('./iso.webp');
        break;

      default :
        return require('./logo.png');
        break;
    }

  }
}
