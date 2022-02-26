import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NetworkComponent } from './view/network/network.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { PrinciplesComponent } from './view/principles/principles.component';
import { AboutComponent } from './view/about/about.component';
import { CodyComponent } from './view/cody/cody.component';



@NgModule({
  declarations: [
    AppComponent,
    NetworkComponent,
    NavbarComponent,
    ModalComponent,
    PrinciplesComponent,
    AboutComponent,
    CodyComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
