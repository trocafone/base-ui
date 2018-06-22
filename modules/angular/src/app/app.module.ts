
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { CheckboxComponent } from '../../projects/troca-angular/src/lib/checkbox/checkbox.component';
import { TradeinLogoComponent } from '../../projects/troca-angular/src/lib/tradein-logo/tradein-logo.component';
import { TrocafoneLogoComponent } from '../../projects/troca-angular/src/lib/trocafone-logo/trocafone-logo.component';
import { AlertComponent } from '../../projects/troca-angular/src/lib/alert/alert.component';
import { ButtonComponent } from '../../projects/troca-angular/src/lib/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    TradeinLogoComponent,
    TrocafoneLogoComponent,
    AlertComponent,
    ButtonComponent,
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
