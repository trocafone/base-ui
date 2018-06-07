import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { LogoComponent } from './logo/logo.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PickColorComponent } from './pick-color/pick-color.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    LogoComponent,
    DropdownComponent,
    PickColorComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
