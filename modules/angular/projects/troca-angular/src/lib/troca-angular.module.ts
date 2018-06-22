import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { InputComponent } from './input/input.component';
import { TradeinLogoComponent } from './tradein-logo/tradein-logo.component';
import { TrocafoneLogoComponent } from './trocafone-logo/trocafone-logo.component';
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
    TradeinLogoComponent,
    TrocafoneLogoComponent,
    ButtonComponent,
    AlertComponent,
    InputComponent,
  ],
  exports: [
    TradeinLogoComponent,
    TrocafoneLogoComponent,
    AlertComponent,
    ButtonComponent,
    InputComponent,
  ]
})
export class TrocaAngularModule { }
