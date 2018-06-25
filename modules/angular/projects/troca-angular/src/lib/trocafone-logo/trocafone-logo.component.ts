import {Component, Input, OnInit} from '@angular/core';

declare var require: any;

@Component({
  selector: 'tf-trocafone-logo',
  templateUrl: './trocafone-logo.component.html',
  styleUrls: ['./trocafone-logo.component.scss']
})
export class TrocafoneLogoComponent implements OnInit {

  @Input() text?: string;
  @Input() link?: string;

  public url = require('../assets/trocafone.svg');

  constructor() { }

  ngOnInit() {
  }

}
