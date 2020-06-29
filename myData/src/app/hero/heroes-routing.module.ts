import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from '../heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
    children: [
      {
        path: 'heroes-list',
        component: HeroListComponent,
        data: { animation: 'heroes' }
      },
      {
        path: 'crisis-center',
        component: CrisisListComponent
      }
    ]
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent,
    data: { animation: 'hero' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
