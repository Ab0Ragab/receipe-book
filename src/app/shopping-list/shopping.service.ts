import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs/Subject';

export class ShoppingService {
 
    ingrediantChanged = new Subject<Ingredient []>();
    startEdiding = new Subject<number>();
    private ingredients: Ingredient [] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngredients()
      {
          return this.ingredients.slice(); //slice return copy of my array but when you push some new ingrediant it not take copy it to ui so we use eventEmitter
      }

      getIngredient(index: number) {
          return this.ingredients[index];
      } 

      updataIngredient(index: number, newIngredient: Ingredient){
          this.ingredients[index] = newIngredient;
          this.ingrediantChanged.next(this.ingredients.slice());
      }

      deleteIngredient(index: number){
         this.ingredients.splice(index, 1);
         this.ingrediantChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingrediantChanged.next(this.ingredients.slice());
      }

      //we make for loop im Ingredient[] that is in recipe and push it to shoppingList by addIngredients fun
      addReIngredient(ingredients: Ingredient[]) {
       // for(let ingrediant of ingredients) {
        //    this.addIngredients(ingrediant);
       // }

       this.ingredients.push(...ingredients);
       this.ingrediantChanged.next(this.ingredients.slice());
      }
}