import { Component, Input } from '@angular/core';

declare var require: any;


export enum LogoType {
  LOGO = 'logo',
  ISO = 'iso',
  BACKOFFICE = 'backoffice',
  TRADEIN = 'trade-in',
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

      case LogoType.LOGO :
        return require('./logo.png');
        break;

      case LogoType.TRADEIN :
        return require('./trade-in.svg');
        break;
      case LogoType.BACKOFFICE :
        return require('./trade-in.svg');
        break;
        case LogoType.ISO :
        return require('./iso.webp');
        break;

      default :
        return require('./logo.png');
        break;
    }

  }
}
