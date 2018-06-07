import { Component, OnInit, Input } from '@angular/core';

export enum InputType {
  text,
  tel,
  email,
  password,
  number
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


  constructor() { }

  ngOnInit() {
  }

}
