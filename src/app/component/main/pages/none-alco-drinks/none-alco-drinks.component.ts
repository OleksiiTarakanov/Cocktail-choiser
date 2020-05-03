import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/core/interfaces/cocktail-interface/cocktail.interface';
import { NonAlcoDrinksService } from 'src/app/core/services/non-alco-drinks.service';

@Component({
  selector: 'app-none-alco-drinks',
  templateUrl: './none-alco-drinks.component.html',
  styleUrls: ['./none-alco-drinks.component.scss']
})
export class NoneAlcoDrinksComponent implements OnInit {
  
  cocktailList: Array<Cocktail>
  cocktail: Cocktail
  idDrink: number

  constructor(private ingredientsService: NonAlcoDrinksService) { }

  ngOnInit(): void {
    this.getCocktails();
  }

  private getCocktails(): void {
    this.ingredientsService.getCocktailsData()
      .subscribe(data => {
        this.cocktailList = data.drinks;
        console.log(data);
        
      });
    console.log(123)
  }

  private getCocktail(idDrink: number): void {
    this.ingredientsService.getCocktailData(idDrink)
      .subscribe((data) => {
        this.cocktail = data;
      })
  }
}
