import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasComponent } from './datas/datas.component';


const routes: Routes = [
  {
    path: 'datas',
    component: DatasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
