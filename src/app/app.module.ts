import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { MoonDetailComponent } from './moon-detail/moon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    DashboardComponent,
    PlanetDetailComponent,
    MoonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
