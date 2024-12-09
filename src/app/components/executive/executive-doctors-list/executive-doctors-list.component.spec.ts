import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveDoctorsListComponent } from './executive-doctors-list.component';

describe('ExecutiveDoctorsListComponent', () => {
  let component: ExecutiveDoctorsListComponent;
  let fixture: ComponentFixture<ExecutiveDoctorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveDoctorsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveDoctorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
