import { Injectable } from '@angular/core';
import { Moon } from './moon';
import { MOONS } from './mock-moons';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoonService {

  constructor() { }

  getMoons(): Observable<Moon[]> {
    const moons = of(MOONS)
    return moons
  }

  getMoon(id: number): Observable<Moon> {
    const moon = MOONS.find(m => m.id === id)!
    return of(moon)
  }

  getMoonByName(name: string): Moon | null {
    const moon = MOONS.find(m => m.name.toLowerCase() === name.toLowerCase());
    return moon ? moon : null;
  }

}
