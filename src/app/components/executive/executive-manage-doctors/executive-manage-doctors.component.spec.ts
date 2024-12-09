import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveManageDoctorsComponent } from './executive-manage-doctors.component';

describe('ExecutiveManageDoctorsComponent', () => {
  let component: ExecutiveManageDoctorsComponent;
  let fixture: ComponentFixture<ExecutiveManageDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveManageDoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveManageDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
