import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { Cocktail } from 'src/app/core/interfaces/cocktail-interface/cocktail.interface';
import { NonAlcoDrinksService } from 'src/app/core/services/non-alco-drinks.service';


@Component({
  selector: 'app-none-alco-drink',
  templateUrl: './none-alco-drink.component.html',
  styleUrls: ['./none-alco-drink.component.scss']
})
export class NoneAlcoDrinkComponent implements OnInit {
  cocktail: Cocktail
  idDrink: number

  constructor(
    private ingredientsService: NonAlcoDrinksService,
    private activatedRoute: ActivatedRoute,
    private location: Location
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
        this.cocktail = data.drinks[0];
        console.log(data.drinks[0]);
      })
  }

  backClicked() {
    this.location.back();
  }

}
