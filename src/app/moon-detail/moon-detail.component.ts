import { Component } from '@angular/core';
import { Moon } from '../moon';
import { ActivatedRoute } from '@angular/router';
import { MoonService } from '../moon.service';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-moon-detail',
  templateUrl: './moon-detail.component.html',
  styleUrls: ['./moon-detail.component.css']
})
export class MoonDetailComponent {
  moon?: Moon
  planet?: Planet

  constructor(
    private route: ActivatedRoute,
    private moonService: MoonService,
    private planetService: PlanetService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.moonService.getMoon(id)
      .subscribe(moon => this.moon = moon)
    this.getPlanet(this.moon?.motherPlanet!)
  }

  getPlanet(name: string): void {
    this.planet = this.planetService.searchPlanetByName(name)!
  }
}
