
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { TradeinLogoComponent } from '../../projects/troca-angular/src/lib/tradein-logo/tradein-logo.component';
import { TrocafoneLogoComponent } from '../../projects/troca-angular/src/lib/trocafone-logo/trocafone-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    TradeinLogoComponent,
    TrocafoneLogoComponent,
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
