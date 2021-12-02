import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagRedesComponent } from './view/pag-redes/pag-redes.component';


@NgModule({
  declarations: [
    AppComponent,
    PagRedesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
