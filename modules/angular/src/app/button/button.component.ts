import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() textButton;
  @Input() isLoading?: boolean;
  @Input() className?: string;

  @Output() onClick? = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onClickButton(e){
    if (!this.isLoading && this.onClick) this.onClick.emit(e);
  }
}
