import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputComponent } from './input/input.component';
import { LogoComponent } from './logo/logo.component';

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
    AlertComponent,
    DropdownComponent,
    InputComponent,
    LogoComponent,
  ],
  exports: [
    ButtonComponent,
    AlertComponent,
    DropdownComponent,
    InputComponent,
    LogoComponent,
  ]
})
export class TrocaAngularModule { }
