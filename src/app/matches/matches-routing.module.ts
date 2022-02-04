import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PrimeComponent } from './prime/prime.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'regular',
    pathMatch: 'full'
  },
  { 
    path: 'regular',
   component: LandingPageComponent 
  },
  {
    path: 'prime',
    component: PrimeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
