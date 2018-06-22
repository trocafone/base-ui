import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { CheckboxComponent } from './checkbox/checkbox.component';
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
    CheckboxComponent,
    TradeinLogoComponent,
    TrocafoneLogoComponent,
    ButtonComponent,
    AlertComponent,
  ],
  exports: [
    CheckboxComponent,
    TradeinLogoComponent,
    TrocafoneLogoComponent,
    AlertComponent,
    ButtonComponent,
  ]
})
export class TrocaAngularModule { }
