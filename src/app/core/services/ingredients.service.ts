import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail, CocktailObject } from '../interfaces/cocktail-interface';


@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`

  constructor(
    private http: HttpClient
  ) { }

  getCocktailsData(): Observable<CocktailObject> {
    return this.http.get<CocktailObject>(this.url);
  }

  getCocktailData(idDrink: number): Observable<Cocktail>{
    return this.http.get<Cocktail>(`${this.url}/${idDrink}`);
  }
}
