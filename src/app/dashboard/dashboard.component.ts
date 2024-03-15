import { Component } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';
import { MOONS } from '../mock-moons';
import { Moon } from '../moon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  planets: Planet[] = []
  moon: Moon = MOONS[0]

  constructor(
    private planetService: PlanetService
  ) {}

  ngOnInit(): void {
    this.getPlanets()
  }

  getPlanets(): void {
    this.planetService.getPlanet(1).subscribe(planet => this.planets.push(planet))
    this.planetService.getPlanet(4).subscribe(planet => this.planets.push(planet))
  }

  
}
