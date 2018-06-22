
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { DropdownComponent } from '../../projects/troca-angular/src/lib/dropdown/dropdown.component';
import { ButtonComponent } from '../../projects/troca-angular/src/lib/button/button.component';
import { AlertComponent } from '../../projects/troca-angular/src/lib/alert/alert.component';
import { InputComponent } from '../../projects/troca-angular/src/lib/input/input.component';
import { LogoComponent } from '../../projects/troca-angular/src/lib/logo/logo.component';
import { PickColorComponent } from '../../projects/troca-angular/src/lib/pick-color/pick-color.component';
import { CheckboxComponent } from '../../projects/troca-angular/src/lib/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ButtonComponent,
    AlertComponent,
    InputComponent,
    LogoComponent,
    PickColorComponent,
    CheckboxComponent,
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
