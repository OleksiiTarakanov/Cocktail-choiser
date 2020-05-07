import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './component/main/pages/about/about.component';
import { PageNotFoundComponent } from './component/main/pages/page-not-found/page-not-found.component';
import { AlcoDrinksComponent } from './component/main/pages/alco-drinks/alco-drinks.component';
import { NoneAlcoDrinksComponent } from './component/main/pages/none-alco-drinks/none-alco-drinks.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterBySearchPipe } from './shared/pipes/filter-by-seach/filter-by-search.pipe';
import { AlcoDrinkComponent } from './component/main/pages/alco-drinks/alco-drink/alco-drink.component';
import { NoneAlcoDrinkComponent } from './component/main/pages/none-alco-drinks/none-alco-drink/none-alco-drink.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PageNotFoundComponent,
    AboutComponent,
    AlcoDrinksComponent,
    NoneAlcoDrinksComponent,
    FilterBySearchPipe,
    AlcoDrinkComponent,
    NoneAlcoDrinkComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
