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
      case LogoType.LOGO : {
        return require('./logo.png');
      }
      case LogoType.TRADEIN : {
        return require('./trade-in.svg');
      }
      case LogoType.BACKOFFICE : {
        return require('./trade-in.svg');
      }
      case LogoType.ISO : {
        return require('./iso.webp');
      }
      default : {
        return require('./logo.png');
      }
    }
  }
}
