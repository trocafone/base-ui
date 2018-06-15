import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { LogoComponent } from './logo/logo.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PickColorComponent } from './pick-color/pick-color.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    ButtonComponent,
    InputComponent,
    LogoComponent,
    DropdownComponent,
    CheckboxComponent,
    PickColorComponent,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    LogoComponent,
    DropdownComponent,
    CheckboxComponent,
    PickColorComponent,
  ]
})
export class TrocaAngularModule { }
