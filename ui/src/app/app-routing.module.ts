import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlotComponent } from './plot/plot.component';

const routes: Routes = [
  { path: '', component: PlotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
