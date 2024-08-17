import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenTextComponent } from './gen-text.component';

describe('GenTextComponent', () => {
  let component: GenTextComponent;
  let fixture: ComponentFixture<GenTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
