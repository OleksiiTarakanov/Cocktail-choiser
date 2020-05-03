import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';

import { HttpClientModule } from '@angular/common/http';

import { AboutComponent } from './component/main/pages/about/about.component';
import { PageNotFoundComponent } from './component/main/pages/page-not-found/page-not-found.component';
import { AlcoDrinksComponent } from './component/main/pages/alco-drinks/alco-drinks.component';
import { NoneAlcoDrinksComponent } from './component/main/pages/none-alco-drinks/none-alco-drinks.component';
import { AppRoutingModule } from './app-routing.module';




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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
