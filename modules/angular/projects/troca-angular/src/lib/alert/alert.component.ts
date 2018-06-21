import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'tf-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})


export class AlertComponent implements OnInit {

  @Input() className?: string;
  @Input() icon?: string;
  @Input() content: string;

  @Output() onClick?: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClickAlert(e): void {
    this.content = "";
  }

}
