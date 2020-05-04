import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from 'src/app/core/interfaces/cocktail-interface/cocktail.interface';

@Pipe({
  name: 'filterBySearch',
})
export class FilterBySearchPipe implements PipeTransform {

  transform(data: Array<Cocktail>, search: string): Array<Cocktail>{
    if (!search) {
      return data;
    }

    return data.filter((el: Cocktail) => {
      return el.strDrink.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

}
