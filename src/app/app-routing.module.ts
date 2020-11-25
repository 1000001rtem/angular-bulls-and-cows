import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BullsAndCowsComponent} from './bulls-and-cows/bulls-and-cows.component';

export const routes: Routes = [
  {
    path: 'bulls-and-cows',
    component: BullsAndCowsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/bulls-and-cows'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
