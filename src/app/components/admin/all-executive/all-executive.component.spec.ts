import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExecutiveComponent } from './all-executive.component';

describe('AllExecutiveComponent', () => {
  let component: AllExecutiveComponent;
  let fixture: ComponentFixture<AllExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllExecutiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
