import { NgModule } from '@angular/core';


import { ShoppingService } from '../shopping-list/shopping.service';
import { RecipeService } from '../recipes/recipe.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
      HeaderComponent,
      AppRoutingModule
  ],
  providers: [
     ShoppingService,
     RecipeService, 
     DataStorageService, 
     AuthService
  ]
})
export class CoreModule { }