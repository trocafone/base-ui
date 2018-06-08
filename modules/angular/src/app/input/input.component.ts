import { Component, Input, OnInit } from '@angular/core';

export enum InputType {
  TEXT = 'text',
  TEL = 'tel',
  EMAIL = 'email',
  PASSWORD = 'password',
  NUMBER = 'number'
}

export enum Mask {
  CPF = 'cpf',
  CNPJ = 'cnpj',
  CP = 'cp',
  TEL = 'tel',
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
  @Input() mask?: Mask;

  private tooglePasswordInputType: Boolean = false;

  private getMask = (): any => {
    switch (this.mask) {
      case Mask.CPF : {
        return [ /[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-' , /\d/, /\d/ ];
      }
      case Mask.CNPJ :{
        return [ /[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/ ];
      }
      case Mask.CP : {
        return [ /[1-9]/, /\d/, /\d/, /\d/ ];
      }
      case Mask.TEL : {
        return ['(', /[1-9]/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/ ];
      }
      case Mask.CEP : {
        return [ /[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/ ];
      }
    }
  }

  private isPassword = (): boolean => this.type === InputType.PASSWORD;
  private isMask = (): boolean => this.mask !== undefined;

  private togglePasswordInput = (): void => {
    this.tooglePasswordInputType = !this.tooglePasswordInputType;
  }

  private getInputType = (): string => {
    if (this.type === InputType.PASSWORD) {
      return this.tooglePasswordInputType ? InputType.TEXT : InputType.PASSWORD;
    }

    return this.type;
  }

  ngOnInit (): void { }

  constructor() { }

}
