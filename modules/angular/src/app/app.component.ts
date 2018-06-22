import { FormControl, FormControlName, FormBuilder, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { DropdownValue } from 'troca-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private formGroup;
  private formControlName: String = 's';

  private dropdown: object = {
    options: [
      <DropdownValue>{ text: 'Option 1', value: '1' },
      <DropdownValue>{ text: 'Option 2', value: '2' },
      <DropdownValue>{ text: 'Option 3', value: '3' },
    ]
  };

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      s: ['', Validators.required],
    });
  }
}
