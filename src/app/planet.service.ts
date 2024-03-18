import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { PLANETS } from './mock-planets';
import { Observable, of } from 'rxjs';
import { Moon } from './moon';

@Injectable({
  providedIn: 'root'
})

export class PlanetService {

  constructor() { }

  getPlanets(): Observable<Planet[]> {
    const planets = of(PLANETS)
    return planets
  }

  getPlanet(id: number): Observable<Planet> {
    const planet = PLANETS.find(p => p.id === id)!
    return of(planet)
  }

  getMoons(planet: Planet): Moon[] {
    const moons = planet.moons?.filter(m => m.motherPlanet == planet.name)!
    return moons
  }

  searchPlanetByName(name: string): Planet | null {
    const planet = PLANETS.find(p => p.name.toLowerCase() === name.toLowerCase());
    return planet ? planet : null;
  }

  getPlanetByName(name: string): Planet {
    const planet = PLANETS.find(p => p.name.toLowerCase() === name.toLowerCase())!
    return planet;
  }

}
