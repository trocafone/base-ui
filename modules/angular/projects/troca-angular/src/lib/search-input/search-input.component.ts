import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface ItemResults {
  id: number;
  title: string;
  description?: string;
  icon?: string;
  link?: string;
}


@Component({
  selector: 'tf-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})

export class SearchInputComponent implements OnInit {

  static readonly SEARCH_MIN_CHARACTERS = 3;

  @Input() value?: any;
  @Input() placeholder?: any;
  @Input() className?: string;
  @Input() formControl?: FormControl;
  @Input() formControlName?: string;
  @Input() formGroup?: FormGroup;
  @Input() results?: ItemResults[] = [];
  @Input() showResults: boolean = false;
  @Input() hoverResult: boolean = false;

  @Output() onSelect?: EventEmitter<ItemResults> = new EventEmitter<ItemResults>();
  @Output() onChange?: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  @Output() onClear?: EventEmitter<any> = new EventEmitter<any>();
  @Output() onFocus?: EventEmitter<any> = new EventEmitter<any>();

  public keyboardStream = new Subject<KeyboardEvent>();
  public keyboardObservable: Observable<KeyboardEvent> = this.keyboardStream.asObservable();

  public showClearButton: boolean = <boolean>false;

  public resultOnFocusIndex: number = <number>-1;

  constructor() {

    this.keyboardObservable
        .pipe(
          tap(this.nextResultFilter),
          tap(this.previousResultFilter),
          tap(this.goToResultFilter),
          tap(this.updateClearInputButtonFilter),
          tap(this.refreshResultsFilter),
        )
        .subscribe();
  }

  public onFocusInput = (event: any) => {
    if (this.onFocus ){
      this.onFocus.emit(event)
    }
    this.showResults = true;
  }

  public getInputCharacters = (keyboardEvent: KeyboardEvent) => {
    this.keyboardStream.next(keyboardEvent);
  }

  public nextResultFilter = (keyboardEvent) => {
    const isLastItem = (this.resultOnFocusIndex >= this.results.length - 1);

    if (keyboardEvent.key !== 'ArrowDown' || isLastItem) {
      return;
    }

    this.resultOnFocusIndex++;
  }

  public previousResultFilter = (keyboardEvent: KeyboardEvent) => {

    const isFirstItem = (this.resultOnFocusIndex <= 0);

    if (keyboardEvent.key !== 'ArrowUp' || isFirstItem ) {
      return;
    }

    this.resultOnFocusIndex --;
  }

  public goToResultFilter = (keyboardEvent: KeyboardEvent) => {
    const isFocusingOnResult = (this.resultOnFocusIndex !== -1);
    if (!this.isEnter(keyboardEvent) || !isFocusingOnResult ) {
      return;
    }

    this.onClickResult(this.results[this.resultOnFocusIndex]);
  }

  public updateClearInputButtonFilter = () => {
    const value = this.formGroup.controls[this.formControlName].value || '';
    this.showClearButton = (value.length >= SearchInputComponent.SEARCH_MIN_CHARACTERS);
  }

  public refreshResultsFilter = (keyboardEvent: KeyboardEvent) => {

    if ( this.isEnter(keyboardEvent) || this.isArrow(keyboardEvent)) {
     return;
    }
    this.onChange.emit(keyboardEvent);
  }

  public onRollOver = (i) => {
    this.hoverResult = true;
    this.resultOnFocusIndex = i;
  }

  public onRollOut = (i) => {
    this.hoverResult = false;
    this.resultOnFocusIndex = -1;
  }

  public onClickCloseButton = (e): void => {
    this.formGroup.setValue({
      [this.formControlName]: ''
    });

    this.showClearButton = false;
    this.onClear.emit();
  }

  public onBlurInput = () =>{
    if(this.showResults && this.hoverResult === false){
     this.showResults = false;
      this.resultOnFocusIndex = -1;
    }
  }

  public onClickResult = (result: ItemResults) => {
    this.onSelect.emit(result);
    this.hoverResult = false;
    this.onBlurInput();
  }

  public isArrow = (keyboardEvent: KeyboardEvent): boolean => keyboardEvent.key === 'ArrowUp' ||  keyboardEvent.key === 'ArrowDown';

  public isEnter = (keyboardEvent: KeyboardEvent): boolean => keyboardEvent.key === 'Enter';

  ngOnInit (): void { }

}
