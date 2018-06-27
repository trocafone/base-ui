import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private formGroup: FormGroup;


  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      search: new FormControl()
    });
  }
}
