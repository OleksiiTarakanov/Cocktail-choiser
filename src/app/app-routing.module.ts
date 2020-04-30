import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  { path: 'cocktails', component: MainComponent },
//   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }