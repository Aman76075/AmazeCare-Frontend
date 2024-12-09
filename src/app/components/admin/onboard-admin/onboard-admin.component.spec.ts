import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardAdminComponent } from './onboard-admin.component';

describe('OnboardAdminComponent', () => {
  let component: OnboardAdminComponent;
  let fixture: ComponentFixture<OnboardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
