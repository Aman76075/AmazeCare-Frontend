import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabOperatorListComponent } from './lab-operator-list.component';

describe('LabOperatorListComponent', () => {
  let component: LabOperatorListComponent;
  let fixture: ComponentFixture<LabOperatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabOperatorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabOperatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
