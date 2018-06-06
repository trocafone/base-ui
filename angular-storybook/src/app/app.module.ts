import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { KnobsComponent } from './knobs/knobs.component';
import { HelloWrapperComponent } from './hello/hello-wrapper.component';
import { ButtonComponent } from '../../../modules/angular/src/app/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    KnobsComponent,
    HelloWrapperComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
