import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail, CocktailObject } from '../interfaces/cocktail-interface';

@Injectable({
  providedIn: 'root'
})
export class NonAlcoDrinksService {

  private url = `https://www.thecocktaildb.com/api/json/v1/1/`

  constructor(
    private http: HttpClient
  ) { }

  getCocktailsData(): Observable<CocktailObject> {
    return this.http.get<CocktailObject>(this.url+'filter.php?a=Non_Alcoholic');
  }

  getCocktailData(idDrink: number): Observable<CocktailObject>{
    return this.http.get<CocktailObject>(`${this.url}/lookup.php?i=${idDrink}`);
  }
}
