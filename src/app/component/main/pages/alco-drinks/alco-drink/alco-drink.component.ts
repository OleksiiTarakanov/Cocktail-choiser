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
  cocktail: Cocktail
  idDrink: number

  constructor(
    private ingredientsService: IngredientsService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getCocktailId()
  }

  private getCocktailId(): void {
    this.activatedRoute.params
      .subscribe(
        params => {
          this.getCocktail(params.idDrink)
          console.log(params.idDrink);
        });
  }

  private getCocktail(idDrink: number): void {
    this.ingredientsService.getCocktailData(idDrink)
      .subscribe((data) => {
        this.cocktail = data;
        console.log(data);
      })
  }

}
