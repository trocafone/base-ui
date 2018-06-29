import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {InputComponent, InputType} from "../input/input.component";

export interface ItemResults {
  title :string,
  description? :string,
  icon? :string,
  link? :string
}


@Component({
  selector: 'tf-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})

export class SearchInputComponent implements OnInit {
  @Input() value?: any;
  @Input() placeholder?: any;
  @Input() className?: string;
  @Input() formControl?: FormControl;
  @Input() formControlName?: string;
  @Input() formGroup?: FormGroup;
  @Input() results?: ItemResults[];

  @Output() onSelect?: EventEmitter<ItemResults> = new EventEmitter<ItemResults>();
  @Output() onChange?: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  @Output() onClear?: EventEmitter<any> = new EventEmitter<any>();

  public showCloseButton : boolean = false;

  static readonly SEARCH_MIN_CHARACTERS = 3;

  public resultOnFocus : number = -1;

  getInputCharacters (keyboardEvent: KeyboardEvent) {
    if(keyboardEvent.key === 'ArrowDown'){
      return this.arrowDown();
    }
    if(keyboardEvent.key === 'ArrowUp'){
      return this.arrowUp();
    }
    if(keyboardEvent.key === 'Enter' && this.resultOnFocus !== -1){
      return this.onClickResult(this.results[this.resultOnFocus]);
    }
    const VALUE = this.formGroup.controls[this.formControlName].value;

    this.onChange.emit(keyboardEvent);

    if(VALUE.length > SearchInputComponent.SEARCH_MIN_CHARACTERS){
      return this.showCloseButton = true;
    }

    this.showCloseButton = false;
  }

  arrowDown(){
    if( this.resultOnFocus < this.results.length -1){
      this.resultOnFocus ++;
    }
  }

  arrowUp(){
    if( this.resultOnFocus > 0){
      this.resultOnFocus --;
    }
  }

  onRollOver(i){
    this.resultOnFocus = i;
  }

  onClickCloseButton(e): void {
    this.formGroup.setValue({
      [this.formControlName]:''
    })

    this.showCloseButton = false;
    this.onClear.emit();
  }

  onClickResult(result: ItemResults ){
    this.onSelect.emit(result);
  }

  ngOnInit (): void {
  }

  constructor() { }


}
