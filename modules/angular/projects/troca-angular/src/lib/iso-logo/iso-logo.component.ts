import {Component, Input, OnInit} from '@angular/core';

declare var require: any;

@Component({
  selector: 'tf-iso-logo',
  templateUrl: './iso-logo.component.html',
  styleUrls: ['./iso-logo.component.scss']
})
export class IsoLogoComponent implements OnInit {

  @Input() text?: string;
  @Input() link?: string;

  public url = require('../assets/iso.svg');

  constructor() { }

  ngOnInit() {
  }

}
