import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './menu/inicio/inicio.component';
import { NosotrosComponent } from './menu/nosotros/nosotros.component';
import { ContactenosComponent } from './menu/contactenos/contactenos.component';
import { PublicacionesComponent } from './menu/publicaciones/publicaciones.component';
import { NavbarComponent } from './menu/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ContactenosComponent,
    PublicacionesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
