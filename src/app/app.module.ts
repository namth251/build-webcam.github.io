import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  WebcamModule } from 'ngx-webcam';

import { AppComponent } from './app.component';
import { WebcamComponent } from './webcam/webcam.component';

import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    WebcamComponent

  ],
  imports: [
    BrowserModule,
    WebcamModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
