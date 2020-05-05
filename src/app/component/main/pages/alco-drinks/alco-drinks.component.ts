import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/core/services/ingredients.service';
import { Cocktail } from 'src/app/core/interfaces/cocktail-interface/cocktail.interface';

@Component({
  selector: 'app-alco-drinks',
  templateUrl: './alco-drinks.component.html',
  styleUrls: ['./alco-drinks.component.scss']
})

export class AlcoDrinksComponent implements OnInit {

  cocktailList: Array<Cocktail>
  cocktail: Cocktail
  idDrink: number
  public search: string;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails(): void {
    this.ingredientsService.getCocktailsData()
      .subscribe(data => {
        this.cocktailList = data.drinks;
        console.log(data);
      })
  }

  getCocktail(idDrink: number): void {
    this.ingredientsService.getCocktailData(idDrink)
      .subscribe(() => {
        this.getCocktails();
      })
  }

}