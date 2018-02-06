import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListEditComponent } from './product-list-edit/product-list-edit.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { NewComponent } from './new/new.component';
import { AllComponent } from './all/all.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "new",
    component: NewComponent,
    pathMatch: 'full'
  },
  {
    path: "all",
    component: AllComponent,
    pathMatch: 'full'
  },
  {
    path: "all/recipe/:id",
    component: EditRecipeComponent,
    pathMatch: 'full'
  },
  {
    path: "all/recipe/:id/update",
    component: UpdateComponent,
    pathMatch: 'full'
  },
  {
    path: "products/remove/:id",
    component: RemoveproductComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
