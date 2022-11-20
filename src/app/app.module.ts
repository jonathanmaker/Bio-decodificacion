import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioAnalisisComponent } from './bio-analisis/bio-analisis.component';
import { HipotesisComponent } from './hipotesis/hipotesis.component';
import { BioModelacionComponent } from './bio-modelacion/bio-modelacion.component';
import { HomeComponent } from './home/home.component';
import { NavbarGeneralComponent } from './navbar-general/navbar-general.component';

@NgModule({
  declarations: [
    AppComponent,
    BioAnalisisComponent,
    HipotesisComponent,
    BioModelacionComponent,
    HomeComponent,
    NavbarGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
