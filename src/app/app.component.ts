import { Component, Injectable } from '@angular/core';
import { Moon } from './moon';
import { Planet } from './planet';
import { PlanetService } from './planet.service';
import { MoonService } from './moon.service';
import { Route, Router, RouterLink } from '@angular/router';

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
  private router: Router) {}

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
    let planet = this.planetService.getPlanetByName(this.planetName)
    if (planet) {
      this.planetNotFound = false;
      // this.router.navigated = false
      // this.router.navigateByUrl('/',{skipLocationChange:true})
      // this.router.navigated = false
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
      this.moonNotFound = false;
      // this.router.navigated = false
      // this.router.navigateByUrl('/',{skipLocationChange:true})
      // this.router.navigated = false
      this.router.navigate(['/detailMoon/', moon.id]);
      this.planetName = ""
    } else {
      this.moonName = ""
      this.moonNotFound = true;
    }
  }

}
