import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonDetailComponent } from './moon-detail.component';

describe('MoonDetailComponent', () => {
  let component: MoonDetailComponent;
  let fixture: ComponentFixture<MoonDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoonDetailComponent]
    });
    fixture = TestBed.createComponent(MoonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
