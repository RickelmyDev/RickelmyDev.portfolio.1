import { NgModule, ɵɵtrustConstantHtml } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes =[
  {path:'Home-page', component:HomePageComponent},
  {path:'sobre-mim', component:SobreMimComponent},
  {path:'projetos', component:ProjetosComponent},
  {path:'contato', component:ContatoComponent},
  {path:'', redirectTo:"Home-page", pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes),

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
