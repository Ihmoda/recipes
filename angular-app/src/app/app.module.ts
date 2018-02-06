import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListEditComponent } from './product-list-edit/product-list-edit.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { NewComponent } from './new/new.component';
import { UserService } from './user.service';
import { AllComponent } from './all/all.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductListEditComponent,
    RemoveproductComponent,
    NewComponent,
    AllComponent,
    EditRecipeComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
