import { Component, Injectable } from '@angular/core';
import { Moon } from './moon';
import { Planet } from './planet';
import { PlanetService } from './planet.service';
import { MoonService } from './moon.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  title = 'Unser Sonnensystem';
  
  planets: Planet[] = []
  moons: Moon[] = []
  planetName: string = ""
  moonName: string = ""
  planetNotFound: boolean = false
  moonNotFound: boolean = false

constructor(
  private planetService: PlanetService,
  private moonService: MoonService,
  private router: Router, 
  private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPlanets()
    this.getMoons()
  }

  getPlanets(): void {
    this.planetService.getPlanets().subscribe(planet => this.planets = planet)
  }

  getMoons(): void {
    this.moonService.getMoons().subscribe(moon => this.moons = moon)
  }

  planetNameLink(): void {
    let planet = this.planetService.searchPlanetByName(this.planetName)
    if (planet) {
      this.planetNotFound = false

      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.router.onSameUrlNavigation = 'reload'
      this.router.navigate(['/detailMoon/', planet.id], {relativeTo: this.route})

      this.router.navigate(['/detailPlanet/', planet.id],)
      this.planetName = ""
    } else {
      this.planetName = ""
      this.planetNotFound = true;
    }
  }

  moonNameLink(): void {
    let moon = this.moonService.getMoonByName(this.moonName)
    if (moon) {
      this.moonNotFound = false

      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.router.onSameUrlNavigation = 'reload'
      this.router.navigate(['/detailMoon/', moon.id], {relativeTo: this.route})
      
      this.planetName = ""
    } else {
      this.moonName = ""
      this.moonNotFound = true;
    }
  }

}
