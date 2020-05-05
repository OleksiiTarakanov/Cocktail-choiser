import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IngredientsService } from 'src/app/core/services/ingredients.service';
import { Cocktail } from 'src/app/core/interfaces/cocktail-interface/cocktail.interface';


@Component({
  selector: 'app-alco-drink',
  templateUrl: './alco-drink.component.html',
  styleUrls: ['./alco-drink.component.scss']
})
export class AlcoDrinkComponent implements OnInit {
  cocktailList: Array<Cocktail>
  cocktail: Cocktail
  idDrink: number

  constructor(
    private ingredientsService: IngredientsService,
    private activatedRoute: ActivatedRoute,
    ) { }

  async ngOnInit(): Promise<void> {
   const res =  await this.getCocktailId()
  }

  private async getCocktailId(): Promise<void> {
    const res = await this.activatedRoute.params
      .subscribe(
        params => {
          this.getCocktail(params.idDrink);
          console.log(params.idDrink);
        });
  }

  private getCocktail(idDrink: number): void {
    this.ingredientsService.getCocktailData(idDrink)
      .subscribe((data) => {
        console.log(data.drinks[0]);
        this.cocktail = data.drinks[0];
      })
  }


}
