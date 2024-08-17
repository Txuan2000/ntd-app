import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceMapComponent } from './distance-map.component';

describe('DistanceMapComponent', () => {
  let component: DistanceMapComponent;
  let fixture: ComponentFixture<DistanceMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistanceMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DistanceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
