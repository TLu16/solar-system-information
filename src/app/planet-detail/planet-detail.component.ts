import { Component } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';
import { ActivatedRoute } from '@angular/router';
import { Moon } from '../moon';
import { MoonService } from '../moon.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent {
  planet?: Planet
  moons?: Moon[] = [] 

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService,
    private moonService: MoonService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.planetService.getPlanet(id)
      .subscribe(planet => this.planet = planet)
    this.getMoons()
  }

  getMoons(): void {
    if (this.planet) {
      this.moons = this.planetService.getMoons(this.planet)
    }
  }
}
