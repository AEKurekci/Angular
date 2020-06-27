import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DatasComponent } from './datas/datas.component';
import { SidebarInTabComponent } from './sidebar-in-tab/sidebar-in-tab.component';
import { WarOfWorld1Component } from './war-of-world1/war-of-world1.component';
import { WarOfWorld1GraphicComponent } from './war-of-world1-graphic/war-of-world1-graphic.component';
import { WarOfWorld1Graphic2Component } from './war-of-world1-graphic2/war-of-world1-graphic2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimationSampleComponent } from './animation-sample/animation-sample.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DatasComponent,
    SidebarInTabComponent,
    WarOfWorld1Component,
    WarOfWorld1GraphicComponent,
    WarOfWorld1Graphic2Component,
    DashboardComponent,
    AnimationSampleComponent,
    ProductDetailComponent,
    HouseDetailComponent,
    PageNotFountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
