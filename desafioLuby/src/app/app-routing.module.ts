import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesenvovedoresComponent } from './Pages/desenvovedores/desenvovedores.component';
import { LancamentosComponent } from './Pages/lancamentos/lancamentos.component';
import { ProjetosComponent } from './Pages/projetos/projetos.component';
import { RankingsComponent } from './Pages/rankings/rankings.component';

const routes: Routes = [
  {
    path: "",
    component: RankingsComponent
  },
  {
    path: "projetos",
    component: ProjetosComponent
  },
  {
    path: "desenvolvedores",
    component: DesenvovedoresComponent
  },
  {
    path: "lancamentos",
    component: LancamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
