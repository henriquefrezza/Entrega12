import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FatecCursosComponent } from './fatec-cursos/fatec-cursos.component';
import { FatecLogoComponent } from './fatec-logo/fatec-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    FatecCursosComponent,
    FatecLogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
