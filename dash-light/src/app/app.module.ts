import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { GanhosComponent } from './ganhos/ganhos.component';
import { DashComponent } from './dash/dash.component';
import { ChartModule } from 'angular2-chartjs';
import {HttpClientModule} from '@angular/common/http';
import { AppLightService } from './app-light.service';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopHeaderComponent,
    GanhosComponent,
    DashComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ChartModule,
    HttpClientModule    
  ],
  providers: [AppLightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
