import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/core/interfaces/cocktail-interface/cocktail.interface';
import { NonAlcoDrinksService } from 'src/app/core/services/non-alco-drinks.service';

@Component({
  selector: 'app-none-alco-drinks',
  templateUrl: './none-alco-drinks.component.html',
  styleUrls: ['./none-alco-drinks.component.scss']
})
export class NoneAlcoDrinksComponent implements OnInit {
  
  cocktailList: Array<Cocktail>;
  cocktail: Cocktail;
  idDrink: number;
  countCocktail: number = 10;

  public search: string;

  constructor(private ingredientsService: NonAlcoDrinksService) { }

  ngOnInit(): void {
    this.getCocktailPage();
  }

  getCocktails(): void {
    this.ingredientsService.getCocktailsData()
      .subscribe(data => {
        this.cocktailList = data.drinks;
        console.log(data);
        
      });
    console.log(123)
  }

  getCocktailPage(): void {
    this.ingredientsService.getCocktailsData()
      .subscribe(data => {

        this.cocktailList = data.drinks;
        this.cocktailList.length = this.countCocktail;
        this.countCocktail += 10;

        console.log(this.countCocktail);

        if (this.countCocktail >= 58) {
          this.countCocktail = 58
        }
      })
  }
}
