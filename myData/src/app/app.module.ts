import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DatasComponent } from './datas/datas.component';
import { SidebarInTabComponent } from './sidebar-in-tab/sidebar-in-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DatasComponent,
    SidebarInTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
