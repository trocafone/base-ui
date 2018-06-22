import { Component, Input, Output, EventEmitter } from '@angular/core';
import { guid } from '../utils';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'tf-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  @Input() active: Boolean = false;
  @Input() label: string;
  @Output() onChange?: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Input() className?: string;
  @Input() formControlName?: FormControl;
  @Input() formGroup?: FormGroup;

  public guid: string = guid();

  onClickInput(event: any): void {
    this.active = !this.active;
    if (this.onChange) {
      this.onChange.emit(this.active as Boolean);
    }
  }

}
