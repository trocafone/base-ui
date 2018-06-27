import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { guid } from '../utils';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'tf-button',
  templateUrl: './button.component.html',
  styleUrls: ['button.component.scss']
})
export class ButtonComponent implements OnChanges {

  public SPINNER_WIDTH = 18;

  @Input() translation: string;
  @Input() isLoading?: Boolean = false;
  @Input() className?: string;
  @Input() loadingText?: string;

  @Output() onClick?: EventEmitter<any> = new EventEmitter<any>();

  public offsetLeftPreloader: any = 0;

  public guid: string = guid();

  public INITIAL_CLASS = 'button-primary button-medium';


  constructor() {
    if (this.className === undefined) {
      this.className = this.INITIAL_CLASS;
    }
  }

  ngOnChanges() {
    this.setLoadingSize();
  }

  setLoadingSize() {
    if (this.isLoading) {
      const preloader = document.getElementById(`preloader-container-${this.guid}`);

      if (preloader) {
        const preloaderText = document.getElementById(`preloader-text-${this.guid}`);
        const translation = document.getElementById(`translation-container-${this.guid}`);

        preloaderText.style.display = 'inline-block';

        const preloaderWidth = preloaderText.offsetWidth + this.SPINNER_WIDTH;
        const translationWidth = translation.offsetWidth;

        if (preloaderWidth > translationWidth) {
          preloaderText.style.display = 'none';
        } else {
          preloaderText.style.display = 'inline-block';
        }
      }
    }

  }

  onClickButton(e): void {
    if (!this.isLoading && this.onClick) {
      this.onClick.emit(e);
    }
  }
}
