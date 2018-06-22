
import { Component, Input } from '@angular/core';
import { Type } from '@angular/compiler/src/core';

declare var require: any;


export enum LogoType {
  LOGO = 'logo',
  ISO = 'iso',
  BACKOFFICE = 'backoffice',
  TRADEIN = 'trade-in',
}

@Component({
  selector: 'tf-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

  @Input() text?: string;
  @Input() link?: string;
  @Input() type: LogoType;

  public getLogo = () => {
    switch (this.type) {
      case LogoType.LOGO : {
        return require('../assets/logo.png');
      }
      case LogoType.TRADEIN : {
        return require('../assets/trade-in.svg');
      }
      case LogoType.ISO : {
        return require('../assets/iso.webp');
      }
    }
  }
  

}
