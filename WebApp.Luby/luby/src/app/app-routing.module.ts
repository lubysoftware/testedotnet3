import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ProjectComponent} from './project/project.component';
import {ProjectAddComponent} from './project-add/project-add.component';
import {DevComponent} from './dev/dev.component';

const routes: Routes = [
  { path: 'projects/:id', component: ProjectAddComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },

];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
