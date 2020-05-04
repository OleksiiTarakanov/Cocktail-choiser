import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PageNotFoundComponent } from './component/main/pages/page-not-found/page-not-found.component';
import { AlcoDrinksComponent } from './component/main/pages/alco-drinks/alco-drinks.component';
import { NoneAlcoDrinksComponent } from './component/main/pages/none-alco-drinks/none-alco-drinks.component';
import { AboutComponent } from './component/main/pages/about/about.component';
import { AlcoDrinkComponent } from './component/main/pages/alco-drinks/alco-drink/alco-drink.component';
import { NoneAlcoDrinkComponent } from './component/main/pages/none-alco-drinks/none-alco-drink/none-alco-drink.component';

const routes: Routes = [
  { path: '', redirectTo: 'alco-drinks', pathMatch: 'full' },
  { path: 'alco-drinks', component: AlcoDrinksComponent },
  { path: 'alco-drinks/:idDrink', component: AlcoDrinkComponent },
  { path: 'none-alco-drinks', component: NoneAlcoDrinksComponent },
  { path: 'none-alco-drinks/:idDrink', component: NoneAlcoDrinkComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }