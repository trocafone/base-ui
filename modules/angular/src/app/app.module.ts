
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { ButtonComponent } from '../../projects/troca-angular/src/lib/button/button.component';
import { AlertComponent } from '../../projects/troca-angular/src/lib/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AlertComponent
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
