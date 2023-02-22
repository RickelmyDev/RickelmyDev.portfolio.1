import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjetosComponent,
    ContatoComponent,
    NavbarComponent,
    SobreMimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
