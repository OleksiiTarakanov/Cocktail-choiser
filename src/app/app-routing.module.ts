import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PageNotFoundComponent } from './component/main/pages/page-not-found/page-not-found.component';
import { AlcoDrinksComponent } from './component/main/pages/alco-drinks/alco-drinks.component';
import { NoneAlcoDrinksComponent } from './component/main/pages/none-alco-drinks/none-alco-drinks.component';
import { AboutComponent } from './component/main/pages/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'alco-drinks', pathMatch: 'full' },
  { path: 'alco-drinks', component: AlcoDrinksComponent },
  { path: 'none-alco-drinks', component: NoneAlcoDrinksComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }