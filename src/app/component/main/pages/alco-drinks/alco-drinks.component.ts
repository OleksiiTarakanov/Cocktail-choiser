import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/core/services/ingredients.service';
import { Cocktail } from 'src/app/core/interfaces/cocktail-interface/cocktail.interface';

@Component({
  selector: 'app-alco-drinks',
  templateUrl: './alco-drinks.component.html',
  styleUrls: ['./alco-drinks.component.scss']
})

export class AlcoDrinksComponent implements OnInit {

  cocktailList: Array<Cocktail>;
  cocktail: Cocktail;
  idDrink: number;
  countCocktail: number = 10;


  public search: string;


  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.getCocktailPage();
  }

  getCocktails(): void {
    this.ingredientsService.getCocktailsData()
      .subscribe(data => {
        this.cocktailList = data.drinks;
        console.log(data);
      })
  }

  // getCocktail(idDrink: number): void {
  //   this.ingredientsService.getCocktailData(idDrink)
  //     .subscribe(() => {
  //       this.getCocktails();
  //     })
  // }

  getCocktailPage(): void {
    this.ingredientsService.getCocktailsData()
      .subscribe(data => {

        this.cocktailList = data.drinks;
        this.cocktailList.length = this.countCocktail;
        this.countCocktail += 10;

        console.log(this.countCocktail);

        if (this.countCocktail >= 100) {
          this.countCocktail = 100
        }
      })
  }
}