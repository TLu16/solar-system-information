import { Component } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent {
  planets: Planet[] = []

  constructor(
    private planetService: PlanetService
  ) {}

  ngOnInit(): void {
    this.getPlanets()
  }

  getPlanets(): void {
    this.planetService.getPlanets().subscribe(planet => this.planets = planet)
  }

}
