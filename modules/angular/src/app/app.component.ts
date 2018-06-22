import { FormControl, FormControlName, FormBuilder, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { DropdownValue } from 'troca-angular';
import { PickColorValue } from 'troca-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private formGroup;
  private formControlName: String = 's';

  private colors: Array<PickColorValue> = [
    <PickColorValue>{ text: 'Red', hex: 0x00ffff },
    <PickColorValue>{ text: 'Blue', hex: 0xff00ff },
    <PickColorValue>{ text: 'Green', hex: 0x0000ff },
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      s: ['', Validators.required],
    });
  }
}
