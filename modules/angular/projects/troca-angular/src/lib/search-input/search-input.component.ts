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

  public showClearButton : boolean = false;

  static readonly SEARCH_MIN_CHARACTERS = 3;

  public resultOnFocusIndex : number = -1;

  getInputCharacters (keyboardEvent: KeyboardEvent) {
    this.nextResult(keyboardEvent);
    this.previousResult(keyboardEvent);
    this.goToResult(keyboardEvent);
    this.updateClearInputButton();
    this.refreshResults(keyboardEvent);
  }

  nextResult(keyboardEvent){
    const isLastItem = (this.resultOnFocusIndex >= this.results.length - 1);
    if (keyboardEvent.key !== 'ArrowDown' || isLastItem){
      return;
    }
    this.resultOnFocusIndex++;
  }

  previousResult(keyboardEvent){
    const isFirstItem = (this.resultOnFocusIndex < 1);
    if (keyboardEvent.key !== 'ArrowUp' || isFirstItem ) {
      return;
    }
    this.resultOnFocusIndex --;
  }

  goToResult(keyboardEvent){
    if(keyboardEvent.key === 'Enter' && this.resultOnFocusIndex !== -1){
      return this.onClickResult(this.results[this.resultOnFocusIndex]);
    }
  }

  updateClearInputButton(){
    const value = this.formGroup.controls[this.formControlName].value || '';
    if(value.length >= SearchInputComponent.SEARCH_MIN_CHARACTERS){
      return this.showClearButton = true;
    }
    this.showClearButton = false;
  }

  refreshResults(keyboardEvent){
    this.onChange.emit(keyboardEvent);
  }

  onRollOver(i){
    this.resultOnFocusIndex = i;
  }

  onClickCloseButton(e): void {
    this.formGroup.setValue({
      [this.formControlName]:''
    })

    this.showClearButton = false;
    this.onClear.emit();
  }

  onClickResult(result: ItemResults ){
    this.onSelect.emit(result);
  }

  ngOnInit (): void {
  }

  constructor() { }


}
