export interface CocktailObject {
  drinks:Array<Cocktail>
}

export interface Cocktail{
  strDrink: string,
  idDrink: number,
  strIngredient1: string,
  strIngredient2: string,
  strIngredient3: string,
  strDrinkThumb: string,
  strInstructions: string,
}
