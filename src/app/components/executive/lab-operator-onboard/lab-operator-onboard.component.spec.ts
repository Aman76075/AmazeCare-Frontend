import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabOperatorOnboardComponent } from './lab-operator-onboard.component';

describe('LabOperatorOnboardComponent', () => {
  let component: LabOperatorOnboardComponent;
  let fixture: ComponentFixture<LabOperatorOnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabOperatorOnboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabOperatorOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
