import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tf-button',
  templateUrl: './button.component.html',
  styleUrls: ['button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() translation;
  @Input() isLoading?: boolean;
  @Input() className?: string;

  @Output() onClick;


  constructor() { }

  ngOnInit() {
  }

  onClickButton(e){
    if (!this.isLoading && this.onClick) {
      this.onClick(e);
    }
  }
}
