import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export enum InputType {
  TEXT = 'text',
  TEL = 'tel',
  EMAIL = 'email',
  PASSWORD = 'password',
  NUMBER = 'number',
  SEARCH = 'search'
}


@Component({
  selector: 'tf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() value?: any;
  @Input() placeholder?: any;
  @Input() className?: string;
  @Input() type: InputType;
  @Input() error?: string;
  @Input() formControl?: FormControl;
  @Input() mask?: string;
  @Input() formControlName?: string;
  @Input() formGroup?: FormGroup;

  @Output() onClick?: EventEmitter<any> = new EventEmitter<any>();

  public tooglePasswordInputType: Boolean = false;

  public isPassword = (): boolean => this.type === InputType.PASSWORD;

  public isSearch = (): boolean => this.type === InputType.SEARCH;

  public showCloseButton : boolean = false;

  static readonly SEARCH_MIN_CHARACTERS = 3;

  public togglePasswordInput = (): void => {
    this.tooglePasswordInputType = !this.tooglePasswordInputType;
  }

  public getInputType = (): string => {
    if (this.type === InputType.PASSWORD) {
      return this.tooglePasswordInputType ? InputType.TEXT : InputType.PASSWORD;
    }

    return this.type;
  }

  getInputCharacters () {
    const VALUE = this.formGroup.controls[this.formControlName].value;

    if(VALUE.length > InputComponent.SEARCH_MIN_CHARACTERS){
      return this.showCloseButton = true;
    }

    return this.showCloseButton = false;
  }

  onClickCloseButton(e): void {
    this.formGroup.setValue({
      [this.formControlName]:''
    })

    this.showCloseButton = false;
  }

  ngOnInit (): void {
  }

  constructor() { }

}
