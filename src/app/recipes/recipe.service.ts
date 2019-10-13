import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs/Subject';

@Injectable() //to inject to shopping service

export class RecipeService {

  recipeChanged=new Subject<Recipe[]>();
    
    recipes: Recipe[] = [
        new Recipe('Tasty meat',
         'This is very good',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcYszkpMcNHY5405Oa3o4yeLtWnRlt9U-RF1EVnNA9GJ8vaQJ',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French fries', 12)
        ]),
        new Recipe('Big fat burgger',
         'This is Aeasome',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbLO6REWOpU7vYazf2STXF37Kektj7lZoChDdZ1kKoxW8R3HAmQ',
        [
            new Ingredient('Buns', 25),
            new Ingredient('Meat', 1)
        ])
        
      ];

      constructor(private shoppingService: ShoppingService) { }

      setRecipe(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }

      getRecipe() {
          return this.recipes.slice();
      }

      getRecipes(index: number) {
        return this.recipes[index];
    }

      addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppingService.addReIngredient(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }
}