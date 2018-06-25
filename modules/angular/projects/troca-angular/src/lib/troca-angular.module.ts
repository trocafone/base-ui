import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { TradeinLogoComponent } from './tradein-logo/tradein-logo.component';
import { TrocafoneLogoComponent } from './trocafone-logo/trocafone-logo.component';
import { IsoLogoComponent } from './iso-logo/iso-logo.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';

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
    CheckboxComponent,
    TradeinLogoComponent,
    TrocafoneLogoComponent,
    IsoLogoComponent,
    ButtonComponent,
    AlertComponent,
    InputComponent,
  ],
  exports: [
    CheckboxComponent,
    TradeinLogoComponent,
    TrocafoneLogoComponent,
    IsoLogoComponent,
    AlertComponent,
    ButtonComponent,
    InputComponent,
  ]
})
export class TrocaAngularModule { }
