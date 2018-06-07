import { Component, Input } from '@angular/core';
import {LogoType} from "../logo/logo.component";

export enum InputType {
  text,
  tel,
  email,
  password,
  number
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
export class InputComponent {
  @Input() value?: any;
  @Input() placeholder?: any;
  @Input() className?: string;
  @Input() type: InputType;
  @Input() error?: string;
  @Input() mask?: Mask;

  private getMask = () => {
    switch (this.mask) {
      case Mask.CPF :
        return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        break;

      case Mask.CNPJ :
        return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        break;

      case Mask.CP :
        return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        break;

      case Mask.TEL :
        return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        break;

      case Mask.CEP :
        return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        break;
    }
  }
  constructor() { }

}
