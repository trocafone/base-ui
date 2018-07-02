
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { InputComponent } from '../../projects/troca-angular/src/lib/input/input.component';
import { CheckboxComponent } from '../../projects/troca-angular/src/lib/checkbox/checkbox.component';
import { TradeinLogoComponent } from '../../projects/troca-angular/src/lib/tradein-logo/tradein-logo.component';
import { TrocafoneLogoComponent } from '../../projects/troca-angular/src/lib/trocafone-logo/trocafone-logo.component';
import { IsoLogoComponent } from '../../projects/troca-angular/src/lib/iso-logo/iso-logo.component';
import { AlertComponent } from '../../projects/troca-angular/src/lib/alert/alert.component';
import { ButtonComponent } from '../../projects/troca-angular/src/lib/button/button.component';
import { SearchInputComponent } from '../../projects/troca-angular/src/lib/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CheckboxComponent,
    TradeinLogoComponent,
    TrocafoneLogoComponent,
    IsoLogoComponent,
    AlertComponent,
    ButtonComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
