import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonsComponent } from './moons.component';

describe('MoonsComponent', () => {
  let component: MoonsComponent;
  let fixture: ComponentFixture<MoonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoonsComponent]
    });
    fixture = TestBed.createComponent(MoonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
