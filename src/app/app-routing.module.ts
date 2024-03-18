import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { MoonDetailComponent } from './moon-detail/moon-detail.component';
import { MoonsComponent } from './moons/moons.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'planets', component: PlanetsComponent},
  { path: 'moons', component: MoonsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detailPlanet/:id', component: PlanetDetailComponent},
  { path: 'detailMoon/:id', component: MoonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
