import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarterialModule } from './app.marterial.module';

import { AppComponent } from './app.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MarterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
