import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';

import { HttpClientModule } from '@angular/common/http';
import { AlcoCocktailsComponent } from './app/component/main/alco-cocktails/alco-cocktails.component';
import { NoneAlcoholComponent } from './component/main/none-alcohol/none-alcohol.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AlcoCocktailsComponent,
    NoneAlcoholComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
