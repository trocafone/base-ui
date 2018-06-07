import { Component, Input } from '@angular/core';
import { guid } from '../utils';

import '../../../../troca-icons/troca-icons.scss';

@Component({
  selector: 'tf-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  @Input() active: Boolean = false;
  private guid: string = guid();


  onChange(event: any) {
    this.active = !this.active;
  }

}
