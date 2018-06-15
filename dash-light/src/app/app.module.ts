import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { GanhosComponent } from './ganhos/ganhos.component';
import { DashComponent } from './dash/dash.component';
import { ChartsModule } from 'ng4-charts/ng4-charts'; 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopHeaderComponent,
    GanhosComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
