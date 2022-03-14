import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { NetworkComponent } from './view/network/network.component';
import { AboutComponent } from './view/about/about.component';
import { PrinciplesComponent } from './view/principles/principles.component';
import { CodyComponent } from './view/cody/cody.component';
import { EventsComponent } from './view/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    NetworkComponent,
    AboutComponent,
    PrinciplesComponent,
    CodyComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
