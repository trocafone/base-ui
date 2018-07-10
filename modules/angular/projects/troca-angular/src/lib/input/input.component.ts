import {Component,  Input, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export enum InputType {
  TEXT = 'text',
  TEL = 'tel',
  EMAIL = 'email',
  PASSWORD = 'password',
  NUMBER = 'number'
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
  @Input() leftIcon?:string;
  @Input() rightIcon?:string;

  public tooglePasswordInputType: Boolean = false;

  public isPassword = (): boolean => this.type === InputType.PASSWORD;

  public togglePasswordInput = (): void => {
    this.tooglePasswordInputType = !this.tooglePasswordInputType;
  }

  public getInputType = (): string => {
    if (this.type === InputType.PASSWORD) {
      return this.tooglePasswordInputType ? InputType.TEXT : InputType.PASSWORD;
    }

    return this.type;
  }


  ngOnInit (): void { }

  constructor() { }

}
