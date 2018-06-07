import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface DropdownValue {
  name: string;
  value: string;
}

@Component({
  selector: 'ts-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() options: Array<string>;
  @Input() placeholder?: String = 'Select option...';
  @Input() value?: any;
  @Input() className?: string;
  @Input() hasSearch?: Boolean = false;
  @Input() disabled?: Boolean = false;

  @Output() onChange: EventEmitter<DropdownValue> = new EventEmitter<DropdownValue>();


  ngOnInit() {
    if (this.options === undefined) {
      throw new Error('You should pass some items');
    }
  }

  onChangeValue(e): void {
    if (this.onChange) {
      this.onChange.emit(<DropdownValue>e);
    }
  }

}
