import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface ItemResults {
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

export class SearchInputComponent {

  static readonly SEARCH_MIN_CHARACTERS = 3;

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

  public keyboardStream = new Subject<KeyboardEvent>();
  public keyboardObservable = this.keyboardStream.asObservable();

  public showClearButton: boolean = <boolean>false;

  public resultOnFocusIndex: number = <number>-1;

  constructor() {
    this.keyboardObservable
        .pipe(
          tap(this.nextResult),
          tap(this.previousResult),
          tap(this.goToResult),
          tap(this.updateClearInputButton),
          tap(this.refreshResults),
        )
        .subscribe();
  }
  public getInputCharacters (keyboardEvent: KeyboardEvent) {
    this.keyboardStream.next(keyboardEvent);
  }

  public nextResult = (keyboardEvent) => {
    const isLastItem = (this.resultOnFocusIndex >= this.results.length - 1);

    if (keyboardEvent.key !== 'ArrowDown' || isLastItem) {
      return;
    }

    this.resultOnFocusIndex++;
  }

  public previousResult = (keyboardEvent) => {

    const isFirstItem = (this.resultOnFocusIndex < 1);

    if (keyboardEvent.key !== 'ArrowUp' || isFirstItem ) {
      return;
    }

    this.resultOnFocusIndex --;
  }

  public goToResult = (keyboardEvent) => {
    if (keyboardEvent.key === 'Enter' && this.resultOnFocusIndex !== -1) {
      return this.onClickResult(this.results[this.resultOnFocusIndex]);
    }
  }

  public updateClearInputButton = () => {
    const value = this.formGroup.controls[this.formControlName].value || '';
    if (value.length >= SearchInputComponent.SEARCH_MIN_CHARACTERS) {
      return this.showClearButton = true;
    }
    this.showClearButton = false;
  }

  public refreshResults = (keyboardEvent) => {
    this.onChange.emit(keyboardEvent);
  }

  public onRollOver = (i) => {
    this.resultOnFocusIndex = i;
  }

  public onClickCloseButton = (e): void => {
    this.formGroup.setValue({
      [this.formControlName]: ''
    });

    this.showClearButton = false;
    this.onClear.emit();
  }

  public onClickResult = (result: ItemResults) => {
    this.onSelect.emit(result);
  }

}
