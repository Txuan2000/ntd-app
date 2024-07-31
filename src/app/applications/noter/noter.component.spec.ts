import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoterComponent } from './noter.component';

describe('NoterComponent', () => {
  let component: NoterComponent;
  let fixture: ComponentFixture<NoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
