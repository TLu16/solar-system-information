import { Component } from '@angular/core';
import { Moon } from '../moon';
import { ActivatedRoute } from '@angular/router';
import { MoonService } from '../moon.service';

@Component({
  selector: 'app-moon-detail',
  templateUrl: './moon-detail.component.html',
  styleUrls: ['./moon-detail.component.css']
})
export class MoonDetailComponent {
  moon?: Moon

  constructor(
    private route: ActivatedRoute,
    private moonService: MoonService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.moonService.getMoon(id)
      .subscribe(moon => this.moon = moon)
  }
}
