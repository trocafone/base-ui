import { Component, Input, Output, EventEmitter } from '@angular/core';
import { guid } from '../utils';

import '../../../../troca-icons/troca-icons.scss';

@Component({
  selector: 'tf-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  @Input() active: Boolean = false;
  @Output() onChange?: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  private guid: string = guid();


  onClickInput(event: any) {
    this.active = !this.active;
    if (this.onChange) {
      this.onChange.emit(this.active as Boolean);
    }
  }

}
