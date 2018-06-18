import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { FormControl } from "@angular/forms";

export enum InputType {
  TEXT = 'text',
  TEL = 'tel',
  EMAIL = 'email',
  PASSWORD = 'password',
  NUMBER = 'number'
}

export enum MaskType {
  TEL_BR = 'tel_br',
  TEL_AR = 'tel_ar',
  CPF = 'cpf',
  CP = 'cp',
  CNPJ = 'cnpj',
  CEP = 'cep',
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
  @Input() mask?: MaskType;
  @Input() formControl?: FormControl;
  @Input() customMask?: string;
  @HostBinding('attr.mask') myMask = this.customDirectives();

  public function customDirectives(){
    console.log(this)
  }

  public tooglePasswordInputType: Boolean = false;

  public isPassword = (): boolean => this.type === InputType.PASSWORD;
  public isMask = (): boolean => this.mask !== undefined;

  public togglePasswordInput = (): void => {
    this.tooglePasswordInputType = !this.tooglePasswordInputType;
  }

  public getInputType = (): string => {
    if (this.type === InputType.PASSWORD) {
      return this.tooglePasswordInputType ? InputType.TEXT : InputType.PASSWORD;
    }

    return this.type;
  }


  public getMask = () => {

    if (this.customMask) {
      return this.customMask;
    }
    switch (this.mask) {
      case MaskType.CPF : {
        return '000.000.000-00';
      }
      case MaskType.CEP : {
        return '00000-000';
      }
      case MaskType.CP : {
        return '0000';
      }
      case MaskType.TEL_BR : {
        return '(00)0000-00000';
      }
      case MaskType.TEL_AR : {
        return '(00)0000-0000';
      }
      case MaskType.CNPJ : {
        return '00.000.000/0000-00';
      }
      default : {
        return 'AAAA';
      }
    }
  }

  ngOnInit (): void { }

  constructor() { }

}
