import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() value;
  @Input() placeholder;

  constructor() { }

  ngOnInit() {
  }

}
