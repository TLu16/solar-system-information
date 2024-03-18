import { Component } from '@angular/core';
import { Moon } from '../moon';
import { MoonService } from '../moon.service';

@Component({
  selector: 'app-moons',
  templateUrl: './moons.component.html',
  styleUrls: ['./moons.component.css']
})
export class MoonsComponent {
  moons: Moon[] = []

  constructor(
    private moonService: MoonService
  ) {}

  ngOnInit(): void {
    this.getMoons()
  }

  getMoons(): void {
    this.moonService.getMoons().subscribe(moon => this.moons = moon)
  }

}
