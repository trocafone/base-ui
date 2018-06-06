import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() textButton;
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
