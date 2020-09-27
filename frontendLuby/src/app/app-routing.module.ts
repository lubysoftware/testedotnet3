import { ProjectDeleteComponent } from './components/project/project-delete/project-delete.component';
import { ProjectUpdateComponent } from './components/project/project-update/project-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProjectCrudComponent } from './views/project-crud/project-crud.component';
import { ProjectCreateComponent } from './components/project/project-create/project-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent
},
{
  path: "products/update/:id",
  component: ProductUpdateComponent
},
{
  path: "products/delete/:id",
  component: ProductDeleteComponent
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
