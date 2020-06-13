import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasComponent } from './datas/datas.component';
import { WarOfWorld1Component } from './war-of-world1/war-of-world1.component';
import { WarOfWorld1GraphicComponent } from './war-of-world1-graphic/war-of-world1-graphic.component';
import { WarOfWorld1Graphic2Component } from './war-of-world1-graphic2/war-of-world1-graphic2.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'datas',
    component: DatasComponent,
    children:[
      {
        path: 'data',
        component: WarOfWorld1Component
      },
      {
        path: 'graph1',
        component: WarOfWorld1GraphicComponent
      },
      {
        path: 'graph2',
        component: WarOfWorld1Graphic2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
