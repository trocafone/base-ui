import { Component, OnInit, Input } from '@angular/core';

export interface PickColorValue {
  text: string;
  hex: number;
}

@Component({
  selector: 'tf-pick-color',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.scss']
})
export class PickColorComponent implements OnInit {

  @Input() colors: Array<PickColorValue>;
  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}
