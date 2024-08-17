import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexcelComponent } from './dexcel.component';

describe('DexcelComponent', () => {
  let component: DexcelComponent;
  let fixture: ComponentFixture<DexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexcelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
