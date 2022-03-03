import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NetworkComponent } from './view/network/network.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { PrinciplesComponent } from './view/principles/principles.component';
import { EventsComponent } from './view/events/events.component';



@NgModule({
  declarations: [
    AppComponent,
    NetworkComponent,
    NavbarComponent,
    ModalComponent,
    PrinciplesComponent,
    EventsComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
