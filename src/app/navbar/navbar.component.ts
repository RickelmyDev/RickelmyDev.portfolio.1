// navbar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav>
  <a routerLink="/" routerLinkActive="active">Início</a>
  <a routerLink="/sobre-mim" routerLinkActive="active">Sobre mim</a>
  <a routerLink="/projetos" routerLinkActive="active">Projetos</a>
  <a routerLink="/contato" routerLinkActive="active">Contato</a>
  </nav>
  `
})
export class NavbarComponent { }