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

  @Output() onClick?: EventEmitter<any> = new EventEmitter<any>();

  private INITIAL_CLASS = 'button-primary button-medium';

  constructor() {
    if (this.className === undefined) {
      this.className = this.INITIAL_CLASS;
    }
  }

  ngOnInit() {
  }

  onClickButton(e){
    if (!this.isLoading && this.onClick) {
      this.onClick.emit(e);
    }
  }
}
