import { DeveloperDeleteComponent } from './components/developer/developer-delete/developer-delete.component';
import { DeveloperUpdateComponent } from './components/developer/developer-update/developer-update.component';
import { DeveloperCreateComponent } from './components/developer/developer-create/developer-create.component';
import { DeveloperCrudComponent } from './views/developer-crud/developer-crud.component';
import { ProjectDeleteComponent } from './components/project/project-delete/project-delete.component';
import { ProjectUpdateComponent } from './components/project/project-update/project-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProjectCrudComponent } from './views/project-crud/project-crud.component';
import { ProjectCreateComponent } from './components/project/project-create/project-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "projects",
  component: ProjectCrudComponent
},
{
  path: "projects/create",
  component: ProjectCreateComponent
},
{
  path: "projects/update/:id",
  component: ProjectUpdateComponent
},
{
  path: "projects/delete/:id",
  component: ProjectDeleteComponent
},
{
  path: "developers",
  component: DeveloperCrudComponent
},
{
  path: "developers/create",
  component: DeveloperCreateComponent
},
{
  path: "developers/update/:id",
  component: DeveloperUpdateComponent
},
{
  path: "developers/delete/:id",
  component: DeveloperDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
