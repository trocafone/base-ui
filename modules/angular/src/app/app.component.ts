import { FormControl, FormControlName, FormBuilder, Validators } from '@angular/forms';

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private formGroup;
  private formControlName: String = 's';


  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      s: ['', Validators.required],
    });
  }
}
